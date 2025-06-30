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

const drinks = {
    "Drinks Clássicos": [
        {
            nome: "Negroni",
            descricao: "Clássico coquetel italiano com gin, vermute rosso e Campari",
            temperatura: "Servido gelado",
            harmonizacao: "Harmoniza com antepastos e aperitivos"
        },
        {
            nome: "Old Fashioned",
            descricao: "Bourbon, angostura bitter e açúcar mascavo",
            temperatura: "Servido com gelo",
            harmonizacao: "Perfeito com petiscos defumados"
        },
        {
            nome: "Manhattan",
            descricao: "Whiskey, vermute tinto e angostura bitter",
            temperatura: "Servido gelado",
            harmonizacao: "Acompanha bem queijos curados"
        }
    ],
    "Vinhos": [
        {
            nome: "Malbec",
            descricao: "Vinho tinto encorpado com notas de frutas escuras",
            temperatura: "Servido entre 16-18°C",
            harmonizacao: "Ideal com carnes vermelhas"
        },
        {
            nome: "Chardonnay",
            descricao: "Vinho branco com notas de frutas tropicais e baunilha",
            temperatura: "Servido entre 10-12°C",
            harmonizacao: "Perfeito com peixes e frutos do mar"
        }
    ],
    "Destilados Premium": [
        {
            nome: "Whiskey Single Malt",
            descricao: "Notas de carvalho, baunilha e especiarias",
            temperatura: "Temperatura ambiente ou com gelo",
            harmonizacao: "Excelente com chocolates amargos"
        },
        {
            nome: "Gin Premium",
            descricao: "Botânicos selecionados com notas cítricas e florais",
            temperatura: "Servido gelado",
            harmonizacao: "Ideal com frutas cítricas e especiarias"
        }
    ],
    "Não Alcoólicos": [
        {
            nome: "Mocktail Tropical",
            descricao: "Mix refrescante de frutas tropicais e hortelã",
            temperatura: "Servido gelado",
            harmonizacao: "Combina com petiscos leves"
        },
        {
            nome: "Chá Gelado Artesanal",
            descricao: "Blend especial de chás com notas cítricas",
            temperatura: "Servido gelado",
            harmonizacao: "Perfeito com sobremesas"
        }
    ]
};

const colecao = {
    "Whiskies": [
        {
            nome: "The Macallan 12 Years Double Cask",
            origem: "Speyside, Escócia",
            historia: "Um whisky que representa a perfeita harmonia entre barris de carvalho europeu e americano, envelhecidos com xerez. A destilaria Macallan, fundada em 1824, é conhecida por seu compromisso com a excelência e barris excepcionais.",
            caracteristicas: "Notas de mel, cítricos, gengibre e frutas secas, com um final longo e equilibrado de carvalho e especiarias.",
            curiosidades: "A Macallan foi uma das primeiras destilarias legalmente licenciadas da Escócia. Seus barris são considerados os mais caros da indústria do whisky.",
            envelhecimento: "12 anos em barris de carvalho europeu e americano",
            temperatura: "Servido à temperatura ambiente ou com uma pedra de gelo",
            apreciacao: "Melhor apreciado puro ou com um pouco de água para liberar seus aromas"
        },
        {
            nome: "Glenfiddich 15 Years Solera",
            origem: "Speyside, Escócia",
            historia: "Utilizando o único sistema Solera para whisky na Escócia, este Glenfiddich é uma obra-prima de complexidade. O sistema foi inspirado nas tradicionais bodegas de xerez espanholas.",
            caracteristicas: "Aromas de mel, baunilha e frutas maduras, com notas de carvalho e especiarias no paladar.",
            curiosidades: "O sistema Solera utiliza um vat de casamento especial que nunca é completamente esvaziado, mantendo sempre uma porção do whisky original de 1998.",
            envelhecimento: "15 anos em três tipos diferentes de barris",
            temperatura: "Servido à temperatura ambiente",
            apreciacao: "Recomendado degustar puro para apreciar sua complexidade"
        }
    ],
    "Gins": [
        {
            nome: "Monkey 47",
            origem: "Floresta Negra, Alemanha",
            historia: "Criado por Montgomery Collins, um oficial da RAF que se apaixonou pela Floresta Negra após a Segunda Guerra Mundial. A receita inclui ingredientes locais como amoras silvestres.",
            caracteristicas: "47 botânicos diferentes, incluindo amoras da Floresta Negra, resultando em um perfil complexo e único.",
            curiosidades: "O número 47 refere-se não apenas aos botânicos, mas também à graduação alcoólica (47%) e ao número da expedição do criador.",
            botanicos: "Zimbro, amoras, lavanda, hortelã, sálvia, entre outros",
            temperatura: "Melhor servido gelado",
            apreciacao: "Pode ser apreciado puro ou em drinks minimalistas que destaquem seus botânicos"
        }
    ],
    "Runs": [
        {
            nome: "Zacapa XO",
            origem: "Guatemala",
            historia: "Produzido nas terras altas da Guatemala, este rum é envelhecido no 'Sistema Solera' a 2.300m acima do nível do mar, onde o ar rarefeito e a baixa temperatura contribuem para um envelhecimento único.",
            caracteristicas: "Blend de runs de 6 a 25 anos, com notas de chocolate escuro, carvalho tostado, cereja e especiarias.",
            curiosidades: "A faixa de palha trançada que envolve a garrafa é feita à mão por mulheres indígenas da Guatemala.",
            envelhecimento: "Sistema Solera em barris de bourbon, xerez, vinho Pedro Ximénez e cognac",
            temperatura: "Servido à temperatura ambiente",
            apreciacao: "Melhor degustado puro, como um conhaque fino"
        }
    ]
};

