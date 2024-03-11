import { extractProducts } from "./script.js";

describe('Adicionar itens ao localStorage', () => {
    test('deve adicionar item ao clicar no botão "Adicionar ao Carrinho"', () => {
      // Chamando a função que queremos testar
      extractProducts();
  
      // Simulando um clique no botão "Adicionar ao Carrinho"
      const addButton = document.querySelector('.bttBuy');
      addButton.click();
  
      // Verificando se o item foi adicionado corretamente ao localStorage
      expect(localStorage.getItem('cart')).toBeTruthy();
    });
  });