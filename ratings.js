import { addAvaliacao, getAvaliacoes } from './database.js'

export class RatingSystem {
    constructor(container, bebidaId) {
        this.container = container
        this.bebidaId = bebidaId
        this.stars = container.querySelectorAll('.star-btn')
        this.averageEl = container.querySelector('.average-value')
        this.countEl = container.querySelector('.rating-count')
        
        this.init()
    }

    async init() {
        // Adicionar eventos de clique nas estrelas
        this.stars.forEach(star => {
            star.addEventListener('click', () => this.rate(parseInt(star.dataset.rating)))
        })

        // Carregar avaliações existentes
        const avaliacoes = await getAvaliacoes(this.bebidaId)
        if (avaliacoes.length > 0) {
            const media = avaliacoes.reduce((acc, curr) => acc + curr.rating, 0) / avaliacoes.length
            this.averageEl.textContent = media.toFixed(1)
            this.countEl.textContent = `(${avaliacoes.length} avaliações)`
        }
    }

    async rate(rating) {
        try {
            await addAvaliacao(this.bebidaId, rating)
            
            // Animar estrelas
            this.stars.forEach(star => {
                const starRating = parseInt(star.dataset.rating)
                const starIcon = star.querySelector('i')
                
                if (starRating <= rating) {
                    star.classList.add('just-rated')
                    starIcon.className = 'fas fa-star'
                    setTimeout(() => star.classList.remove('just-rated'), 300)
                } else {
                    starIcon.className = 'far fa-star'
                }
            })
            
            // Atualizar média e contagem
            const avaliacoes = await getAvaliacoes(this.bebidaId)
            const media = avaliacoes.reduce((acc, curr) => acc + curr.rating, 0) / avaliacoes.length
            this.averageEl.textContent = media.toFixed(1)
            this.countEl.textContent = `(${avaliacoes.length} avaliações)`

            // Mostrar mensagem de agradecimento
            this.showThankYou()
        } catch (error) {
            console.error('Erro ao avaliar:', error)
        }
    }

    showThankYou() {
        const thankYou = document.createElement('div')
        thankYou.className = 'rating-thank-you'
        thankYou.innerHTML = `
            <p>Obrigado pela sua avaliação!</p>
        `
        
        const existingThankYou = this.container.querySelector('.rating-thank-you')
        if (existingThankYou) {
            existingThankYou.remove()
        }
        
        this.container.appendChild(thankYou)
        setTimeout(() => thankYou.remove(), 2000)
    }
}

// Função para inicializar o sistema de avaliação em um modal
export function initRatingSystem(modal, bebidaId) {
    const container = modal.querySelector('.rating-container')
    return new RatingSystem(container, bebidaId)
} 