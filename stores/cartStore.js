import { decorate, observable, computed } from "mobx";
import axios from "axios";

class CartStore {
  items = [];
  msg = "";

  fetchCartItems = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/cart/items/");
      this.items = res.data;
      console.log("Fetching cart items ", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  addItemToCart = async item => {
    try {
      let res = await axios.post("http://127.0.0.1:8000/api/addtocart/", item);
      let newItem = res.data;

      // this.items.push(newItem);
      console.log("THE ITEM IS: ", newItem);
    } catch (err) {
      console.log("ERROR WHILE ADDING TO CART", err);
    }
  };

  //     let itemcheck = this.items.find(
  //       theitem => item.drink === theitem.product && item.option === theitem.option
  //     );
  //     if (!itemcheck) {
  //       this.items.push(item);
  //     } else {
  //       itemcheck.quantity++;
  //     }
  //   };

  //  dont need this if we're not using quantity

  // find method extracts and changes the value in the array automatically. Linked to array

  removeItemFromCart = async item => {
    console.log(item);
    this.items = this.items.filter(theitem => item !== theitem);
    try {
      let res = await axios.delete("http://127.0.0.1:8000/api/addtocart/", {
        data: {
          id: item.id
        }
      });
      console.log(res.data);
    } catch (err) {}
  };

  checkoutCart = async () => {
    try {
      let res = await axios.post("http://127.0.0.1:8000/api/checkout/");
      this.msg = res.data;
      this.items = [];
      console.log("CHECKOUTT: ", this.msg);
    } catch (err) {
      console.log("ERROR WHILE CHECKOUT", err);
    }
  };
  // checkoutCart = () => {
  //   this.items = [];

  //   alert("Your order is received :)");
  // };

  //   get quantity() {
  //     let count = 0;
  //     this.items.forEach(item => (count += item.quantity));
  //     return count;
  //   }

  // in backend add a boolean field in the cart model true or false
  // check if cart is empty or not once user is logged in
}

decorate(CartStore, {
  items: observable
  //   quantity: computed
});

const cartStore = new CartStore();
cartStore.fetchCartItems();
export default cartStore;
