let nomes = [];


function mensagemErro(texto){

    let erro = document.getElementById("mensagemErro");
    erro.innerHTML = texto;
}

function limparLista(){
    nomes = [];
    atualizarLista(nomes);
}


document.addEventListener("DOMContentLoaded", function() {
    const adicionarBtn = document.getElementById("adicionar");
    const limparBtn = document.getElementById("limpar");
    const sortearBtn = document.getElementById("sortear");

    if (adicionarBtn) {
        adicionarBtn.addEventListener("click", adicionarNomes);
    } else {
        console.error("Elemento com ID 'adicionar' não encontrado.");
    }

    if (limparBtn) {
        limparBtn.addEventListener("click", limparLista);
    } else {
        console.error("Elemento com ID 'sortear' não encontrado.");
    }

    if (sortearBtn) {
        sortearBtn.addEventListener("click", sortearAmigos);
    } else {
        console.error("Elemento com ID 'sortear' não encontrado.");
    }
});


function adicionarNomes() {
    let inputNome = document.getElementById("input_nome");
      
    if (inputNome.value === "") {
        mensagemErro("CAMPO NOME NÃO PODE ESTAR VAZIO!");
        inputNome.focus();  
        
    } else {  
        mensagemErro("");
        nomes.push(inputNome.value);
        atualizarLista(nomes);
        inputNome.value = "";
        inputNome.focus();           
    }
}


function atualizarLista(nomes) {
    let listaNomes = document.getElementById("listaNomes");
    listaNomes.innerHTML = "";

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}



function sortearAmigos(){

    if(nomes.length < 2){
        listaNomes.innerHTML = "Você precisa adicionar no mínimo DOIS nomes para sortear!";
        return;
    }

    let amigos = [...nomes];
    let sorteio = {};

    nomes.forEach(nome => {
        let indice = Math.floor(Math.random() * amigos.length);
        (amigos[indice] === nome); { 
            indice = Math.floor(Math.random() * amigos.length);
        }
        sorteio[nome] = amigos[indice];
        amigos.splice(indice, 1);
    }); 
    
    resultado(sorteio);
}


function resultado(sorteio){
    let textoResultado = document.getElementById("resultado"); 

        for(let nome in sorteio){
            if(sorteio.hasOwnProperty(nome)){ 
                textoResultado.innerHTML = `Nome sorteado: ${sorteio[nome]}!`;  
                
            } else {
                textoResultado.innerHTML = `Erro para sortear ${nome}`;
            }
        }
}










