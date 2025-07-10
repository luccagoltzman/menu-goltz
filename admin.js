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

// Função para obter o ícone da categoria
function getCategoryIcon(categoria) {
    const icons = {
        'Whisky': '<i class="fa-solid fa-whiskey-glass"></i>',
        'Cachaça': '<i class="fa-solid fa-wine-bottle"></i>',
        'Tequila': '<i class="fa-solid fa-bottle-droplet"></i>',
        'Vinho': '<i class="fa-solid fa-wine-glass-alt"></i>',
        'Licores': '<i class="fa-solid fa-glass-martini"></i>'
    }
    return icons[categoria] || '<i class="fa-solid fa-glass-cheers"></i>'
}

// Função para formatar texto
function formatText(textArea, format) {
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = textArea.value.substring(start, end);
    let formattedText = '';

    switch (format) {
        case 'bold':
            formattedText = `**${selectedText}**`;
            break;
        case 'italic':
            formattedText = `_${selectedText}_`;
            break;
        case 'bullet':
            formattedText = selectedText.split('\n').map(line => `• ${line}`).join('\n');
            break;
        case 'heading':
            formattedText = `## ${selectedText}`;
            break;
    }

    textArea.value = textArea.value.substring(0, start) + formattedText + textArea.value.substring(end);
    textArea.focus();
    textArea.setSelectionRange(start, start + formattedText.length);
}

// Função para renderizar a lista de bebidas
async function renderizarBebidas() {
    try {
        const bebidas = await getBebidas()
        bebidasContainer.innerHTML = bebidas.map(bebida => `
            <div class="bebida-item-admin">
                <div class="bebida-info">
                    <span class="bebida-icon">${getCategoryIcon(bebida.categoria)}</span>
                    <div>
                        <strong>${bebida.nome}</strong>
                        <div style="color: #6c757d; font-size: 0.9rem;">
                            <i class="fa-solid fa-globe-americas"></i> ${bebida.origem}
                            ${bebida.rating_medio ? `
                                <span style="margin-left: 1rem;">
                                    <i class="fa-solid fa-star" style="color: #ffc107;"></i>
                                    ${bebida.rating_medio.toFixed(1)}
                                    <small>(${bebida.total_avaliacoes})</small>
                                </span>
                            ` : ''}
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <button onclick="window.editarBebida(${bebida.id})" class="tooltip">
                        <i class="fa-solid fa-edit"></i> Editar
                        <span class="tooltiptext">Editar bebida</span>
                    </button>
                    <button onclick="window.excluirBebida(${bebida.id})" style="background: #dc3545;" class="tooltip">
                        <i class="fa-solid fa-trash"></i> Excluir
                        <span class="tooltiptext">Excluir bebida</span>
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
            // Scroll suave até o formulário
            form.scrollIntoView({ behavior: 'smooth' })
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
        // Scroll suave até a lista de bebidas
        bebidasContainer.scrollIntoView({ behavior: 'smooth' })
    } catch (error) {
        showError('Erro ao salvar bebida: ' + error.message)
    }
})

limparFormBtn.addEventListener('click', limparFormulario)

// Adicionar eventos de formatação de texto
document.querySelectorAll('.format-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const format = btn.dataset.format;
        const textArea = btn.closest('.form-group').querySelector('textarea');
        formatText(textArea, format);
        
        // Adicionar classe active temporariamente
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 200);
    });
});

// Adicionar feedback visual aos botões de ação
document.querySelectorAll('button[type="submit"]').forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.classList.contains('loading')) {
            btn.classList.add('loading');
            setTimeout(() => btn.classList.remove('loading'), 1000);
        }
    });
});

// Melhorar as mensagens de feedback
function showMessage(type, message) {
    const messageElement = document.getElementById(`${type}Message`);
    const span = messageElement.querySelector('span');
    span.textContent = message;
    messageElement.style.display = 'flex';
    messageElement.style.opacity = '0';
    
    // Animar entrada
    requestAnimationFrame(() => {
        messageElement.style.opacity = '1';
    });

    // Esconder após 5 segundos
    setTimeout(() => {
        messageElement.style.opacity = '0';
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 300);
    }, 5000);
}

// Adicionar animação de entrada aos elementos
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    });
});

// Adicionar validação em tempo real
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    });
});

// Carregar bebidas ao iniciar
document.addEventListener('DOMContentLoaded', renderizarBebidas) 