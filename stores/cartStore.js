import { decorate, observable } from "mobx";
import axios from "axios";

class CartStore {
  constructor() {
    this.items = [];
  }

  addItemtoCart(order) {
    let item = this.items.find(item => {
      return item.name === order.name && item.size === order.size;
    });
    if (item) {
      item.quantity += order.quantity;
    } else {
      this.items.push(order);
    }
  }

  removeItemFromCart(order) {
    this.items = this.items.filter(filterOrder => filterOrder !== order);
    // another solution:
    // this.items = this.items.filter(filterOrder => {
    //   return filterOrder !== order;
    // });
  }

  checkOutCart() {
    items = this.items;
    axios.post("http://127.0.0.1:8000/api/order/create/", items);
    this.items = [];
  }
}

decorate(CartStore, {
  items: observable
});

let cartStore = new CartStore();

export default cartStore;
