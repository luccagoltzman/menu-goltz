// Dados do menu com informações mais detalhadas
const menuData = {
    cachacas: [
        {
            nome: "Cachaça Vale Verde Extra Premium",
            teor: "40% ABV",
            origem: "Brasil - Minas Gerais",
            notas: "Aromas de baunilha e carvalho, paladar suave com notas de madeira",
            envelhecimento: "6 anos em barris de carvalho europeu",
            temperatura: "16-18°C",
            harmonizacao: "Queijos curados, doces de frutas",
            premios: ["Medalha de Ouro - Concurso Mundial de Bruxelas 2022"],
            destaque: true,
            preco: "R$ 280,00"
        },
        {
            nome: "Cachaça Weber Haus Premium Black",
            teor: "38% ABV",
            origem: "Brasil - Rio Grande do Sul",
            notas: "Envelhecida em carvalho, notas de especiarias e caramelo",
            envelhecimento: "5 anos em barris de carvalho americano",
            temperatura: "16-18°C",
            harmonizacao: "Chocolates amargos, sobremesas",
            preco: "R$ 220,00"
        }
    ],
    whiskies: [
        {
            nome: "Macallan 12 Years Double Cask",
            teor: "40% ABV",
            origem: "Escócia - Speyside",
            notas: "Notas de mel, cítricos e carvalho",
            envelhecimento: "12 anos em barris de xerez americano e europeu",
            temperatura: "18-20°C",
            harmonizacao: "Carnes vermelhas, chocolates",
            premios: ["Best Single Malt - World Whiskies Awards 2021"],
            destaque: true,
            preco: "R$ 750,00"
        },
        {
            nome: "Johnnie Walker Blue Label",
            teor: "40% ABV",
            origem: "Escócia",
            notas: "Complexo, com notas de chocolate amargo e defumados",
            envelhecimento: "Blend de whiskies raros com mais de 25 anos",
            temperatura: "18-20°C",
            harmonizacao: "Charutos, queijos azuis",
            preco: "R$ 1.200,00"
        }
    ],
    vinhos: [
        {
            nome: "Amarone della Valpolicella Classico",
            teor: "15% ABV",
            origem: "Itália - Vêneto",
            notas: "Encorpado, com notas de frutas secas e especiarias",
            envelhecimento: "36 meses em barris de carvalho francês",
            temperatura: "16-18°C",
            harmonizacao: "Carnes de caça, queijos maturados",
            premios: ["96 pontos Robert Parker"],
            destaque: true,
            preco: "R$ 890,00",
            uvas: "Corvina, Rondinella, Molinara"
        },
        {
            nome: "Château Margaux Premier Grand Cru",
            teor: "13% ABV",
            origem: "França - Bordeaux",
            notas: "Elegante, com taninos sedosos e notas de frutas negras",
            envelhecimento: "24 meses em barris novos de carvalho francês",
            temperatura: "16-18°C",
            harmonizacao: "Cordeiro, pratos trufados",
            preco: "R$ 5.900,00",
            uvas: "Cabernet Sauvignon, Merlot, Petit Verdot"
        }
    ],
    tequilas: [
        {
            nome: "Don Julio 1942",
            teor: "40% ABV",
            origem: "México - Jalisco",
            notas: "Caramelo, baunilha e notas de chocolate",
            envelhecimento: "Mínimo 2.5 anos em barris de carvalho americano",
            temperatura: "18-20°C",
            harmonizacao: "Chocolate amargo, frutas secas",
            premios: ["Duplo Ouro - San Francisco World Spirits Competition"],
            destaque: true,
            preco: "R$ 1.500,00",
            agave: "100% Agave Azul Weber"
        },
        {
            nome: "Clase Azul Reposado",
            teor: "40% ABV",
            origem: "México - Jalisco",
            notas: "Agave cozido, baunilha e canela",
            envelhecimento: "8 meses em barris de carvalho americano",
            temperatura: "18-20°C",
            harmonizacao: "Frutos do mar, pratos picantes",
            preco: "R$ 1.800,00",
            agave: "100% Agave Azul Weber"
        }
    ],
    outros: [
        {
            nome: "Hendrick's Gin",
            teor: "41.4% ABV",
            origem: "Escócia",
            notas: "Pepino, rosas e botânicos tradicionais",
            destilacao: "Pequenos lotes em alambique Carter-Head",
            temperatura: "8-10°C",
            harmonizacao: "Pepino fresco, frutas vermelhas",
            premios: ["Gold Medal - International Wine & Spirit Competition"],
            destaque: true,
            preco: "R$ 280,00",
            botanicos: "11 botânicos incluindo pétalas de rosa e pepino"
        },
        {
            nome: "Zacapa XO",
            teor: "40% ABV",
            origem: "Guatemala",
            notas: "Chocolate, café e especiarias doces",
            envelhecimento: "Sistema Solera com até 25 anos",
            temperatura: "18-20°C",
            harmonizacao: "Chocolate amargo, café gourmet",
            preco: "R$ 890,00",
            altitude: "Envelhecido a 2.300m acima do nível do mar"
        }
    ]
};

