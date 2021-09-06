// API Busca cep

const $cep = document.getElementById('cep');
const $logradouro = document.getElementById('logradouro');
const $bairro = document.getElementById('bairro');
const $cidade = document.getElementById('cidade');
const $uf = document.getElementById('uf');

$cep.addEventListener("blur", (info) => {
    const cep = info.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(resposta => {
        return resposta.json();
    })
    .then(dados => {
        console.log(dados);
        $logradouro.value = dados.logradouro;
        $bairro.value = dados.bairro;
        $cidade.value = dados.localidade;
        $uf.value = dados.uf;
        
    });
    
});