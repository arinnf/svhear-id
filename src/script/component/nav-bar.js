class NavigationBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #244463;">
        <div class="container">
            <a class="navbar-brand" href="#">Svhear.id</a>
        </div>
      </nav>`;
  }
}

customElements.define('navigation-bar', NavigationBar);
