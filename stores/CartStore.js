import { decorate, observable, computed } from "mobx";
import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://127.0.0.1:8000/"
// });

class CartStore {
  items = [];
  loading = false;

  fetchCart = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/cart/");
      const items = res.data;
      console.log("cartat", items);
      this.items = items;
      //   this.loading = false;
    } catch (err) {
      console.log(err);
    }
  };

  addItemToCart(item) {
    const foundItem = this.items.find(cartItem => cartItem.name === item.name);
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.items.push(item);
    }

    console.log("itemscart", this.items);
  }

  removeItemFromCart(item) {
    this.items = this.items.filter(cartItem => cartItem !== item);
  }
}

decorate(CartStore, {
  items: observable
});

const cartStore = new CartStore();

export default cartStore;
