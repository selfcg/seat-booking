/**
 * application state stored here
 */

class Store {
  constructor(state) {
    //make sure state is an objectS
    this.state = state;
  }

  /**
   *	update in item in store
   * @param {*} property expects key/value pair
   */
  updateItem(property) {
    //make sure property exists

    this.state = {
      property,
      ...this.state,
    };
  }

  /**
   * get value of an item in store
   * @param {*} key string
   * @returns value associated with key
   */
  getItem(key) {
    //could do more validation here but we have a very simple program
    return this.state['key'];
  }
}

export default Store;
