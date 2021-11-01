class ButtonBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="button-bar">
                    <button type="button" class="btn btn-primary" id="buttonMovie">Movie</button>
                    <button type="button" class="btn btn-primary" id="buttonTvShow">Tv Show</button>
                </div>
            </div>
            <movie-list></movie-list>
            <tv-list></tv-list>
        </div>`;
    }
}

customElements.define('button-bar',ButtonBar);