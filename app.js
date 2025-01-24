let nome = [];













document.getElementById("secao__conteudo__input").addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value.trim();
    const erro = document.getElementById('erro');
    
    if(nome === "") {
        event.preventDefault();
        erro.textContent = 'Por favor, digite um nome válido!';
    } else {
        erro.textContent = '';
    }
});