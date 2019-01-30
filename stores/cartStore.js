import { decorate, observable } from "mobx";
import axios from "axios";
import authStore from "../stores/authStore";

class CartStore {
  constructor() {
    this.items = [];
  }

  addItemtoCart(order) {
    console.log("my items are:      ", order);
    let item = this.items.find(
      item => item.id === order.id && item.size === order.size
    );
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
    axios
      .post("http://127.0.0.1:8000/api/order/create/", items)
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    // console.log(items);
    this.items = [];
  }
}

decorate(CartStore, {
  items: observable
});

let cartStore = new CartStore();

export default cartStore;
