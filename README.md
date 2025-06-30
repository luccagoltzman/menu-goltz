# Menu Digital - Bar Elegante 🥃

Um menu digital interativo e sofisticado para apresentação de bebidas refinadas.

## Sobre o Projeto

Este menu digital foi desenvolvido para proporcionar uma experiência elegante e intuitiva na apresentação de bebidas refinadas como cachaças, whiskies, tequilas, vinhos e outros destilados premium.

### Características Principais

- Design sofisticado e minimalista
- Interface responsiva para desktop e mobile
- Animações suaves e elegantes
- Categorização intuitiva das bebidas
- Detalhes completos sobre cada bebida

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e animações)
- JavaScript Vanilla (ES6+)
- Fontes: Cinzel e Inter (Google Fonts)

## Estrutura do Menu

O menu está organizado nas seguintes categorias:

- Cachaças
- Whiskies
- Vinhos
- Tequilas
- Outros (Gins, Rum, Licores)

Cada item do menu apresenta:
- Nome da bebida
- Teor alcoólico
- País/região de origem
- Notas de sabor

## Como Usar

1. Abra o arquivo `index.html` em um navegador moderno
2. Clique em uma categoria para expandir/recolher
3. Explore os detalhes de cada bebida nos cards

## Personalização

Para adicionar ou modificar bebidas, edite o objeto `menuData` no arquivo `script.js`:

```javascript
const menuData = {
    categoria: [
        {
            nome: "Nome da Bebida",
            teor: "Teor Alcoólico",
            origem: "País/Região",
            notas: "Descrição das notas de sabor"
        }
    ]
};
```

## Paleta de Cores

- Fundo principal: `#0D0D0D`
- Dourado elegante: `#CBA135`
- Bordô: `#581845`
- Cinza escuro: `#2C2C2C`
- Texto principal: `#F5F5F5`

## Responsividade

O menu é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop: Layout em grid com múltiplas colunas
- Mobile: Layout em coluna única com cards empilhados

## Licença

Este projeto é para uso exclusivo do Bar Elegante.

---

Desenvolvido com 🥃 para proporcionar a melhor experiência em apresentação de bebidas refinadas.
