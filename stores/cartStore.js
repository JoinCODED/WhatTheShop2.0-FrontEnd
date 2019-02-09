import { decorate, observable, computed } from "mobx";
import axios from "axios";
import ShopStore from "../stores/shopStore";
import authStore from "./authStore";

class CartStore {
  constructor() {
    this.items = [];
    this.loading = true;
  }

  addItemtoCart(order) {
    //console.log("my items are:      ", order);
    let item = this.items.find(
      item => item.id === order.id && item.size === order.size
    );
    if (authStore.user) {
      if (item) {
        item.quantity += order.quantity;
        axios
          .post("http://127.0.0.1:8000/api/cart/", order)
          .then(res => res.data)
          .then(data => data)
          .catch(err => console.log(err));
      } else {
        this.items.push(order);
        axios
          .post("http://127.0.0.1:8000/api/cart/", order)
          .then(res => res.data)
          .then(data => data)
          .catch(err => console.log(err));
      }
    }
  }

  // removeItemFromCart(order) {
  //   this.items = this.items.filter(filterOrder => filterOrder !== order);
  // }
  getcart() {
    axios
      .get("http://127.0.0.1:8000/api/cart/")
      .then(res => res.data)
      .then(data => {
        this.items = data;
        this.loading = false;
      })
      .catch(err => console.log(err));
  }

  removeItemFromCart(item) {
    this.items = this.items.filter(filterOrder => filterOrder !== item);
    axios
      .delete(`http://127.0.0.1:8000/api/userchoice/${item.id}/delete/`)
      .catch(err => console.log(err));
  }
  get total() {
    let total = 0;

    this.items.forEach(obj => {
      ShopStore.items.find(item => {
        if (item.id === obj.item) {
          total = total + obj.quantity * item.price;
        }
      });
    });

    return total;
  }

  checkOutCart() {
    items = this.items;
    axios
      .post("http://127.0.0.1:8000/api/checkout/", items)
      .then(res => res.data)
      .then(data => data)
      .catch(err => console.log(err));
    // console.log(items);
    this.items = [];
  }
}

decorate(CartStore, {
  items: observable,
  total: computed,
  loading: observable
});

let cartStore = new CartStore();

export default cartStore;
