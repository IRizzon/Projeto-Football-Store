<<<<<<< HEAD
// Adiciona um event listener a cada botão "Adicionar ao Carrinho" após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const bttBuy = document.querySelectorAll('.bttBuy');

    // Adiciona um event listener a cada botão "Adicionar ao Carrinho"
    bttBuy.forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(index); // Chama a função addToCart com o índice correto
        });
    });
});

// Função para adicionar o item ao carrinho
function addToCart(index) {
    const produtoSelecionado = document.querySelectorAll('.card')[index];

    const nome = produtoSelecionado.querySelector('.cardPrice h1').innerText;
    const precoTexto = produtoSelecionado.querySelector('.cardPrice h3').innerText;
    const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));
    const IMG = produtoSelecionado.querySelector('.cardPrice img').getAttribute('src');

    const item = { nome, preco, IMG };

    // Verifica se já existe um carrinho no localStorage
    let cart = localStorage.getItem('cart');
    if (cart) {
        // Se já existir, converte para array
        cart = JSON.parse(cart);
        // Verifica se é um array, caso contrário, inicializa como um array vazio
        if (!Array.isArray(cart)) {
            cart = [];
        }
    } else {
        // Se não existir, inicializa como um array vazio
        cart = [];
    }

    // Adiciona o novo item ao carrinho
    cart.push(item);

    // Atualiza o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Exibe uma mensagem informando que o item foi adicionado ao carrinho
    alert("Item adicionado ao carrinho!");
}
=======
export function extractProducts() {
    const produto = document.querySelectorAll('.card');
    const bttBuy = document.querySelectorAll('.bttBuy');

    const item = [];

    produto.forEach(produto =>{

        const nome = produto.querySelector('.cardPrice h1').innerText;

        const precoTexto = produto.querySelector('.cardPrice h3').innerText;
        const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));

        const IMG = produto.querySelector('.cardPrice img').getAttribute('src');

        item.push({nome, preco, IMG});
    })

    //Verificando o Array no console
    console.log(item);

    bttBuy.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Salvando o item clicado no localStorage
            const selectedItem = item[index];
            localStorage.setItem('cart', JSON.stringify(selectedItem));
            console.log('Item adicionado ao carrinho:', selectedItem);
        });
    });
}
>>>>>>> 8f7675db955a9bb755145c0eae2f67233eb08b29
