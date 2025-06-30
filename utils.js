// Utilitários para manipulação do DOM
const DOM = {
    // Função para criar elemento a partir de um template
    createFromTemplate: (templateId) => {
        const template = document.getElementById(templateId);
        return template.content.cloneNode(true);
    },

    // Função para preencher conteúdo de um elemento
    fillContent: (element, content) => {
        Object.entries(content).forEach(([selector, value]) => {
            const target = element.querySelector(selector);
            if (target) {
                if (typeof value === 'string') {
                    target.textContent = value;
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([attr, attrValue]) => {
                        target[attr] = attrValue;
                    });
                }
            }
        });
        return element;
    }
};

// Utilitários para efeitos visuais
const Effects = {
    // Função para atualizar posição do mouse para efeitos de iluminação
    handleMouseMove: (e, element) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty('--mouse-x', `${x}px`);
        element.style.setProperty('--mouse-y', `${y}px`);
    },

    // Função para criar partículas
    createParticle: (x, y) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Gera valores aleatórios para a animação
        const particleX = Math.random() * 100 - 50;
        const particleY = Math.random() * -100;
        
        particle.style.cssText = `
            position: fixed;
            pointer-events: none;
            width: 4px;
            height: 4px;
            background: ${Math.random() > 0.5 ? '#D4AF37' : '#BF953F'};
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            opacity: 1;
            transform: translate(-50%, -50%);
        `;

        // Define as variáveis CSS para a animação
        particle.style.setProperty('--particle-x', `${particleX}px`);
        particle.style.setProperty('--particle-y', `${particleY}px`);
        particle.style.animation = 'particle 1s ease-out forwards';

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
};

// Utilitários para animações
const Animations = {
    // Função para criar observador de interseção
    createIntersectionObserver: (callback, options = {}) => {
        return new IntersectionObserver(callback, {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px',
            ...options
        });
    },

    // Função para aplicar animação de entrada
    applyEntranceAnimation: (element, options = {}) => {
        const {
            opacity = '0',
            transform = 'translateY(20px)',
            delay = 0,
            duration = 0.5,
            easing = 'cubic-bezier(0.4, 0, 0.2, 1)'
        } = options;

        element.style.opacity = opacity;
        element.style.transform = transform;
        element.style.transition = `all ${duration}s ${easing}`;
        element.style.transitionDelay = `${delay}s`;

        return element;
    }
};

// Utilitários para ícones
const Icons = {
    // Mapeamento de categorias para ícones
    categoryIcons: {
        'Whisky': 'fa-solid fa-whiskey-glass',
        'Gin': 'fa-solid fa-martini-glass-citrus',
        'Vodka': 'fa-solid fa-martini-glass',
        'Rum': 'fa-solid fa-glass-water',
        'Tequila': 'fa-solid fa-bottle-droplet',
        'Licores': 'fa-solid fa-wine-bottle',
        'Cognac': 'fa-solid fa-wine-glass',
        'default': 'fa-solid fa-glass-martini-alt'
    },

    // Função para obter ícone por categoria
    getIconForCategory: (category) => {
        return Icons.categoryIcons[category] || Icons.categoryIcons.default;
    }
};

// Utilitários para performance
const Performance = {
    // Função para debounce
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Função para throttle
    throttle: (func, limit) => {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Exporta todos os utilitários
window.MenuUtils = {
    DOM,
    Effects,
    Animations,
    Icons,
    Performance
}; 