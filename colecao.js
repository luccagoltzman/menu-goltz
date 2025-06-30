// Dados da coleção de bebidas
const COLECAO = {
    // Categorias e suas bebidas
    categorias: {
        'Whisky': [
            {
                nome: 'Macallan 12 Years Double Cask',
                origem: 'Escócia',
                historia: 'Um whisky single malt excepcional da região de Speyside, envelhecido em uma combinação única de barris de carvalho americano e europeu previamente temperados com xerez.',
                caracteristicas: 'Notas de mel, frutas cítricas, uvas passas e carvalho tostado. Apresenta um equilíbrio perfeito entre doçura e especiarias.',
                curiosidades: 'A Macallan foi uma das primeiras destilarias legalmente licenciadas na Escócia, em 1824.',
                envelhecimento: '12 anos em barris de carvalho americano e europeu com xerez',
                apreciacao: 'Melhor apreciado puro ou com algumas gotas de água para liberar seus aromas.',
                temperatura: 'Servir entre 15°C e 18°C'
            },
            {
                nome: 'Johnnie Walker Blue Label',
                origem: 'Escócia',
                historia: 'O Blue Label é a expressão máxima da arte da mistura de whiskys da Johnnie Walker. Apenas 1 em cada 10.000 barris possui a qualidade excepcional necessária para criar este blend.',
                caracteristicas: 'Sabor rico e complexo com notas de chocolate amargo, mel suave, laranja e sândalo.',
                curiosidades: 'Cada garrafa é numerada individualmente, refletindo sua exclusividade.',
                envelhecimento: 'Blend de whiskys raros, alguns com mais de 60 anos',
                apreciacao: 'Sirva puro para apreciar toda sua complexidade.',
                temperatura: 'Servir entre 16°C e 18°C'
            },
            {
                nome: 'Yamazaki 12 Years',
                origem: 'Japão',
                historia: 'Produzido pela primeira destilaria de whisky do Japão, estabelecida em 1923, o Yamazaki 12 Anos é um dos whiskys japoneses mais premiados.',
                caracteristicas: 'Aroma frutado com notas de pêssego e abacaxi, misturadas com notas de mizunara (carvalho japonês).',
                curiosidades: 'A água usada na produção vem da região de Yamazaki, conhecida por seu sabor único há séculos.',
                envelhecimento: '12 anos em barris de carvalho japonês, americano e espanhol',
                apreciacao: 'Excelente puro ou com uma pedra de gelo.',
                temperatura: 'Servir entre 15°C e 17°C'
            }
        ],
        'Cachaça': [
            {
                nome: 'Weber Haus Extra Premium 6 Anos',
                origem: 'Ivoti, RS, Brasil',
                historia: 'Produzida artesanalmente pela família Weber desde 1948, esta cachaça premium envelhece em barris de carvalho europeu por 6 anos.',
                caracteristicas: 'Aroma amadeirado intenso com notas de baunilha e caramelo. Sabor complexo e aveludado.',
                curiosidades: 'A Weber Haus foi a primeira cachaça brasileira a ganhar medalha de ouro em concurso internacional.',
                envelhecimento: '6 anos em barris de carvalho europeu',
                apreciacao: 'Ideal para ser degustada pura, em temperatura ambiente.',
                temperatura: 'Servir entre 18°C e 22°C'
            },
            {
                nome: 'Germana Heritage',
                origem: 'Nova União, MG, Brasil',
                historia: 'Uma cachaça ultra-premium que representa o ápice da produção da Germana, destilada em alambiques de cobre e envelhecida em barris especiais.',
                caracteristicas: 'Aroma complexo com notas de especiarias, madeira nobre e frutas secas. Sabor encorpado e equilibrado.',
                curiosidades: 'Cada garrafa é numerada e produzida em quantidade limitada.',
                envelhecimento: 'Blend de cachaças com até 15 anos de envelhecimento',
                apreciacao: 'Melhor apreciada pura, em cálice apropriado.',
                temperatura: 'Servir entre 18°C e 20°C'
            }
        ],
        'Tequila': [
            {
                nome: 'Don Julio 1942',
                origem: 'Jalisco, México',
                historia: 'Criada em homenagem ao ano em que Don Julio González começou sua jornada na produção de tequila, esta é uma das tequilas mais prestigiadas do mundo.',
                caracteristicas: 'Notas de caramelo tostado, chocolate amargo e baunilha, com um toque suave de agave.',
                curiosidades: 'Cada garrafa é numerada e feita à mão, inspirada nas antigas garrafas de agave.',
                envelhecimento: 'Mínimo de 2,5 anos em barris de carvalho americano',
                apreciacao: 'Deve ser saboreada pura para apreciar sua complexidade.',
                temperatura: 'Servir entre 18°C e 20°C'
            },
            {
                nome: 'Clase Azul Reposado',
                origem: 'Jalisco, México',
                historia: 'Uma tequila ultra-premium conhecida tanto por seu conteúdo excepcional quanto por sua garrafa artesanal pintada à mão.',
                caracteristicas: 'Aromas de agave cozido, baunilha e canela. Sabor suave com notas de creme de caramelo.',
                curiosidades: 'Cada garrafa é uma peça única, pintada à mão por artistas mexicanos.',
                envelhecimento: 'Repousa por 8 meses em barris de carvalho americano selecionados',
                apreciacao: 'Sirva pura em temperatura ambiente.',
                temperatura: 'Servir entre 18°C e 20°C'
            }
        ],
        'Vinho': [
            {
                nome: 'Château Lafite Rothschild 2010',
                origem: 'Bordeaux, França',
                historia: 'Um dos vinhos mais prestigiados do mundo, produzido no lendário Château Lafite Rothschild, primeira propriedade da família Rothschild.',
                caracteristicas: 'Aromas complexos de frutas negras, cedro e especiarias. Taninos elegantes e final prolongado.',
                curiosidades: 'O Château Lafite é um dos cinco premiers crus (primeira categoria) de Bordeaux.',
                envelhecimento: '20 meses em barris de carvalho francês novos',
                apreciacao: 'Decante por 2 horas antes de servir.',
                temperatura: 'Servir entre 16°C e 18°C'
            },
            {
                nome: 'Almaviva 2019',
                origem: 'Vale do Maipo, Chile',
                historia: 'Fruto da parceria entre Baronesa Philippine de Rothschild e Concha y Toro, representa o melhor da viticultura chilena.',
                caracteristicas: 'Intenso com notas de frutas negras, chocolate, tabaco e especiarias. Taninos maduros e aveludados.',
                curiosidades: 'O nome Almaviva vem da trilogia de Beaumarchais, imortalizada por Mozart em "As Bodas de Fígaro".',
                envelhecimento: '18 meses em barris de carvalho francês',
                apreciacao: 'Decante por 1 hora antes de servir.',
                temperatura: 'Servir entre 16°C e 18°C'
            }
        ],
        'Licores': [
            {
                nome: 'Grand Marnier Cordon Rouge',
                origem: 'França',
                historia: 'Criado em 1880 por Louis-Alexandre Marnier Lapostolle, é uma mistura única de conhaque fino e essência de laranja bitter.',
                caracteristicas: 'Sabor complexo que combina a intensidade do conhaque com a doçura e aroma cítrico das laranjas.',
                curiosidades: 'A garrafa foi inspirada na forma do alambique usado para destilar o conhaque.',
                envelhecimento: 'Conhaque envelhecido até 10 anos',
                apreciacao: 'Pode ser servido puro, com gelo ou em coquetéis sofisticados.',
                temperatura: 'Servir entre 8°C e 10°C'
            },
            {
                nome: 'Chartreuse V.E.P. Verde',
                origem: 'França',
                historia: 'Produzido pelos monges Cartuxos desde 1737, contém 130 ervas e plantas diferentes. V.E.P. significa "Vieillissement Exceptionnellement Prolongé".',
                caracteristicas: 'Extremamente complexo, com notas herbais, mentoladas e especiarias. Final longo e evolutivo.',
                curiosidades: 'A receita original é conhecida apenas por dois monges da ordem.',
                envelhecimento: 'Mínimo de 8 anos em barris de carvalho',
                apreciacao: 'Sirva puro ou levemente resfriado.',
                temperatura: 'Servir entre 8°C e 12°C'
            }
        ]
    },

    // Métodos para manipulação dos dados
    obterCategorias() {
        return Object.keys(this.categorias);
    },

    obterBebidasPorCategoria(categoria) {
        return this.categorias[categoria] || [];
    },

    obterBebida(categoria, nome) {
        return this.categorias[categoria]?.find(bebida => bebida.nome === nome);
    },

    obterTodasBebidas() {
        return Object.entries(this.categorias).reduce((todas, [categoria, bebidas]) => {
            return [...todas, ...bebidas.map(bebida => ({ ...bebida, categoria }))];
        }, []);
    }
};

// Exporta a coleção
window.COLECAO = COLECAO; 