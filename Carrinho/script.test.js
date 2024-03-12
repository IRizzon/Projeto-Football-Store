import { createCartItemElement, removeFromCart, updateCartTotal } from './script';

describe('Teste de função createCartItemElement', () => {
    test('deve retornar um elemento de item do carrinho com todas as informações corretas', () => {
        const cartItem = {
            nome: 'Chuteira Nike',
            preco: 250.50,
            IMG: 'caminho/para/imagem.jpg'
        };

        const itemElement = createCartItemElement(cartItem);

        expect(itemElement.classList.contains('itemCard')).toBe(true);
        expect(itemElement.querySelector('img').src.endsWith(cartItem.IMG)).toBe(true);
        expect(itemElement.querySelector('img').alt).toBe(cartItem.nome);
        expect(itemElement.querySelector('h2').textContent).toBe(cartItem.nome);
        expect(itemElement.querySelector('p').textContent).toBe(`Preço: R$ ${cartItem.preco.toFixed(2)}`);
    });
});

describe('Teste de função removeFromCart', () => {
    test('deve remover o item do carrinho corretamente', () => {
        const cartItemToRemove = {
            nome: 'Chuteira Nike',
            preco: 250.50,
            IMG: 'caminho/para/imagem.jpg'
        };

        // Simula o localStorage contendo o item a ser removido
        localStorage.setItem('cart', JSON.stringify([cartItemToRemove]));

        // Chama a função para remover o item
        removeFromCart(cartItemToRemove);

        // Verifica se o item foi removido corretamente do localStorage
        expect(localStorage.getItem('cart')).toBe('[]');
    });
});

describe('Teste de função updateCartTotal', () => {
    test('deve atualizar o total do carrinho corretamente', () => {
        const cartItems = [
            { nome: 'Chuteira Nike', preco: 250.50 },
            { nome: 'Bola Adidas', preco: 100.75 },
            { nome: 'Meião Puma', preco: 50.20 }
        ];

        updateCartTotal(cartItems);

        const cartTotalElement = document.querySelector('.cartTotal');
        if (cartTotalElement) {
            expect(cartTotalElement.textContent).toBe('Total: R$ 401.45');
        } else {
            fail('Elemento .cartTotal não encontrado no HTML.');
        }
    });
});

