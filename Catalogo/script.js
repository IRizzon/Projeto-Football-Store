document.addEventListener('DOMContentLoaded', () => {
    const bttBuy = document.querySelectorAll('.bttBuy');

    const items = extractProducts();

    bttBuy.forEach((button, index) => {
        button.addEventListener('click', () => {
            const selectedItem = items[index];
            addToCart(selectedItem);
            console.log('Item adicionado ao carrinho:', selectedItem);
        });
    });
});

function addToCart(item) {
    // Gera um ID único para o item
    item.id = generateItemId();

    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        if (!Array.isArray(cart)) {
            cart = [];
        }
    } else {
        cart = [];
    }
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item adicionado ao carrinho!");
}



function extractProducts() {
    const produtos = document.querySelectorAll('.card');
    
    const items = [];

    produtos.forEach(produto => {
        const nome = produto.querySelector('.cardPrice h1').innerText;
        const precoTexto = produto.querySelector('.cardPrice h3').innerText;
        const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));
        const IMG = produto.querySelector('.cardPrice img').getAttribute('src');
        const id = generateItemId();

        items.push({ id, nome, preco, IMG });
    });

    console.log(items);

    return items;
}

// Gera um ID baseado no timestamp atual
function generateItemId() {
    
    return Date.now().toString();
}

