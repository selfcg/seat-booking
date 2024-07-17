/**
 * The Seat class serves to render individual 'seat' components,
 * both in our legend, and in our grid representation of
 * seats.
 *
 * @param {string} className className used to style seat based
 * off of it's current state.
 * 	Possible states are: Unoccupied, Occupied, Selected.
 *
 * TODO: figure out how to deal with seats in the 'legend',
 * which should not have the same interactivity as those
 * in the grid. For now, we will add an 'interactable' prop.
 *
 *
 */

class Seat {
  constructor(className, interactable, parentNode) {
    this.className = className;
    this.interactable = interactable;
    this.parentNode = parentNode;
  }

  render() {
    const seatNode = document.createElement('div');
    seatNode.setAttribute('class', `seat ${this.className}`);
    this.parentNode.appendChild(seatNode);
  }

  assignClass() {}
}

export default Seat;
