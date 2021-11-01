class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
        <form class="search-bar d-flex mt-5 mb-4">
          <input class="form-control me-2" id="searchElement" type="search" placeholder="Search for a movie.." aria-label="Search">
          <button class="btn btn-primary" id="searchButtonElement" type="submit">Search</button>
        </form>`;

    this.querySelector("#searchButtonElement").addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
