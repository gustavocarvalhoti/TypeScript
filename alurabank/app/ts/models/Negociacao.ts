class Negociacao {

  // Declaração das propriedades de classe

  // Não tipado
  /*
  _data;
  _quantidade;
  _valor;

  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }
  */

  // Devidamente tipada

  /*
  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  // Normal
  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }
  */

  // Devidamente tipada
  // Resumida, top \0/
  // Declara como private as variaveis e já cria o contrutor que é public
  constructor(
      private _data: Date,
      private _quantidade: number,
      private _valor: number) {
  }

  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}