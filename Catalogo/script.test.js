import { extractProducts } from "./script.js";

describe('Adicionar itens ao localStorage', () => {
    test('deve adicionar item ao clicar no botão "Adicionar ao Carrinho"', () => {
      document.addEventListener('DOMContentLoaded', () => {
        // Chama a função que queremos testar
        extractProducts();
    
        // Simula um clique no botão "Adicionar ao Carrinho"
        const addButton = document.querySelector('.bttBuy');
        addButton.click();
    
        // Verifica se o item foi adicionado corretamente ao localStorage
        expect(localStorage.getItem('cart')).toBeTruthy();
    });
    });
});