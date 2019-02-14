class NegociacaoController {

  // OLD
  /*
  private _inputData;
  private _inputQuantidade;
  private _inputValor;

  constructor() {
    // Buscar os elementos - querySelector
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
  }
  */

  // NEW
  // HTMLInputElement
  //private _inputData: HTMLInputElement;
  //private _inputQuantidade: HTMLInputElement;
  //private _inputValor: HTMLInputElement;

  // JQuery
  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;

  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  //private _negociacoes: Negociacoes = new Negociacoes();
  // Como é instancia não precisa definir o tipo
  private _negociacoes = new Negociacoes();

  constructor() {
    // Buscar os elementos - querySelector - <HTMLInputElement> faz o casting
    //this._inputData = <HTMLInputElement> document.querySelector('#data');
    //this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
    //this._inputValor = <HTMLInputElement> document.querySelector('#valor');

    // JQuery
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    // Não fazer reload nos componentes
    event.preventDefault();

    //JQuery
    const negociacao = new Negociacao(
        new Date(this._inputData.val().replace(/-/g, ',')),
        parseInt(this._inputQuantidade.val()),
        parseFloat(this._inputValor.val())
    );

    //HTML
    /*
    const negociacao = new Negociacao(
        new Date(this._inputData.value.replace(/-/g, ',')),// Parse Date
        parseInt(this._inputQuantidade.value),             // Parse Int
        parseFloat(this._inputValor.value)                 // Parse float
    );
    */

    this._negociacoes.adiciona(negociacao);

    // Apaga o array - Agora não apaga mais XD
    //this._negociacoes.paraArray().length = 0;

    /*
    this._negociacoes.paraArray().forEach(negociacao => {
      console.log(negociacao.data);
      console.log(negociacao.quantidade);
      console.log(negociacao.valor);
    });
    */

    // Depois de adicionar, atualiza a view novamente para refletir os dados
    this._negociacoesView.update(this._negociacoes);

    // Logando a mensagem de sucesso!
    this._mensagemView.update('Negociação adicionada com sucesso');
  }
}