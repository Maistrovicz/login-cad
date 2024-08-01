// validação de preenchimento
function acessar(){
    let loginEmail = document. getElementById('loginEmail').
    value;
    let loginsenha = document.getElementById('loginSenha').
    value;

    if(!loginEmail || !loginsenha){
        alert('Favor preencher todos os campos');
    }else{
        // alert("Campos preenchidos com sucesso");
     window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO DE CRIAÇÃO DE ARRAY ARMAZENAMENTO DE NOMES

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').
    value;
    if(nomeUser){
        dadosLista.push(nomeUser)


    }else{
        alert("Favor, informar um nome para cadastro");
    }
}
// FUNÇÃO DE CRIAÇÃO DE LISTA
function crialista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><tr>Nome usuario</tr><tr>Ação</tr></tr>"
}