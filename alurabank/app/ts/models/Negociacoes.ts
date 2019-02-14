class Negociacoes {

  private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    //return this._negociacoes;
    // Para não apagar o array sem querer, vai adicionando
    return [].concat(this._negociacoes);
  }
}