class TvShowElement extends HTMLElement {
    constructor() {
        super();
    }

    set tv(tv) {
        this._tv = tv;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container mt-5">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this._tv.poster_path}" class="card-img" alt="poster">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">${this._tv.name}</h3><hr>
                                    <h4 class="card-text"><small class="text-muted"><img src="https://image.freepik.com/free-vector/start_53876-25533.jpg" class="tv-rating" alt="star">${this._tv.vote_average}</small></h4>
                                    <p class="card-text">${this._tv.first_air_date}</p>
                                    <h4 class="card-text"><small class="overview">Overview</small></h4>
                                    <p class="card-text">${this._tv.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> `;
        }
    }

customElements.define('tv-element', TvShowElement);
