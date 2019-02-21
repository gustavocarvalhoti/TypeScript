class NegociacaoControllerJQuery {

  // JQuery
  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;

  private _negociacoesView = new NegociacoesViewJQ('#negociacoesViewJQ');
  private _mensagemView = new MensagemViewJQ('#mensagemView');

  // Como é instancia não precisa definir o tipo
  private _negociacoes = new Negociacoes();

  constructor() {
    // JQuery
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    // Não fazer reload nos componentes
    event.preventDefault();

    const negociacao = new Negociacao(
        new Date(this._inputData.val().replace(/-/g, ',')),
        parseInt(this._inputQuantidade.val()),
        parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);

    // Depois de adicionar, atualiza a view novamente para refletir os dados
    this._negociacoesView.update(this._negociacoes);

    // Logando a mensagem de sucesso!
    this._mensagemView.update('Negociação adicionada com sucesso');
  }
}