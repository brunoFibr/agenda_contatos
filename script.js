const form = document.getElementById('form');
let linhas = [];

const cabecalho = document.querySelector('thead');
cabecalho.innerHTML = `<tr><th>Não há contatos na agenda</th></td>`;


form.addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById('nome-contato');
    const dd = document.getElementById('dd-contato');
    const telefone = document.getElementById('telefone-contato');

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

