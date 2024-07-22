import MovieSelect from './components/movie-select.js';
import Legend from './components/legend.js';
import Seats from './components/seats.js';
import Summary from './components/summary.js';

import Store from './utils/store.js';
/**
 * App class serves to initialize and handle updates
 * of dynamic html content
 */
class App {
  static updateSeats(numSeats) {
    Summary.render(store.getItem('numSeats'), store.getItem('price'));
  }

  static updatePrice(price) {
    Summary.render(store.getItem('numSeats'), store.getItem('price'));
  }

  static init() {
    //Set up various dynamically rendered HTML components here.
    console.log('App class initialized');

    const store = new Store({});

    //Render movie select
    MovieSelect.render();
    MovieSelect.attachUpdateFunction(this.updatePrice);
    Legend.render();
    Seats.render();
    Seats.attachUpdateFunction(this.updateSeats);
    Summary.render(store.getItem('numSeats'), store.getItem('price')); //num / price
  }
}

export default App;
