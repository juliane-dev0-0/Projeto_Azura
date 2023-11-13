class cardEquipe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="item">
    <img id="equipe-image"
        src="${this.getAttribute('image')}"
        alt="Card Image">
   <div class="cardEquipe">
        <h1>${this.getAttribute('name')}</h1>
        <p>${this.getAttribute('text')}</p>
    </div>
</div>
    `;
  }
}

customElements.define('card-equipe', cardEquipe);
