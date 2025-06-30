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
            // ... Adicione mais whiskies aqui
        ],
        'Gin': [
            {
                nome: 'Monkey 47',
                origem: 'Alemanha',
                historia: 'Criado na Floresta Negra alemã, este gin premium utiliza 47 botânicos diferentes, incluindo ingredientes locais como lingueirão.',
                caracteristicas: 'Complexo e aromático, com notas de frutas cítricas, ervas, especiarias e um toque floral distintivo.',
                curiosidades: 'O nome vem dos 47 botânicos utilizados e da graduação alcoólica de 47%.',
                botanicos: 'Zimbro, lingueirão, lavanda, sálvia, angélica, coentro, entre outros.',
                apreciacao: 'Excelente em gin tônica com fatia de limão siciliano e bagas de zimbro.',
                temperatura: 'Servir entre 4°C e 6°C'
            },
            // ... Adicione mais gins aqui
        ],
        // ... Adicione mais categorias aqui
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