// Função para criar o card de uma bebida com detalhes mais ricos
function createDrinkCard(drink) {
    const card = document.createElement('div');
    card.className = 'drink-card';
    
    const shine = document.createElement('div');
    shine.className = 'shine-effect';
    card.appendChild(shine);

    const content = document.createElement('div');
    content.className = 'drink-content';

    const nome = document.createElement('h3');
    nome.textContent = drink.nome;
    content.appendChild(nome);

    const descricao = document.createElement('p');
    descricao.className = 'descricao';
    descricao.textContent = drink.descricao;
    content.appendChild(descricao);

    const info = document.createElement('div');
    info.className = 'drink-info';

    const temperatura = document.createElement('div');
    temperatura.className = 'info-item';
    temperatura.innerHTML = `<i class="fas fa-thermometer-half"></i> ${drink.temperatura}`;
    info.appendChild(temperatura);

    const harmonizacao = document.createElement('div');
    harmonizacao.className = 'info-item';
    harmonizacao.innerHTML = `<i class="fas fa-utensils"></i> ${drink.harmonizacao}`;
    info.appendChild(harmonizacao);

    content.appendChild(info);
    card.appendChild(content);

    // Efeito de parallax suave
    let currentX = 0;
    let currentY = 0;
    const smoothing = 0.15;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xOffset = ((x / rect.width) - 0.5) * 2;
        const yOffset = ((y / rect.height) - 0.5) * 2;

        const targetX = yOffset * 4;
        const targetY = -xOffset * 4;

        currentX += (targetX - currentX) * smoothing;
        currentY += (targetY - currentY) * smoothing;

        card.style.transform = `
            perspective(1000px) 
            rotateX(${currentX}deg) 
            rotateY(${currentY}deg)
            translateZ(10px)
            scale(1.02)
        `;

        shine.style.opacity = '0.5';
        shine.style.transform = `translate(${x}px, ${y}px)`;
    });

    card.addEventListener('mouseleave', () => {
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

function createGarrafaCard(garrafa) {
    const card = document.createElement('div');
    card.className = 'garrafa-card';
    
    const shine = document.createElement('div');
    shine.className = 'shine-effect';
    card.appendChild(shine);

    const content = document.createElement('div');
    content.className = 'garrafa-preview';
    content.innerHTML = `<h3>${garrafa.nome}</h3>`;
    card.appendChild(content);

    // Modal com detalhes completos
    const modal = document.createElement('div');
    modal.className = 'garrafa-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${garrafa.nome}</h2>
                <span class="close-button">&times;</span>
            </div>
            <div class="modal-body">
                <div class="origem">
                    <i class="fas fa-globe-americas"></i>
                    <p>${garrafa.origem}</p>
                </div>
                <div class="historia">
                    <h4>História</h4>
                    <p>${garrafa.historia}</p>
                </div>
                <div class="caracteristicas">
                    <h4>Características</h4>
                    <p>${garrafa.caracteristicas}</p>
                </div>
                <div class="curiosidades">
                    <h4>Curiosidades</h4>
                    <p>${garrafa.curiosidades}</p>
                </div>
                ${garrafa.envelhecimento ? `
                    <div class="envelhecimento">
                        <h4>Envelhecimento</h4>
                        <p>${garrafa.envelhecimento}</p>
                    </div>
                ` : ''}
                ${garrafa.botanicos ? `
                    <div class="botanicos">
                        <h4>Botânicos</h4>
                        <p>${garrafa.botanicos}</p>
                    </div>
                ` : ''}
                <div class="apreciacao">
                    <h4>Como Apreciar</h4>
                    <p>${garrafa.apreciacao}</p>
                    <p class="temperatura"><i class="fas fa-thermometer-half"></i> ${garrafa.temperatura}</p>
                </div>
            </div>
        </div>
    `;

    // Eventos do card
    card.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    modal.querySelector('.close-button').addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    document.body.appendChild(modal);

    // Efeitos visuais do card
    let currentX = 0;
    let currentY = 0;
    const smoothing = 0.15;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xOffset = ((x / rect.width) - 0.5) * 2;
        const yOffset = ((y / rect.height) - 0.5) * 2;

        const targetX = yOffset * 4;
        const targetY = -xOffset * 4;

        currentX += (targetX - currentX) * smoothing;
        currentY += (targetY - currentY) * smoothing;

        card.style.transform = `
            perspective(1000px) 
            rotateX(${currentX}deg) 
            rotateY(${currentY}deg)
            translateZ(10px)
            scale(1.02)
        `;

        shine.style.opacity = '0.5';
        shine.style.transform = `translate(${x}px, ${y}px)`;
    });

    card.addEventListener('mouseleave', () => {
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

    return card;
}

// Inicialização do menu
document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.className = 'container';

    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'A Arte de Beber Bem';
    header.appendChild(title);

    const quote = document.createElement('p');
    quote.className = 'quote';
    quote.textContent = 'Aprecie com moderação, celebre com elegância.';
    header.appendChild(quote);

    container.appendChild(header);

    // Função para criar ícones específicos para cada seção
    const getSectionIcon = (categoryName) => {
        const icons = {
            'Whisky': 'fa-solid fa-whiskey-glass',
            'Gin': 'fa-solid fa-martini-glass-citrus',
            'Vodka': 'fa-solid fa-martini-glass',
            'Rum': 'fa-solid fa-glass-water',
            'Tequila': 'fa-solid fa-bottle-droplet',
            'Licores': 'fa-solid fa-wine-bottle',
            'Cognac': 'fa-solid fa-wine-glass',
            'default': 'fa-solid fa-glass-martini-alt'
        };
        return icons[categoryName] || icons.default;
    };

    Object.entries(colecao).forEach(([categoryName, bebidas]) => {
        const section = document.createElement('section');
        section.className = 'menu-section';

        const title = document.createElement('h2');
        const icon = document.createElement('i');
        icon.className = getSectionIcon(categoryName);
        icon.style.marginRight = '1rem';
        icon.style.fontSize = '2rem';
        title.appendChild(icon);
        title.appendChild(document.createTextNode(categoryName));
        section.appendChild(title);

        bebidas.forEach(bebida => {
            const item = document.createElement('div');
            item.className = 'bebida-item';

            const info = document.createElement('div');
            info.className = 'bebida-info';

            const nome = document.createElement('h3');
            nome.className = 'bebida-nome';
            nome.textContent = bebida.nome;
            info.appendChild(nome);

            const origem = document.createElement('p');
            origem.className = 'bebida-origem';
            origem.innerHTML = `<i class="fas fa-globe-americas" style="margin-right: 0.5rem; color: var(--color-gold);"></i>${bebida.origem}`;
            info.appendChild(origem);

            const icon = document.createElement('i');
            icon.className = 'bebida-icon fas fa-plus';

            item.appendChild(info);
            item.appendChild(icon);

            // Modal com detalhes
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${bebida.nome}</h3>
                        <span class="close-button">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div class="modal-section">
                            <h4><i class="fas fa-history"></i> História</h4>
                            <p>${bebida.historia}</p>
                        </div>
                        <div class="modal-section">
                            <h4><i class="fas fa-info-circle"></i> Características</h4>
                            <p>${bebida.caracteristicas}</p>
                        </div>
                        <div class="modal-section">
                            <h4><i class="fas fa-star"></i> Curiosidades</h4>
                            <p>${bebida.curiosidades}</p>
                        </div>
                        ${bebida.envelhecimento ? `
                            <div class="modal-section">
                                <h4><i class="fas fa-hourglass-half"></i> Envelhecimento</h4>
                                <p>${bebida.envelhecimento}</p>
                            </div>
                        ` : ''}
                        ${bebida.botanicos ? `
                            <div class="modal-section">
                                <h4><i class="fas fa-leaf"></i> Botânicos</h4>
                                <p>${bebida.botanicos}</p>
                            </div>
                        ` : ''}
                        <div class="modal-section">
                            <h4><i class="fas fa-glass-cheers"></i> Como Apreciar</h4>
                            <p>${bebida.apreciacao}</p>
                            <p class="temperatura"><i class="fas fa-thermometer-half"></i> ${bebida.temperatura}</p>
                        </div>
                    </div>
                </div>
            `;

            // Gerenciamento do modal
            let isModalOpen = false;

            const openModal = () => {
                if (!isModalOpen) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    isModalOpen = true;

                    // Anima as seções do modal
                    const sections = modal.querySelectorAll('.modal-section');
                    sections.forEach((section, index) => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateX(-20px)';
                        setTimeout(() => {
                            section.style.transition = 'all 0.5s ease';
                            section.style.opacity = '1';
                            section.style.transform = 'translateX(0)';
                        }, index * 100);
                    });
                }
            };

            const closeModal = (e) => {
                if (e) e.stopPropagation();
                if (isModalOpen) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    isModalOpen = false;
                }
            };

            item.addEventListener('click', openModal);
            modal.querySelector('.close-button').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            // Fecha o modal com a tecla ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && isModalOpen) closeModal();
            });

            document.body.appendChild(modal);
            section.appendChild(item);
        });

        container.appendChild(section);
    });

    document.body.appendChild(container);

    // Animação de entrada suave para os itens
    const items = document.querySelectorAll('.bebida-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.transitionDelay = `${index * 50}ms`;
        observer.observe(item);
    });

    // Animação suave para as seções
    const sections = document.querySelectorAll('.menu-section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        sectionObserver.observe(section);
    });

    // Adiciona efeito de parallax suave ao fundo
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        document.body.style.backgroundPosition = `${moveX}px ${moveY}px`;
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