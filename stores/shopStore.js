import { decorate, observable } from "mobx";
import axios from "axios";

class ShopStore {
  constructor() {
    this.items = null;
    this.loading = true;
  }

  fetchAllItems() {
    axios
      .get("http://127.0.0.1:8000/api/list/")
      .then(res => res.data)
      .then(items => {
        this.items = items;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }

  fetchItemByID(itemID) {
    console.log("the item id " + { itemID });
    let item = this.items.find(item => item.id === itemID);
    console.log(item);
    if (item) {
      return item;
    } else {
      return alert("image does not exists");
    }
  }
}

decorate(ShopStore, {
  items: observable,
  loading: observable
});

const shopstore = new ShopStore();
shopstore.fetchAllItems();
export default shopstore;
