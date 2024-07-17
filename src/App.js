import MovieSelect from './components/movie-select.js';

/**
 * App class serves to initialize and handle updates
 * of dynamic html content
 */
class App {
  static init() {
    //Set up various dynamically rendered HTML components here.
    console.log('App class initialized');

    //Render movie select
    MovieSelect.render();
  }
}

export default App;
