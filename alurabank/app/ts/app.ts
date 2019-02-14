//let negociacao = new Negociacao(new Date(), 1, 100);
//console.log(negociacao);
// GET - Não funciona porque estou tentando setar um valor em um GET

//Gera erro quando pede para gerar o JS
//Erro de compilação do TypeScript de acesso indevido a uma propriedade privada
//negociacao.quantidade = 3;
//console.log(negociacao.quantidade);

// SET - Nesse caso altera por causa do _
// _ <- Significa que é privado tb
//negociacao._quantidade = 3;
//console.log(negociacao.quantidade);

// Instância de NegociacaoController para em seguida associar ao evento submit do formulário de index.html a chamada do método adiciona.
const controller = new NegociacaoController();

// HTMLInputElement
/*
document
  .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
*/

// JQuery
$('.form').submit(controller.adiciona.bind(controller));