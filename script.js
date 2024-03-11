document.addEventListener("DOMContentLoaded", function() {
    const itemListSection = document.querySelector(".itemList");
    const cartPriceSection = document.querySelector(".cartPrice");

    // Função para renderizar os itens do catálogo (simulação)
    function renderCatalogItems() {
        const catalogItems = [
            { name: "Chuteira Mizuno", price: 420.00 },
            { name: "Bola Nike", price: 100.00 }
            // Adicione outros itens do catálogo aqui
        ];

        catalogItems.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("catalogItem");
            itemElement.innerHTML = `
                <div class="card">
                    <div class="cardPrice">
                        <img src="../src/Chuteiras/mizuno.png" class="item" alt="${item.name}">
                        <h1>${item.name}</h1>
                        <div class="price">
                            <h3>R$ ${item.price.toFixed(2)}</h3>
                            <h5>Ou em 10 de R$${(item.price / 10).toFixed(2)}</h5>
                        </div>
                    </div>
                    <div class="buy">
                        <button class="bttBuy">Adicionar ao Carrinho</button>
                    </div>
                </div>
            `;
            itemListSection.appendChild(itemElement);
        });
    }

    // Simulação de itens adicionados ao carrinho
    let cartItems = [];

    // Função para renderizar os itens do carrinho
    function renderCartItems() {
        itemListSection.innerHTML = "";
        cartItems.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <div class="cartItem">
                    <span>${item.name}</span>
                    <div class="quantity">
                        <button class="decrement">-</button>
                        <span>${item.quantity}</span>
                        <button class="increment">+</button>
                    </div>
                    <button class="remove">Remover</button>
                </div>
            `;
            itemListSection.appendChild(itemElement);
        });
    }

    // Atualizar Total
    function updateCartPrice() {
        const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        cartPriceSection.innerHTML = `
            <div class="totalPrice">
                <span>Total: R$ ${totalPrice.toFixed(2)}</span>
                <button class="checkout">Finalizar Compra</button>
            </div>
        `;
    }

    // Função para adicionar item ao carrinho
    function addItemToCart(item) {
        const existingItem = cartItems.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ ...item, quantity: 1 });
        }
        renderCartItems();
        updateCartPrice();
    }

    // Event listener para o clique no botão "Adicionar ao Carrinho" no catálogo
    itemListSection.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("bttBuy")) {
            const card = target.closest(".card");
            const name = card.querySelector("h1").textContent;
            const price = parseFloat(card.querySelector(".price h3").textContent.replace("R$ ", ""));
            addItemToCart({ name, price });
        }
    });

    // Diminuir a quantidade e remover itens do carrinho
    itemListSection.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("increment")) {
            const itemName = target.closest(".cartItem").querySelector("span").textContent;
            const item = cartItems.find(item => item.name === itemName);
            item.quantity++;
            renderCartItems();
            updateCartPrice();
        } else if (target.classList.contains("decrement")) {
            const itemName = target.closest(".cartItem").querySelector("span").textContent;
            const item = cartItems.find(item => item.name === itemName);
            if (item.quantity > 1) {
                item.quantity--;
                renderCartItems();
                updateCartPrice();
            }
        } else if (target.classList.contains("remove")) {
            const itemName = target.closest(".cartItem").querySelector("span").textContent;
            const itemIndex = cartItems.findIndex(item => item.name === itemName);
            cartItems.splice(itemIndex, 1);
            renderCartItems();
            updateCartPrice();
        }
    });

    // Renderizar itens do catálogo ao carregar a página
    renderCatalogItems();
});