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
      // console.log("cartat", items);
      this.items = items;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  };

  createItem = async item => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/cart/", item);
      const data = res.data;
      console.log("lastcart", data);
    } catch (err) {
      console.log(err.response);
    }
  };

  updateQuantity = async item => {
    try {
      const res = await axios.put("http://127.0.0.1:8000/cart/", item);
      const data = res.data;
      console.log("lastcart", data);
    } catch (err) {
      console.log(err.response);
    }
  };

  checkOut = async () => {
    this.items = [];
  };

  addItemToCart(item) {
    const foundItem = this.items.find(cartItem => cartItem.name === item.name);
    if (foundItem) {
      foundItem.quantity += item.quantity; //here we stopped
      this.updateQuantity(foundItem);
      alert("Thank You , Item added succesfully");
    } else {
      this.items.push(item);
      this.createItem(item);
      alert("Thank You , Item added succesfully");
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
