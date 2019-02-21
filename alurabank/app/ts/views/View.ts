//declare var $: any;

// O <T> significa que ele recebe algo que eu não sei o que é ainda
abstract class View<T> {

  private _elemento: any;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  update(model: T) {
    this._elemento.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}