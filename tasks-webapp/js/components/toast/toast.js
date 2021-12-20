export default class Toast {
  constructor(message, type) {
    this.message = message;
    this.type = type;
    this.timeout = setTimeout(this.close.bind(this), 5000);
    //this.timeout = setTimeout(() => {
    //  this.close();
    //} 5000);

    document.querySelector(`[data-status="${this.type}"]`)?.remove();

    this.create();
  }

  create() {
    this.toast = document.createElement('div');
    this.toast.classList.add('toast__item');
    this.toast.setAttribute('data-status', this.type);

    const text = document.createElement('p');
    text.classList.add('toast__message');
    text.textContent = this.message;

    const button = document.createElement('button');
    button.classList.add('toast__close');
    button.innerHTML = '<span class="material-icons">close</span>';
    // No método "close", eu preciso vincular o escopo do this para que o método que está sendo chamado (close) entenda que eu quero que o target seja o que estou criando nesta classe
    button.addEventListener('click', this.close.bind(this));

    // Outra forma de ver isso:
    // button.addEventListener('click', () => {
    //  this.close();
    //});

    this.toast.append(text, button);
    document.querySelector('.toast').append(this.toast);
  }

  close() {
    // event.target.closest('.toast__item').remove(); - Neste caso precisaria passar o evento no close(event)
    clearTimeout(this.timeout);
    this.toast.remove();
  }
}

/*
  <div class="toast__item">
  <p class="toast__message">Lorem ipsum dolor sit amet.</p>
  <button class="toast__close">
    <span class="material-icons">close</span>
  </button>
  </div>
*/