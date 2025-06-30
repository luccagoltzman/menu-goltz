// Dados do menu (exemplo)
const menuData = {
    cachacas: [
        {
            nome: "Cachaça Vale Verde Extra Premium",
            teor: "40% ABV",
            origem: "Brasil - Minas Gerais",
            notas: "Aromas de baunilha e carvalho, paladar suave com notas de madeira",
            destaque: true
        },
        {
            nome: "Cachaça Weber Haus Premium Black",
            teor: "38% ABV",
            origem: "Brasil - Rio Grande do Sul",
            notas: "Envelhecida em carvalho, notas de especiarias e caramelo"
        }
    ],
    whiskies: [
        {
            nome: "Macallan 12 Years Double Cask",
            teor: "40% ABV",
            origem: "Escócia",
            notas: "Notas de mel, cítricos e carvalho",
            destaque: true
        },
        {
            nome: "Johnnie Walker Blue Label",
            teor: "40% ABV",
            origem: "Escócia",
            notas: "Complexo, com notas de chocolate amargo e defumados"
        }
    ],
    vinhos: [
        {
            nome: "Amarone della Valpolicella Classico",
            teor: "15% ABV",
            origem: "Itália - Vêneto",
            notas: "Encorpado, com notas de frutas secas e especiarias",
            destaque: true
        },
        {
            nome: "Château Margaux Premier Grand Cru",
            teor: "13% ABV",
            origem: "França - Bordeaux",
            notas: "Elegante, com taninos sedosos e notas de frutas negras"
        }
    ],
    tequilas: [
        {
            nome: "Don Julio 1942",
            teor: "40% ABV",
            origem: "México - Jalisco",
            notas: "Caramelo, baunilha e notas de chocolate",
            destaque: true
        },
        {
            nome: "Clase Azul Reposado",
            teor: "40% ABV",
            origem: "México - Jalisco",
            notas: "Agave cozido, baunilha e canela"
        }
    ],
    outros: [
        {
            nome: "Hendrick's Gin",
            teor: "41.4% ABV",
            origem: "Escócia",
            notas: "Pepino, rosas e botânicos tradicionais",
            destaque: true
        },
        {
            nome: "Zacapa XO",
            teor: "40% ABV",
            origem: "Guatemala",
            notas: "Chocolate, café e especiarias doces"
        }
    ]
};

// Função para criar o card de uma bebida
function createDrinkCard(drink) {
    const card = document.createElement('div');
    card.className = `drink-card ${drink.destaque ? 'destaque' : ''}`;
    
    // Adiciona um efeito de brilho
    const shine = document.createElement('div');
    shine.className = 'shine-effect';
    card.appendChild(shine);

    const content = document.createElement('div');
    content.className = 'drink-content';
    content.innerHTML = `
        <h3>${drink.nome}</h3>
        <p><strong>Teor Alcoólico:</strong> ${drink.teor}</p>
        <p><strong>Origem:</strong> ${drink.origem}</p>
        <p><strong>Notas:</strong> ${drink.notas}</p>
        ${drink.destaque ? '<span class="destaque-badge">✨ Destaque</span>' : ''}
    `;
    card.appendChild(content);

    // Adiciona efeito de parallax ao card
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        shine.style.opacity = '1';
        shine.style.transform = `translate(${x}px, ${y}px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        shine.style.opacity = '0';
    });

    return card;
}

// Função para preencher o conteúdo de uma categoria
function fillCategoryContent(category, drinks) {
    const content = category.querySelector('.category-content');
    content.innerHTML = '';
    drinks.forEach((drink, index) => {
        const card = createDrinkCard(drink);
        card.style.animationDelay = `${index * 0.1}s`;
        content.appendChild(card);
    });
}

// Inicialização do menu
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona efeito de parallax suave ao fundo
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
    });

    // Preencher todas as categorias com seus respectivos conteúdos
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        const categoryType = category.dataset.category;
        fillCategoryContent(category, menuData[categoryType]);

        // Adicionar evento de clique para expandir/recolher
        category.addEventListener('click', () => {
            const wasActive = category.classList.contains('active');
            
            // Fecha todas as categorias com animação
            categories.forEach(cat => {
                if (cat.classList.contains('active')) {
                    const content = cat.querySelector('.category-content');
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                    cat.classList.remove('active');
                }
            });

            // Se a categoria clicada não estava ativa, abre ela
            if (!wasActive) {
                category.classList.add('active');
                const content = category.querySelector('.category-content');
                content.style.maxHeight = `${content.scrollHeight}px`;
                content.style.opacity = '1';

                // Scroll suave até a categoria
                category.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest'
                });
            }
        });

        // Adiciona efeito de hover 3D nas categorias
        category.addEventListener('mousemove', (e) => {
            const rect = category.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            category.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        category.addEventListener('mouseleave', () => {
            category.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Adicionar estilos CSS dinâmicos
    const style = document.createElement('style');
    style.textContent = `
        .drink-card {
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.3s ease;
        }

        .shine-effect {
            position: absolute;
            top: -100%;
            left: -100%;
            width: 50px;
            height: 50px;
            background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .destaque-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: linear-gradient(45deg, var(--color-gold), var(--color-wine));
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            color: white;
            opacity: 0.9;
        }

        .drink-card.destaque {
            border-color: var(--color-gold);
            box-shadow: 0 0 15px rgba(203, 161, 53, 0.1);
        }

        @keyframes cardEntrance {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .drink-card {
            animation: cardEntrance 0.5s ease-out forwards;
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
}); 