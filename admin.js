import { supabase } from './config.js'
import { getBebidas, addBebida, updateBebida, deleteBebida } from './database.js'

// Elementos do DOM
const form = document.getElementById('bebidaForm')
const bebidasContainer = document.getElementById('bebidasContainer')
const successMessage = document.getElementById('successMessage')
const errorMessage = document.getElementById('errorMessage')
const limparFormBtn = document.getElementById('limparForm')

// Função para mostrar mensagem de sucesso
function showSuccess(message) {
    successMessage.textContent = message
    successMessage.style.display = 'block'
    setTimeout(() => {
        successMessage.style.display = 'none'
    }, 3000)
}

// Função para mostrar mensagem de erro
function showError(message) {
    errorMessage.textContent = message
    errorMessage.style.display = 'block'
    setTimeout(() => {
        errorMessage.style.display = 'none'
    }, 3000)
}

// Função para limpar o formulário
function limparFormulario() {
    form.reset()
    form.elements.id.value = ''
}

// Função para preencher o formulário com os dados de uma bebida
function preencherFormulario(bebida) {
    form.elements.id.value = bebida.id
    form.elements.nome.value = bebida.nome
    form.elements.categoria.value = bebida.categoria
    form.elements.origem.value = bebida.origem
    form.elements.historia.value = bebida.historia
    form.elements.caracteristicas.value = bebida.caracteristicas
    form.elements.curiosidades.value = bebida.curiosidades
    form.elements.envelhecimento.value = bebida.envelhecimento || ''
    form.elements.botanicos.value = bebida.botanicos || ''
    form.elements.como_apreciar.value = bebida.como_apreciar
    form.elements.temperatura_servir.value = bebida.temperatura_servir
}

// Função para renderizar a lista de bebidas
async function renderizarBebidas() {
    try {
        const bebidas = await getBebidas()
        bebidasContainer.innerHTML = bebidas.map(bebida => `
            <div class="bebida-item-admin">
                <div>
                    <strong>${bebida.nome}</strong> - ${bebida.categoria}
                </div>
                <div class="actions">
                    <button onclick="window.editarBebida(${bebida.id})">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button onclick="window.excluirBebida(${bebida.id})" style="background: #dc3545;">
                        <i class="fas fa-trash"></i> Excluir
                    </button>
                </div>
            </div>
        `).join('')
    } catch (error) {
        showError('Erro ao carregar bebidas: ' + error.message)
    }
}

// Função para editar uma bebida
window.editarBebida = async (id) => {
    try {
        const bebidas = await getBebidas()
        const bebida = bebidas.find(b => b.id === id)
        if (bebida) {
            preencherFormulario(bebida)
        }
    } catch (error) {
        showError('Erro ao carregar bebida: ' + error.message)
    }
}

// Função para excluir uma bebida
window.excluirBebida = async (id) => {
    if (confirm('Tem certeza que deseja excluir esta bebida?')) {
        try {
            await deleteBebida(id)
            showSuccess('Bebida excluída com sucesso!')
            await renderizarBebidas()
        } catch (error) {
            showError('Erro ao excluir bebida: ' + error.message)
        }
    }
}

// Event Listeners
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const formData = new FormData(form)
    const bebida = Object.fromEntries(formData.entries())
    const id = bebida.id
    delete bebida.id

    try {
        if (id) {
            await updateBebida(id, bebida)
            showSuccess('Bebida atualizada com sucesso!')
        } else {
            await addBebida(bebida)
            showSuccess('Bebida adicionada com sucesso!')
        }
        
        limparFormulario()
        await renderizarBebidas()
    } catch (error) {
        showError('Erro ao salvar bebida: ' + error.message)
    }
})

limparFormBtn.addEventListener('click', limparFormulario)

// Carregar bebidas ao iniciar
document.addEventListener('DOMContentLoaded', renderizarBebidas) 