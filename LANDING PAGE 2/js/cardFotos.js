class CardFotos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card-fotos">
        <img class="card-image" src="${this.getAttribute('image')}" alt="Card Image">
        <div class="card-line"></div>
        <p>${this.getAttribute('text')}</p>
      </div>
    `;
  }
}

customElements.define('card-fotos', CardFotos);

