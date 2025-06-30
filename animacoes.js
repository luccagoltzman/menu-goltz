// Gerenciador de Animações
class AnimationManager {
    constructor() {
        // Configurações padrão para animações
        this.config = {
            entrance: {
                duration: 0.5,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                delay: 0.1
            },
            particle: {
                duration: 1000,
                count: 3
            }
        };

        // Observador de interseção para animações de entrada
        this.observer = MenuUtils.Animations.createIntersectionObserver(
            (entries) => this.handleIntersection(entries),
            { threshold: 0.1 }
        );

        // Bind dos métodos
        this.handleMouseMove = MenuUtils.Performance.throttle(
            this.handleMouseMove.bind(this),
            16
        );
    }

    // Inicializa as animações
    init() {
        this.setupEntranceAnimations();
        this.setupMouseEffects();
        this.setupParticleEffects();
    }

    // Configura animações de entrada
    setupEntranceAnimations() {
        const elements = document.querySelectorAll('.menu-section, .bebida-item');
        elements.forEach((element, index) => {
            MenuUtils.Animations.applyEntranceAnimation(element, {
                opacity: '0',
                transform: 'translateY(20px)',
                delay: index * this.config.entrance.delay,
                duration: this.config.entrance.duration,
                easing: this.config.entrance.easing
            });
            this.observer.observe(element);
        });
    }

    // Configura efeitos de mouse
    setupMouseEffects() {
        document.addEventListener('mousemove', this.handleMouseMove);
    }

    // Configura efeitos de partículas
    setupParticleEffects() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.bebida-item, .modal-content')) {
                this.createParticles(e.clientX, e.clientY);
            }
        });
    }

    // Manipula interseção de elementos
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                this.observer.unobserve(entry.target);
            }
        });
    }

    // Manipula movimento do mouse
    handleMouseMove(e) {
        const elements = document.querySelectorAll('.bebida-item, .modal-content');
        elements.forEach(element => {
            MenuUtils.Effects.handleMouseMove(e, element);
        });
    }

    // Cria partículas
    createParticles(x, y) {
        for (let i = 0; i < this.config.particle.count; i++) {
            setTimeout(() => {
                MenuUtils.Effects.createParticle(x, y);
            }, i * 100);
        }
    }

    // Anima abertura do modal
    animateModalOpen(modal) {
        const content = modal.querySelector('.modal-content');
        const sections = modal.querySelectorAll('.modal-section');

        // Anima o conteúdo do modal
        content.style.opacity = '0';
        content.style.transform = 'scale(0.95)';
        
        requestAnimationFrame(() => {
            content.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            content.style.opacity = '1';
            content.style.transform = 'scale(1)';

            // Anima as seções em cascata
            sections.forEach((section, index) => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    section.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 100 + (index * 50));
            });
        });
    }

    // Anima fechamento do modal
    animateModalClose(modal) {
        const content = modal.querySelector('.modal-content');
        
        content.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        content.style.opacity = '0';
        content.style.transform = 'scale(0.95)';
        
        return new Promise(resolve => {
            setTimeout(resolve, 200);
        });
    }
}

// Exporta o gerenciador de animações
window.AnimationManager = AnimationManager; 