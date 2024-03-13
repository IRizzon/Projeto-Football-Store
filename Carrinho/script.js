document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.querySelector('.itemList');
    const cartPrice = document.querySelector('.cartPrice');
    const itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    const itemId = cartItem.id; // Usando a propriedade id do item como ID único
    itemCard.dataset.itemId = itemId;

    console.log("ID do item definido:", itemId);

    // Limpar o conteúdo do contêiner de itens do carrinho
    itemList.innerHTML = '';

    if (localStorage.getItem('cart')) {
        const cartItems = JSON.parse(localStorage.getItem('cart'));

        cartItems.forEach(cartItem => {
            const itemCard = createCartItemElement(cartItem);
            itemList.appendChild(itemCard);
        });

        updateCartTotal(cartItems);
    }
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

    // Verifica se o item já está no carrinho
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        // Se o item já estiver no carrinho, apenas atualize a quantidade
        existingItem.quantity += 1; // ou qualquer outra lógica para atualizar a quantidade
    } else {
        // Se o item não estiver no carrinho, adicione-o ao carrinho
        cart.push(item);
    }

    // Atualize o localStorage com o carrinho atualizado
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log("Item adicionado ao carrinho:", item);

    // Atualize o visual do carrinho
    const itemCard = createCartItemElement(item);
    const itemList = document.querySelector('.itemList');
    itemList.appendChild(itemCard);

    // Atualize o total do carrinho
    updateCartTotal(cart);

    alert("Item adicionado ao carrinho!");
}


let itemIdCounter = 0;
// Função para criar um elemento de item do carrinho
function createCartItemElement(cartItem) {
    const itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');

    const itemId = itemIdCounter++;
    itemCard.dataset.itemId = itemId;

    console.log("ID do item definido:", itemId);

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
    removeButton.addEventListener('click', (e) => {
        const itemCard = e.target.closest('.itemCard');
        if (!itemCard) {
            console.error("Item card não encontrado.");
            return;
        }
    
        const itemIdToRemove = itemCard.dataset.itemId;
        console.log("ID do item a ser removido:", itemIdToRemove);
        if (!itemIdToRemove) {
            console.error("ID do item não encontrado.");
            return;
        }
    
        let cart = JSON.parse(localStorage.getItem('cart')) || []; 
        console.log("Lista de IDs dos itens no carrinho:", cart.map(item => item.itemId));

        // Encontrar o índice do item no carrinho com o ID correspondente
        const indexToRemove = cart.findIndex(item => itemCard.dataset.itemId === itemIdToRemove);

        if (indexToRemove !== -1) {
            // Remover o item do carrinho
            cart.splice(indexToRemove, 1);
    
            // Atualizar o carrinho no localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log("Lista de itens atualizada:", cart);
    
            // Remover o elemento visualmente
            itemCard.remove();
    
            // Recalcular o total do carrinho
            updateCartTotal(cart);
        } else {
            console.error("Item não encontrado no carrinho.");
        }
    });
    
    itemCard.appendChild(removeButton);

    return itemCard;
}

// Função para atualizar o total do carrinho
function updateCartTotal(cartItems) {
    const total = cartItems.reduce((acc, item) => acc + item.preco, 0);
    const cartTotalElement = document.querySelector('.cartPrice p');
    if (cartTotalElement) {
        cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
}

// Função para carregar os itens do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.querySelector('.itemList');
    const cartPrice = document.querySelector('.cartPrice');

    if (localStorage.getItem('cart')) {
        const cartItems = JSON.parse(localStorage.getItem('cart'));

        cartItems.forEach(cartItem => {
            const itemCard = createCartItemElement(cartItem);
            itemList.appendChild(itemCard);
        });

        updateCartTotal(cartItems);
    }

});
