class MensagemView extends View<string> {

  // Override na function template
  template(model: string): string {
    return `<p class="alert alert-info">${model}</p>`;
  }
}