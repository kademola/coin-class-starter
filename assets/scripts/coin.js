class Coin {
  constructor(state) {
    this.state = state;
  }

  flip() {
    console.log("coin.flip() has been invoked.");
  }

  toString() {
    console.log("coin.toString() has been invoked.");
  }

  toHTML() {
    let image = document.createElement("img");

    console.log("coin.toHTML() has been invoked.");

    return image;
  }
}
