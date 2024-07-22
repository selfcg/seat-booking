/**
 * The Seat class serves to render individual 'seat' components,
 * both in our legend, and in our grid representation of
 * seats.
 *
 * @param {string} className className used to style seat based
 * off of it's current state.
 * 	Possible states are: Unoccupied, Occupied, Selected.
 */

class Seat {
  constructor(className, interactable = true) {
    this.className = className;
    this.interactable = interactable;
    this.node = null;
  }

  render(parentNode) {
    const seatNode = document.createElement('div');
    seatNode.setAttribute('class', `seat ${this.className}`);
    seatNode.addEventListener('click', this.handleClick.bind(this));
    this.node = seatNode;
    parentNode.appendChild(seatNode);
  }

  handleClick() {
    console.log(this.interactable);
    if (this.node.classList.contains('unoccupied')) {
      this.node.classList.remove('unoccupied');
      this.node.classList.add('selected');
    } else if (this.node.classList.contains('selected')) {
      this.node.classList.remove('selected');
      this.node.classList.add('unoccupied');
    }
  }
}

export default Seat;
