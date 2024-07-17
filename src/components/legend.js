import Seat from './seat.js';

class Legend {
  /**
   *
   * @param {*} itemText text associated with seat
   * @param {*} seatClass classname to determine color of seat
   * @returns
   */
  static createLegendItem(itemText, seatClass) {
    const legendItemNode = document.createElement('div');
    legendItemNode.setAttribute('class', 'legend-item');

    const legendItemText = document.createElement('span');
    legendItemText.innerText = itemText;
    legendItemText.style.marginLeft = '0.5em';

    const seat = new Seat(seatClass, false, legendItemNode);
    seat.render();
    legendItemNode.appendChild(legendItemText);

    return legendItemNode;
  }

  static render() {
    const renderNode = document.getElementById('legend');
    const unoccupiedLegend = this.createLegendItem('Unoccupied', 'unoccupied');
    const selectedLegend = this.createLegendItem('Selected', 'selected');
    const occupiedLegend = this.createLegendItem('Occupied', 'occupied');

    renderNode.appendChild(unoccupiedLegend);
    renderNode.appendChild(selectedLegend);
    renderNode.appendChild(occupiedLegend);
  }
}

export default Legend;
