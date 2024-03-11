// Gerar lista de itens (simular DB)
let cartItems = [];

document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".bttBuy");

    //Adicionando evento, gerando constantes de acordo com dados passado ao HTML

    buyButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const card = event.target.closest(".card");
            const itemName = card.querySelector("h1").textContent;
            const itemPrice = parseFloat(card.querySelector(".price h3").textContent.replace("R$ ", ""));
            addItemToCart(itemName, itemPrice);
        });
    });
});

// Função para adicionar item ao carrinho
function addItemToCart(name, price) {

    // Verificar se o item já está no carrinho(Adicionar +1 caso já tenha)

    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }
    
    // Atualizar carrinho
    renderCartItems();
    updateCartPrice();
}