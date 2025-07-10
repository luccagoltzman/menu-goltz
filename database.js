import { supabase } from './config.js'

// Funções para bebidas
export async function getBebidas() {
    const { data, error } = await supabase
        .from('bebidas')
        .select(`
            *,
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
    const { data, error } = await supabase
        .from('bebidas')
        .insert([bebida])
        .select()

    if (error) {
        console.error('Erro ao adicionar bebida:', error)
        return null
    }

    return data[0]
}

export async function updateBebida(id, bebida) {
    const { data, error } = await supabase
        .from('bebidas')
        .update(bebida)
        .eq('id', id)
        .select()

    if (error) {
        console.error('Erro ao atualizar bebida:', error)
        return null
    }

    return data[0]
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