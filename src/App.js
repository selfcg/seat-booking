import MovieSelect from './components/movie-select.js';
import Legend from './components/legend.js';
import Seats from './components/seats.js';
import Summary from './components/summary.js';

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
    Legend.render();
    Seats.render();
    Summary.render(15, 15); //num / price
  }
}

export default App;
