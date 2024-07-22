import SeatRow from './seat-row.js';

/**
 * render 6 seat-rows
 * get functionality for #selected to be used in summary
 */

const NUM_ROWS = 6;

class Seats {
  static render() {
    const seatsNode = document.getElementById('seat-grid');

    for (let i = 0; i < NUM_ROWS; i++) {
      const seatRow = new SeatRow();
      seatRow.render(seatsNode);
    }
  }
}

export default Seats;
