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

// Classe principal do Menu
class Menu {
    constructor() {
        this.container = document.getElementById('menu-container');
        this.animationManager = new AnimationManager();
        this.modalAtual = null;
    }

    // Inicializa o menu
    init() {
        this.renderizarMenu();
        this.setupEventListeners();
        this.animationManager.init();
    }

    // Renderiza o menu completo
    renderizarMenu() {
        COLECAO.obterCategorias().forEach(categoria => {
            const secao = this.criarSecao(categoria);
            const bebidas = COLECAO.obterBebidasPorCategoria(categoria);
            
            bebidas.forEach(bebida => {
                const itemBebida = this.criarItemBebida(bebida);
                secao.appendChild(itemBebida);
            });
            
            this.container.appendChild(secao);
        });
    }

    // Cria uma seção do menu
    criarSecao(categoria) {
        const template = MenuUtils.DOM.createFromTemplate('section-template');
        const section = template.querySelector('.menu-section');
        const icon = section.querySelector('.section-icon');
        const title = section.querySelector('.section-title');

        icon.className = MenuUtils.Icons.getIconForCategory(categoria);
        title.textContent = categoria;

        return section;
    }

    // Cria um item de bebida
    criarItemBebida(bebida) {
        const template = MenuUtils.DOM.createFromTemplate('bebida-template');
        return MenuUtils.DOM.fillContent(template, {
            '.bebida-nome': bebida.nome,
            '.origem-texto': bebida.origem
        });
    }

    // Configura os event listeners
    setupEventListeners() {
        this.container.addEventListener('click', (e) => {
            const bebidaItem = e.target.closest('.bebida-item');
            if (bebidaItem) {
                const nome = bebidaItem.querySelector('.bebida-nome').textContent;
                const categoria = bebidaItem.closest('.menu-section')
                    .querySelector('.section-title').textContent;
                
                this.abrirModal(categoria, nome);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalAtual) {
                this.fecharModal();
            }
        });
    }

    // Abre o modal com detalhes da bebida
    async abrirModal(categoria, nome) {
        const bebida = COLECAO.obterBebida(categoria, nome);
        if (!bebida) return;

        // Cria o modal
        const template = MenuUtils.DOM.createFromTemplate('modal-template');
        const modal = template.querySelector('.modal');

        // Preenche o conteúdo
        MenuUtils.DOM.fillContent(modal, {
            '.modal-header h3': bebida.nome,
            '.historia-texto': bebida.historia,
            '.caracteristicas-texto': bebida.caracteristicas,
            '.curiosidades-texto': bebida.curiosidades,
            '.apreciacao-texto': bebida.apreciacao,
            '.temperatura-texto': bebida.temperatura
        });

        // Configura seções condicionais
        const envelhecimentoSection = modal.querySelector('.envelhecimento-section');
        const botanicosSection = modal.querySelector('.botanicos-section');

        if (bebida.envelhecimento) {
            MenuUtils.DOM.fillContent(envelhecimentoSection, {
                '.envelhecimento-texto': bebida.envelhecimento
            });
        } else {
            envelhecimentoSection.style.display = 'none';
        }

        if (bebida.botanicos) {
            MenuUtils.DOM.fillContent(botanicosSection, {
                '.botanicos-texto': bebida.botanicos
            });
        } else {
            botanicosSection.style.display = 'none';
        }

        // Adiciona event listeners
        modal.querySelector('.close-button').addEventListener('click', () => {
            this.fecharModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.fecharModal();
            }
        });

        // Adiciona o modal ao DOM e anima
        document.body.appendChild(modal);
        this.modalAtual = modal;
        this.animationManager.animateModalOpen(modal);
    }

    // Fecha o modal atual
    async fecharModal() {
        if (!this.modalAtual) return;

        await this.animationManager.animateModalClose(this.modalAtual);
        this.modalAtual.remove();
        this.modalAtual = null;
    }
}

// Inicializa o menu quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const menu = new Menu();
    menu.init();
}); 