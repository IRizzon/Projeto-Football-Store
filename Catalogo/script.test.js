import { extractProducts } from "./script.js";

describe('Adicionar itens ao localStorage', () => {
    test('deve adicionar item ao clicar no botão "Adicionar ao Carrinho"', () => {
<<<<<<< HEAD
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
=======
      // Chamando a função que queremos testar
      extractProducts();
  
      // Simulando um clique no botão "Adicionar ao Carrinho"
      const addButton = document.querySelector('.bttBuy');
      addButton.click();
  
      // Verificando se o item foi adicionado corretamente ao localStorage
      expect(localStorage.getItem('cart')).toBeTruthy();
    });
  });
>>>>>>> 8f7675db955a9bb755145c0eae2f67233eb08b29
