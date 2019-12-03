import { computed, decorate, observable } from "mobx";

class CartStore {
  dinosaurs = [];

  addItemToCart = dinosaur => {
    const dinosaurExist = this.dinosaur.find(
      _dinosaur =>
        _dinosaur.name === dinosaur.name && _dinosaur.price === dinosaur.price
    );
    if (dinosaurExist) dinosaurExist.quantity += dinosaur.quantity;
    else this.dinosaurs.push(dinosaur);
  };

  removeItemFromCart = dinosaur =>
    (this.dinosaurs = this.dinosaurs.filter(
      _dinosaur => _dinosaur !== dinosaur
    ));

  checkoutCart = () => {
    this.dinosaurs = [];
    alert("Thank you for buying our Dinosaurs");
  };

  get quantity() {
    let quantity = 0;
    this.dinosaurs.forEach(dinosaur => (quantity += dinosaur.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
export default cartStore;
