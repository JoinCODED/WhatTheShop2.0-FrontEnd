import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    let itemcheck = this.items.find(
      theitem =>
        item.product === theitem.product && item.request === theitem.request
    );
    if (!itemcheck) {
      this.items.push(item);
    } else {
      itemcheck.quantity++;
    }
  };

  // find method extracts and changes the value in the array automatically. Linked to array

  removeItemFromCart = item => {
    this.items = this.items.filter(theitem => item !== theitem);
  };

  checkoutCart = () => {
    this.items = [];
    alert("Your order is received :)");
  };

  get quantity() {
    let count = 0;
    this.items.forEach(item => (count += item.quantity));
    return count;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

export default new CartStore();
