const form = document.getElementById('form');
const nome = document.getElementById('nome-contato');
const dd = document.getElementById('dd-contato');
const telefone = document.getElementById('telefone-contato');

let linhas = [];

const cabecalho = document.querySelector('thead');
cabecalho.innerHTML = `<tr><th>Não há contatos na agenda</th></td>`;

dd.addEventListener('keyup', function(e){

    dd.value = dd.value.replace(/\D/g, '');
});

telefone.addEventListener('keyup', function(e){

    telefone.value = telefone.value.replace(/\D/g, '');
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    let linha = `<tr>`;
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${dd.value}-${telefone.value}</td>`;
    linha += `</tr>`;
    

    linhas += linha;

    if (linhas.length > 0){
        cabecalho.innerHTML = `<tr><th>Nome do Contato</th><th>Número do contato</th></tr>`
    }

    let tabela = document.getElementById('tabela');
    tabela.innerHTML = linhas;

    nome.value = '';
    dd.value = '';
    telefone.value = '';
})

