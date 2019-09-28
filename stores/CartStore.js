import { decorate, observable, computed } from "mobx";

// const instance = axios.create({
//   baseURL: "http://127.0.0.1:8000/"
// });
import { instance } from "./instance.js";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

class CartStore {
  items = [];
  loading = false;

  fetchCart = async () => {
    try {
      const res = await instance.get("/viewcart/");
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
      console.log("HERLLLLLLO");
      const res = await instance.post("/addtocart/", item);
      console.log(res);
      const data = res.data;
      console.log("lastcart", data);
    } catch (err) {
      console.log("error: " + err.response);
    }
  };

  updateQuantity = async item => {
    try {
      const res = await instance.put("/addtocart/", item);
      const data = res.data;
      console.log("lastcart", data);
    } catch (err) {
      console.log(err.response);
    }
  };

  checkingout = async () => {
    try {
      const res = await instance.get("/checkout/");
      const data = res.data;
    } catch (err) {
      console.log(err.response);
    }
  };

  delete = async item => {
    try {
      const res = await instance.delete("/deletecart/", item);
      const data = res.data;
    } catch (err) {
      console.log(err.response);
    }
  };

  checkOut = async () => {
    this.checkOut;
    this.items = [];
  };

  addItemToCart(item) {
    const foundItem = this.items.find(cartItem => cartItem.name === item.name);
    console.log("Found this item: " + foundItem);
    if (foundItem) {
      foundItem.quantity += item.quantity; //here we stopped
      this.updateQuantity(foundItem);
      alert("Thank You , Item added succesfully");
    } else {
      console.log("Didnt find item: " + item);
      const newItem = {
        item: item.id,
        quantity: item.quantity
      };

      this.items.push(item);
      this.createItem(newItem);

      alert("Thank You , Item added succesfully");
    }

    console.log("itemscart", this.items);
  }

  removeItemFromCart(item) {
    this.items = this.items.filter(cartItem => cartItem !== item);
    const newItem = {
      item: item.id
    };

    this.delete(newItem);
  }
  // get totalCart() {
  //   let total = 0;
  //   this.items.forEach(item => (total += item.price * this.item.quantity));
  // }
}

decorate(CartStore, {
  items: observable
  // totalCart: computed
});

const cartStore = new CartStore();

export default cartStore;
