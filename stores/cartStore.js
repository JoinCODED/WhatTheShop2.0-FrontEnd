import { decorate, observable, computed } from "mobx";
import axios from "axios";

class CartStore {
  items = [];
  cart = [];
  products = [];
  loading = true;

  FetchCartItems = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/cartitem/");
      this.items = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  cartUpdate = (newQuantity, cartItemID, incomingItem) => {
    const foundItem = this.items.find(item => item.id === incomingItem.id);

    if (foundItem && foundItem.quantity > 0) {
      foundItem.quantity = newQuantity.quantity;
      try {
        const res = axios.put(
          `http://127.0.0.1:8000/cartitem/${cartItemID}/`,
          newQuantity
        );
      } catch (err) {
        console.error(err);
      }
    } else if (newQuantity.quantity == 0) {
      this.cart[0].cart_items = this.cart[0].cart_items.filter(
        item => item !== incomingItem
      );
      try {
        const res = axios.delete(`http://127.0.0.1:8000/remove/${cartItemID}/`);
      } catch (err) {
        console.error(err);
      }
    }
  };

  addItemToCart = async incomingItem => {
    const foundItem = this.cart[0].cart_items.find(
      item => item.product === incomingItem.product
    );
    if (foundItem) foundItem.quantity += incomingItem.quantity;
    else this.cart[0].cart_items.push(incomingItem);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/cartitem/",
        incomingItem
      );
    } catch (err) {
      console.error(err);
    }
  };

  removeItemFromCart = (itemToDelete, cartItemID) => {
    this.cart[0].cart_items = this.cart[0].cart_items.filter(
      item => item !== itemToDelete
    );
    try {
      const res = axios.delete(
        `http://127.0.0.1:8000/remove/${cartItemID}/`,
        itemToDelete
      );
    } catch (err) {
      console.error(err);
    }
  };

  fetchCart = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/cart/");
      const cart = res.data;
      this.cart = cart;

      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  checkoutCart = navigation => {
    this.items = [];
    navigation.replace("Review");
    try {
      const res = axios.get("http://127.0.0.1:8000/revorder/");
    } catch (err) {
      console.error(err);
    }
  };

  FetchReviewItems = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/revieworder/");
      this.products = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  get quantity() {
    let total = 0;
    if (this.cart.length) {
      this.cart[0].cart_items.forEach(item => (total += item.quantity));
    }
    return total;
  }

  get subTotal() {
    let total = 0;
    if (this.cart.length) {
      this.cart[0].cart_items.forEach(
        item => (total += item.quantity * item.price)
      );
    }
    return total;
  }
  get reviewSubTotal() {
    let total = 0;
    this.products.forEach(item => (total += item.quantity * item.price));
    return total;
  }
}

decorate(CartStore, {
  cart: observable,
  items: observable,
  loading: observable,
  quantity: computed,
  subTotal: computed,
  reviewSubTotal: computed
});

export default new CartStore();
