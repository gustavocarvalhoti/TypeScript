class NegociacaoController {

  // HTMLInputElement
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  // Como é instancia não precisa definir o tipo
  private _negociacoes = new Negociacoes();

  constructor() {
    // Buscar os elementos - querySelector - <HTMLInputElement> faz o casting
    this._inputData = <HTMLInputElement> document.querySelector('#data');
    this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
    this._inputValor = <HTMLInputElement> document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    // Não fazer reload nos componentes
    event.preventDefault();

    //HTML
    const negociacao = new Negociacao(
        new Date(this._inputData.value.replace(/-/g, ',')),// Parse Date
        parseInt(this._inputQuantidade.value),             // Parse Int
        parseFloat(this._inputValor.value)                 // Parse float
    );

    this._negociacoes.adiciona(negociacao);

    // Depois de adicionar, atualiza a view novamente para refletir os dados
    this._negociacoesView.update(this._negociacoes);

    // Logando a mensagem de sucesso!
    this._mensagemView.update('Negociação adicionada com sucesso');
  }
}