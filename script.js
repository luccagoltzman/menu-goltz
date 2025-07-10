import { getBebidas } from './database.js'
import { initRatingSystem } from './ratings.js'

// Função para criar uma seção do menu
function criarSecao(categoria) {
    const template = document.getElementById('section-template')
    const clone = template.content.cloneNode(true)
    const section = clone.querySelector('.menu-section')
    
    const titulo = section.querySelector('.section-title')
    titulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1)
    
    // Adicionar ícone apropriado
    const icone = section.querySelector('.section-icon')
    switch (categoria.toLowerCase()) {
        case 'whisky':
            icone.className = 'fas fa-whiskey-glass'
            break
        case 'cachaca':
            icone.className = 'fas fa-wine-bottle'
            break
        case 'tequila':
            icone.className = 'fas fa-bottle-droplet'
            break
        case 'vinho':
            icone.className = 'fas fa-wine-glass-alt'
            break
        case 'licores':
            icone.className = 'fas fa-glass-martini'
            break
        default:
            icone.className = 'fas fa-glass-cheers'
    }
    
    return section
}

// Função para criar um elemento de bebida
function criarElementoBebida(bebida) {
    const template = document.getElementById('bebida-template')
    const clone = template.content.cloneNode(true)
    
    const element = clone.querySelector('.bebida-item')
    element.querySelector('.bebida-nome').textContent = bebida.nome
    element.querySelector('.origem-texto').textContent = bebida.origem
    
    // Adicionar média de avaliações se houver
    if (bebida.rating_medio > 0) {
        const ratingText = document.createElement('div')
        ratingText.className = 'rating-average'
        ratingText.innerHTML = `
            <i class="fas fa-star"></i>
            <span>${bebida.rating_medio.toFixed(1)}</span>
            <span class="rating-count">(${bebida.total_avaliacoes})</span>
        `
        element.querySelector('.bebida-info').appendChild(ratingText)
    }
    
    element.addEventListener('click', () => abrirModal(bebida))
    
    return element
}

// Função para abrir o modal com detalhes da bebida
function abrirModal(bebida) {
    const template = document.getElementById('modal-template')
    const clone = template.content.cloneNode(true)
    const modal = clone.querySelector('.modal')
    
    // Preencher informações da bebida
    modal.querySelector('h3').textContent = bebida.nome
    modal.querySelector('.historia-texto').textContent = bebida.historia || 'Informação não disponível'
    modal.querySelector('.caracteristicas-texto').textContent = bebida.caracteristicas || 'Informação não disponível'
    modal.querySelector('.curiosidades-texto').textContent = bebida.curiosidades || 'Informação não disponível'
    modal.querySelector('.envelhecimento-texto').textContent = bebida.envelhecimento || 'Informação não disponível'
    modal.querySelector('.botanicos-texto').textContent = bebida.botanicos || 'Informação não disponível'
    modal.querySelector('.apreciacao-texto').textContent = bebida.como_apreciar || 'Informação não disponível'
    modal.querySelector('.temperatura-texto').textContent = bebida.temperatura_servir || 'Temperatura ambiente'
    
    // Inicializar sistema de avaliação
    const ratingSystem = initRatingSystem(modal, bebida.id)
    
    // Eventos do modal
    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.remove()
    })
    
    document.body.appendChild(modal)
}

// Função para renderizar as bebidas
async function renderizarBebidas(bebidas) {
    const container = document.getElementById('menu-container')
    container.innerHTML = ''
    
    // Agrupar bebidas por categoria
    const bebidasPorCategoria = bebidas.reduce((acc, bebida) => {
        if (!acc[bebida.categoria]) {
            acc[bebida.categoria] = []
        }
        acc[bebida.categoria].push(bebida)
        return acc
    }, {})
    
    // Renderizar cada seção
    Object.entries(bebidasPorCategoria).forEach(([categoria, bebidasDaCategoria]) => {
        const section = criarSecao(categoria)
        bebidasDaCategoria.forEach(bebida => {
            const bebidaElement = criarElementoBebida(bebida)
            section.appendChild(bebidaElement)
        })
        container.appendChild(section)
        
        // Adicionar animação de fade-in
        setTimeout(() => {
            section.style.opacity = '1'
            section.style.transform = 'translateY(0)'
        }, 100)
    })
}

