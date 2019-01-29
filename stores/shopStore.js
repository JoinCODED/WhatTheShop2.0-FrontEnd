import { decorate, observable } from "mobx";
import axios from "axios";

class ShopStore {
  constructor() {
    this.items = null;
    this.loading = true;
  }

  fetchAllItems() {
    axios
      .get("http://127.0.0.1:8000/api/list")
      .then(res => res.data)
      .then(items => {
        this.items = items;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }
}

decorate(ShopStore, {
  items: observable,
  loading: observable
});

const shopstore = new ShopStore();
shopstore.fetchAllItems();
export default shopstore;
