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
 * in the grid.
 */

class Seat {
  constructor(className) {
    this.className = className;
  }
}