// Função para filtrar bebidas
async function filtrarBebidas(categoria) {
    const bebidas = await getBebidas()
    const bebidasFiltradas = categoria === 'todos' 
        ? bebidas 
        : bebidas.filter(bebida => bebida.categoria.toLowerCase() === categoria.toLowerCase())
    renderizarBebidas(bebidasFiltradas)
}

// Função para controlar o menu lateral
function initMenuLateral() {
    const menuToggle = document.getElementById('menuToggle')
    const filterBar = document.querySelector('.filter-bar')
    const menuOverlay = document.getElementById('menuOverlay')
    const filterButtons = document.querySelectorAll('.filter-btn')
    
    let touchStartX = 0
    let touchEndX = 0
    let isMenuOpen = false

    // Adiciona atributos de acessibilidade
    menuToggle.setAttribute('aria-label', 'Abrir menu de filtros')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-controls', 'filter-menu')
    
    filterBar.setAttribute('id', 'filter-menu')
    filterBar.setAttribute('role', 'navigation')
    filterBar.setAttribute('aria-label', 'Menu de filtros')

    function toggleMenu(forceState) {
        isMenuOpen = forceState !== undefined ? forceState : !isMenuOpen
        
        filterBar.classList.toggle('active', isMenuOpen)
        menuOverlay.classList.toggle('active', isMenuOpen)
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        
        // Atualiza estados de acessibilidade
        menuToggle.setAttribute('aria-expanded', isMenuOpen.toString())
        
        // Gerencia foco para acessibilidade
        if (isMenuOpen) {
            filterButtons[0]?.focus()
        } else {
            menuToggle?.focus()
        }
    }

    // Gerenciamento de gestos touch
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX
    }

    function handleTouchMove(e) {
        if (!touchStartX) return
        
        touchEndX = e.touches[0].clientX
        const diffX = touchEndX - touchStartX
        
        // Previne scroll vertical enquanto arrasta horizontalmente
        if (Math.abs(diffX) > 10) {
            e.preventDefault()
        }
    }

    function handleTouchEnd() {
        if (!touchStartX || !touchEndX) return
        
        const diffX = touchEndX - touchStartX
        const threshold = window.innerWidth * 0.15 // 15% da largura da tela
        
        if (diffX > threshold && !isMenuOpen) {
            // Swipe direita -> abre menu
            toggleMenu(true)
        } else if (diffX < -threshold && isMenuOpen) {
            // Swipe esquerda -> fecha menu
            toggleMenu(false)
        }
        
        // Reset valores
        touchStartX = 0
        touchEndX = 0
    }

    // Event Listeners
    menuToggle?.addEventListener('click', () => toggleMenu())
    menuOverlay?.addEventListener('click', () => toggleMenu(false))
    
    // Touch events
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)

    // Keyboard navigation
    filterBar?.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu(false)
        }
    })

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            toggleMenu(false)
        }
    })

    // Fechar menu ao clicar em um filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu(false)
            }
        })
    })
}

// Inicializar
document.addEventListener('DOMContentLoaded', async () => {
    // Inicializar menu lateral
    initMenuLateral()

    // Carregar todas as bebidas inicialmente
    const bebidas = await getBebidas()
    renderizarBebidas(bebidas)
    
    // Adicionar eventos de filtro
    const filterButtons = document.querySelectorAll('.filter-btn')
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const categoria = button.dataset.category
            
            // Atualizar estados dos botões
            filterButtons.forEach(btn => {
                btn.classList.remove('active')
                btn.setAttribute('aria-pressed', 'false')
            })
            button.classList.add('active')
            button.setAttribute('aria-pressed', 'true')
            
            filtrarBebidas(categoria)
        })
    })
}) 