// Função para criar o card de uma bebida com detalhes mais ricos
function createDrinkCard(drink) {
    const card = document.createElement('div');
    card.className = `drink-card ${drink.destaque ? 'destaque' : ''}`;
    
    // Adiciona um efeito de brilho
    const shine = document.createElement('div');
    shine.className = 'shine-effect';
    card.appendChild(shine);

    const content = document.createElement('div');
    content.className = 'drink-content';

    // Cabeçalho do card com nome e preço
    const header = `
        <div class="drink-header">
            <h3>${drink.nome}</h3>
            <span class="drink-price">${drink.preco}</span>
        </div>
    `;

    // Informações principais
    const mainInfo = `
        <div class="drink-main-info">
            <p><strong>Teor Alcoólico:</strong> ${drink.teor}</p>
            <p><strong>Origem:</strong> ${drink.origem}</p>
            <p class="drink-notes"><strong>Notas:</strong> ${drink.notas}</p>
        </div>
    `;

    // Detalhes específicos da bebida
    let specificInfo = '';
    if (drink.envelhecimento) {
        specificInfo += `
            <div class="drink-specific-info">
                <div class="info-icon">🪵</div>
                <p><strong>Envelhecimento:</strong> ${drink.envelhecimento}</p>
            </div>
        `;
    }
    if (drink.uvas) {
        specificInfo += `
            <div class="drink-specific-info">
                <div class="info-icon">🍇</div>
                <p><strong>Uvas:</strong> ${drink.uvas}</p>
            </div>
        `;
    }
    if (drink.agave) {
        specificInfo += `
            <div class="drink-specific-info">
                <div class="info-icon">🌵</div>
                <p><strong>Agave:</strong> ${drink.agave}</p>
            </div>
        `;
    }
    if (drink.botanicos) {
        specificInfo += `
            <div class="drink-specific-info">
                <div class="info-icon">🌿</div>
                <p><strong>Botânicos:</strong> ${drink.botanicos}</p>
            </div>
        `;
    }

    // Informações de serviço
    const serviceInfo = `
        <div class="drink-service-info">
            <div class="service-item">
                <div class="info-icon">🌡️</div>
                <p><strong>Temperatura:</strong> ${drink.temperatura}</p>
            </div>
            <div class="service-item">
                <div class="info-icon">🍽️</div>
                <p><strong>Harmonização:</strong> ${drink.harmonizacao}</p>
            </div>
        </div>
    `;

    // Prêmios (se houver)
    let awards = '';
    if (drink.premios && drink.premios.length > 0) {
        awards = `
            <div class="drink-awards">
                <div class="awards-icon">🏆</div>
                <div class="awards-list">
                    ${drink.premios.map(premio => `<p>${premio}</p>`).join('')}
                </div>
            </div>
        `;
    }

    // Badge de destaque
    const badge = drink.destaque ? '<span class="destaque-badge">✨ Destaque da Casa</span>' : '';

    content.innerHTML = `
        ${badge}
        ${header}
        ${mainInfo}
        ${specificInfo}
        ${serviceInfo}
        ${awards}
    `;

    card.appendChild(content);

    // Efeito de parallax mais sutil
    let initialX = 0;
    let initialY = 0;
    let currentX = 0;
    let currentY = 0;
    let xOffset = 0;
    let yOffset = 0;
    const smoothing = 0.15; // Fator de suavização

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calcula a posição relativa do mouse (de -1 a 1)
        xOffset = ((x / rect.width) - 0.5) * 2;
        yOffset = ((y / rect.height) - 0.5) * 2;

        // Aplica o efeito de rotação mais suave
        const targetX = yOffset * 4; // Reduzido de 20 para 4 graus
        const targetY = -xOffset * 4; // Reduzido de 20 para 4 graus

        // Suaviza a transição
        currentX += (targetX - currentX) * smoothing;
        currentY += (targetY - currentY) * smoothing;

        // Aplica a transformação com easing
        card.style.transform = `
            perspective(1000px) 
            rotateX(${currentX}deg) 
            rotateY(${currentY}deg)
            translateZ(10px)
            scale(1.02)
        `;

        // Efeito de brilho mais sutil
        shine.style.opacity = '0.5';
        shine.style.transform = `translate(${x}px, ${y}px)`;
    });

    card.addEventListener('mouseleave', () => {
        // Suaviza o retorno à posição inicial
        const resetAnimation = () => {
            if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01) {
                currentX *= 0.85;
                currentY *= 0.85;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${currentX}deg) 
                    rotateY(${currentY}deg)
                    translateZ(0)
                    scale(1)
                `;
                
                requestAnimationFrame(resetAnimation);
            } else {
                card.style.transform = 'none';
            }
        };
        
        requestAnimationFrame(resetAnimation);
        shine.style.opacity = '0';
    });

    // Efeito de entrada suave
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);

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

        // Ajuste do efeito 3D nas categorias
        let currentX = 0;
        let currentY = 0;
        const smoothing = 0.12;

        category.addEventListener('mousemove', (e) => {
            const rect = category.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xOffset = ((x / rect.width) - 0.5) * 2;
            const yOffset = ((y / rect.height) - 0.5) * 2;

            const targetX = yOffset * 3; // Reduzido para 3 graus
            const targetY = -xOffset * 3; // Reduzido para 3 graus

            currentX += (targetX - currentX) * smoothing;
            currentY += (targetY - currentY) * smoothing;

            category.style.transform = `
                perspective(1000px) 
                rotateX(${currentX}deg) 
                rotateY(${currentY}deg) 
                translateZ(5px)
                scale(1.01)
            `;
        });

        category.addEventListener('mouseleave', () => {
            const resetAnimation = () => {
                if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01) {
                    currentX *= 0.85;
                    currentY *= 0.85;
                    
                    category.style.transform = `
                        perspective(1000px) 
                        rotateX(${currentX}deg) 
                        rotateY(${currentY}deg)
                        translateZ(0)
                        scale(1)
                    `;
                    
                    requestAnimationFrame(resetAnimation);
                } else {
                    category.style.transform = 'none';
                }
            };
            
            requestAnimationFrame(resetAnimation);
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