import { MOVIES } from './../assets/movie-data.js';

class MovieSelect {
  //TODO: Manage classnames
  static render() {
    console.log('MovieSelect rendered');
    //Select parent node to append later nodes
    const renderNode = document.getElementById('movie-select');

    const labelNode = document.createElement('label');
    labelNode.innerText = 'Pick a movie:';
    labelNode.setAttribute('for', 'movies');

    const selectNode = document.createElement('select');
    selectNode.setAttribute('name', 'movies');
    selectNode.setAttribute('id', 'movies');

    const movieNodes = MOVIES.map((movie) => {
      const movieNode = document.createElement('option');
      movieNode.setAttribute('value', movie.value);
      movieNode.innerTex = `${movie.name} + ${movie.price}`;

      return movieNode;
    });
  }
}

export default MovieSelect;
