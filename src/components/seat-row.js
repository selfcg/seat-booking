import Seat from './seat.js';

const NUM_SEATS = 7;

class SeatRow {
  render(parentNode) {
    const rowNode = document.createElement('div');
    rowNode.setAttribute('class', 'seat-row');

    for (let i = 0; i < NUM_SEATS; i++) {
      const seat = new Seat(this.getRandomSeatClass());
      seat.render(rowNode);
    }

    parentNode.appendChild(rowNode);
  }

  getRandomSeatClass() {
    const random = Math.random();
    console.log('generating seat class: random number is ' + random);
    return random >= 0.15 ? 'unoccupied' : 'occupied';
  }
}

export default SeatRow;
