import './component/movie-list.js';
import './component/tvshow-list.js';
import './component/button-bar.js';
import './component/search-bar.js';
import DataSource from './data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');
  const tvListElement = document.querySelector('tv-list');
  const btnMovieElement = document.querySelector('#buttonMovie');
  const btnTvElement = document.querySelector('#buttonTvShow');

  const onButtonSearchClicked = async () => {
    try {
        const result = await DataSource.searchMovie(searchElement.value);
        renderMovieResult(result);
    } catch (message) {
        fallbackResult(message)
    }
  };

  const displayMovie = async () => {
    try {
      const result = await DataSource.movieList()

      btnMovieElement.classList.add('btn-primary')
      movieListElement.classList.add('show')

      if(tvListElement.classList.contains('show')) {
        tvListElement.classList.remove('show')
      }

      if(btnMovieElement.classList.contains('btn-primary')) {
        btnTvElement.classList.remove('btn-primary')
      }

      renderMovieResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const displayTvShow = async () => {
    try {
      const result = await DataSource.tvList();

      if(movieListElement.classList.contains('show')) {
        movieListElement.classList.remove('show')
        movieListElement.classList.add('hidden')
        btnTvElement.classList.add('btn-primary')
      }

      if(btnTvElement.classList.contains('btn-primary')) {
        btnMovieElement.classList.remove('btn-primary')
      }

      tvListElement.classList.add('show')
      renderTvShowResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderMovieResult = results => {
    movieListElement.movies = results;
  };

  const renderTvShowResult = results => {
    tvListElement.tv = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };
  
  searchElement.clickEvent = onButtonSearchClicked;

  btnMovieElement.addEventListener('click', displayMovie);
  btnTvElement.addEventListener('click', displayTvShow);
  
  displayMovie();
};

export default main;
