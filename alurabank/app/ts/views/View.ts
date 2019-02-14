//declare var $: any;

// O <T> significa que ele recebe algo que eu não sei o que é ainda
abstract class View<T> {

  //private _elemento: Element;

  // HTML
  //private _elemento: any;

  // Alterando para jQuery
  private _elemento: JQuery;

  constructor(seletor: string) {
    //this._elemento = document.querySelector(seletor);

    // Alterando para jQuery
    this._elemento = $(seletor);
  }

  update(model: T) {
    //this._elemento.innerHTML = this.template(model);

    // Alterando para jQuery
    this._elemento.html(this.template(model));
  }

  abstract template(model: T): string;
}