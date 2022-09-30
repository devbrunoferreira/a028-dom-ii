
const container = document.getElementById('container');
const botao = document.getElementById('botao');

console.log(container);
console.log(botao);

function removeItem(event) {
    event.preventDefault();
    event.target.remove();
}

function adicionaItem(event) {
    event.preventDefault();

    // Criando e Estilizando novo Elemento;
    const novoElemento = document.createElement('article');
    novoElemento.classList.add('novo-item');
    // container.appendChild(novoElemento);
    novoElemento.innerHTML = 'Olá, Barbosa!';
    
    // Adicionando novo Elemento;
    container.insertAdjacentElement('beforeend', novoElemento);

    // Removendo novo Elemento;
    novoElemento.addEventListener('click', removeItem);
    
    // novoElemento.onclick = function removeItem(event) {
    //     event.target.remove();
    // }
}
