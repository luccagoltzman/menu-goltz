import { supabase } from './config.js'

// Função para migrar os dados
async function migrarDados() {
    const menuData = {
        whisky: [
            {
                nome: "Macallan 12 Anos Double Cask",
                origem: "Escócia - Highland",
                historia: "O Macallan é conhecido por sua dedicação excepcional à qualidade e tradição na produção de whisky.",
                caracteristicas: "Cor dourada com notas de mel, frutas cítricas e carvalho.",
                curiosidades: "Maturado em barris de carvalho americano e europeu previamente usados para xerez.",
                envelhecimento: "12 anos em sistema double cask",
                como_apreciar: "Puro ou com algumas gotas de água para liberar os aromas",
                temperatura_servir: "Temperatura ambiente (18-20°C)"
            },
            // ... outros whiskys
        ],
        cachaca: [
            {
                nome: "Weber Haus Extra Premium",
                origem: "Ivoti, Rio Grande do Sul - Brasil",
                historia: "Produzida artesanalmente pela família Weber desde 1948 seguindo tradições alemãs.",
                caracteristicas: "Aroma frutado, sabor suave e aveludado",
                curiosidades: "Premiada internacionalmente como uma das melhores cachaças do Brasil",
                envelhecimento: "6 anos em barris de carvalho europeu",
                como_apreciar: "Pura ou em coquetéis sofisticados",
                temperatura_servir: "Temperatura ambiente ou levemente resfriada (16-18°C)"
            },
            // ... outras cachaças
        ],
        // ... outras categorias
    }

    // Limpar dados existentes
    console.log('Limpando dados existentes...')
    const { error: errorDelete } = await supabase
        .from('bebidas')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000') // Delete all

    if (errorDelete) {
        console.error('Erro ao limpar dados:', errorDelete)
        return
    }

    // Migrar cada bebida
    for (const [categoria, bebidas] of Object.entries(menuData)) {
        for (const bebida of bebidas) {
            const { error } = await supabase
                .from('bebidas')
                .insert({
                    ...bebida,
                    categoria: categoria
                })

            if (error) {
                console.error(`Erro ao inserir ${bebida.nome}:`, error)
            } else {
                console.log(`${bebida.nome} inserido com sucesso!`)
            }
        }
    }
}

// Executar migração
async function executarMigracao() {
    console.log('Iniciando migração...')
    
    console.log('Migrando dados...')
    await migrarDados()
    
    console.log('Migração concluída!')
}

executarMigracao() 