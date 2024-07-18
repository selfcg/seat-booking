class Summary {
  static calculatePrice(numSeats, seatPrice) {
    return numSeats * seatPrice;
  }

  static render(numSeats, seatPrice) {
    console.log('Summary rendered');
    const summaryNode = document.getElementById('summary');
    console.log(summaryNode);
    summaryNode.innerHTML = `
			You have selected <span class="highlight">${numSeats}</span> seats for <span class="highlight">$${this.calculatePrice(
      numSeats,
      seatPrice
    )}</span>
		`;
  }
}

export default Summary;
