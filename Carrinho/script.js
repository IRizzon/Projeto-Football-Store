document.addEventListener("DOMContentLoaded", function() {
    const itemListSection = document.querySelector(".itemList");
    const cartPriceSection = document.querySelector(".cartPrice");

    // Simulação de itens adicionados ao carrinho
    let cartItems = [
        { name: "Chuteira Mizuno", price: 420.00, quantity: 1 },
        { name: "Bola Nike", price: 100.00, quantity: 2 }
    ];

    // Renderizar itens
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

    renderCartItems();
    updateCartPrice();

    // Diminuir a quantidade e remover itens
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
});