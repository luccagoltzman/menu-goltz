import { supabase } from './config.js'

// Funções para bebidas
export async function getBebidas() {
    const { data, error } = await supabase
        .from('bebidas')
        .select(`
            id,
            nome,
            categoria,
            origem,
            historia,
            caracteristicas,
            curiosidades,
            envelhecimento,
            botanicos,
            como_apreciar,
            temperatura_servir,
            created_at,
            avaliacoes (
                rating
            )
        `)
    
    if (error) {
        console.error('Erro ao buscar bebidas:', error)
        return []
    }

    // Calcular média das avaliações
    return data.map(bebida => ({
        ...bebida,
        rating_medio: bebida.avaliacoes?.length > 0
            ? bebida.avaliacoes.reduce((acc, curr) => acc + curr.rating, 0) / bebida.avaliacoes.length
            : 0,
        total_avaliacoes: bebida.avaliacoes?.length || 0
    }))
}

export async function addBebida(bebida) {
    console.log('Tentando adicionar bebida:', bebida)
    
    // Garantir que os campos correspondam exatamente aos da tabela
    const dadosBebida = {
        nome: bebida.nome,
        categoria: bebida.categoria,
        origem: bebida.origem,
        historia: bebida.historia,
        caracteristicas: bebida.caracteristicas,
        curiosidades: bebida.curiosidades || null,
        envelhecimento: bebida.envelhecimento || null,
        botanicos: bebida.botanicos || null,
        como_apreciar: bebida.como_apreciar || null,
        temperatura_servir: bebida.temperatura_servir || null
    }

    console.log('Dados formatados para envio:', dadosBebida)

    // Inserir diretamente na tabela
    const { data: bebidaInserida, error } = await supabase
        .from('bebidas')
        .insert([dadosBebida])
        .select()

    if (error) {
        console.error('Erro detalhado ao adicionar bebida:', error)
        throw error
    }

    console.log('Bebida adicionada com sucesso:', bebidaInserida)
    return bebidaInserida[0]
}

export async function updateBebida(id, bebida) {
    console.log('Tentando atualizar bebida:', id, bebida)
    
    // Garantir que os campos correspondam exatamente aos da tabela
    const dadosBebida = {
        nome: bebida.nome,
        categoria: bebida.categoria,
        origem: bebida.origem,
        historia: bebida.historia,
        caracteristicas: bebida.caracteristicas,
        curiosidades: bebida.curiosidades || null,
        envelhecimento: bebida.envelhecimento || null,
        botanicos: bebida.botanicos || null,
        como_apreciar: bebida.como_apreciar || null,
        temperatura_servir: bebida.temperatura_servir || null
    }

    console.log('Dados formatados para atualização:', dadosBebida)

    // Atualizar diretamente na tabela
    const { data: bebidaAtualizada, error } = await supabase
        .from('bebidas')
        .update(dadosBebida)
        .eq('id', id)
        .select()

    if (error) {
        console.error('Erro detalhado ao atualizar bebida:', error)
        throw error
    }

    console.log('Bebida atualizada com sucesso:', bebidaAtualizada)
    return bebidaAtualizada[0]
}

export async function deleteBebida(id) {
    const { error } = await supabase
        .from('bebidas')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Erro ao deletar bebida:', error)
        return false
    }

    return true
}

// Funções para avaliações
export async function addAvaliacao(bebidaId, rating) {
    const { data, error } = await supabase
        .from('avaliacoes')
        .insert([{
            bebida_id: bebidaId,
            rating: rating
        }])
        .select()

    if (error) {
        console.error('Erro ao adicionar avaliação:', error)
        return null
    }

    return data[0]
}

export async function getAvaliacoes(bebidaId) {
    const { data, error } = await supabase
        .from('avaliacoes')
        .select('rating')
        .eq('bebida_id', bebidaId)

    if (error) {
        console.error('Erro ao buscar avaliações:', error)
        return []
    }

    return data
} 