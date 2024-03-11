export function extractProducts() {
    const produto = document.querySelectorAll('.card');
    const bttBuy = document.querySelectorAll('.bttBuy');

    const item = [];

    produto.forEach(produto =>{

        const nome = produto.querySelector('.cardPrice h1').innerText;

        const precoTexto = produto.querySelector('.cardPrice h3').innerText;
        const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));

        const IMG = produto.querySelector('.cardPrice img').getAttribute('src');

        item.push({nome, preco, IMG});
    })

    //Verificando o Array no console
    console.log(item);

    bttBuy.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Salvando o item clicado no localStorage
            const selectedItem = item[index];
            localStorage.setItem('cart', JSON.stringify(selectedItem));
            console.log('Item adicionado ao carrinho:', selectedItem);
        });
    });
}