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
        <div class="redesSociais">
          <div class="instagramDiv">
            <img id="instagramImg"
              src="https://images.squarespace-cdn.com/content/v1/6019512eb9d45c40215337ea/f62e27ce-929f-46f1-8710-4d8e7cdfc2eb/logo-instagram-branco.png">
            <a href="#" id="redesSociaisLinks">${this.getAttribute('arrobaInstagram')}</a>
          </div>
          <div class="emailDiv">
            <img id="emailImg"
              src="https://static-00.iconduck.com/assets.00/mail-icon-2018x2048-0bkdtuf1.png">
            <a href="#" id="redesSociaisLinks">${this.getAttribute('arrobaEmail')}</a>
          </div>
        </div>
    </div>
</div>
    `;
  }
}

customElements.define('card-equipe', cardEquipe);
