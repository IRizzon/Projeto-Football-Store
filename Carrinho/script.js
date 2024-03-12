<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.querySelector('.itemList');
    const cartPrice = document.querySelector('.cartPrice');

    // Verifica se há itens no localStorage
    if (localStorage.getItem('cart')) {
        const cartItems = JSON.parse(localStorage.getItem('cart'));

        // Renderiza cada item do carrinho
        cartItems.forEach(cartItem => {
            const itemCard = createCartItemElement(cartItem);
            itemList.appendChild(itemCard);
        });

        // Atualiza o total do carrinho
        updateCartTotal(cartItems);
    }
});

// Função para criar um elemento de item do carrinho
function createCartItemElement(cartItem) {
    const itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    // Adiciona a imagem do item
    const img = document.createElement('img');
    img.src = cartItem.IMG;
    img.alt = cartItem.nome;
    itemCard.appendChild(img);

    // Adiciona o nome do item
    const name = document.createElement('h2');
    name.textContent = cartItem.nome;
    itemCard.appendChild(name);

    // Adiciona o preço do item
    const price = document.createElement('p');
    price.textContent = `Preço: R$ ${cartItem.preco.toFixed(2)}`;
    itemCard.appendChild(price);

    // Adiciona o botão de remover
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
        // Remove o item do localStorage e da lista de itens
        const updatedCart = JSON.parse(localStorage.getItem('cart')).filter(item => item !== cartItem);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        itemCard.remove();
        // Atualiza o total do carrinho
        updateCartTotal(updatedCart);
    });
    itemCard.appendChild(removeButton);

    return itemCard;
}

// Função para atualizar o total do carrinho
function updateCartTotal(cartItems) {
    const total = cartItems.reduce((acc, item) => acc + item.preco, 0);
    const cartTotal = document.createElement('p');
    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    const existingCartTotal = document.querySelector('.cartPrice p');
    if (existingCartTotal) {
        existingCartTotal.replaceWith(cartTotal);
    } else {
        const cartPrice = document.querySelector('.cartPrice');
        cartPrice.appendChild(cartTotal);
    }
}
=======
>>>>>>> 8f7675db955a9bb755145c0eae2f67233eb08b29
