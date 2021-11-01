import './tvshow-element.js';

class TvShowList extends HTMLElement {
  constructor() {
    super();
  }

  set tv (tv) {
    this._tv = tv;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._tv.forEach(tv => {
      const tvItemElement = document.createElement('tv-element');
      tvItemElement.tv = tv;
      this.appendChild(tvItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                text-align: center;
            }
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('tv-list', TvShowList);
