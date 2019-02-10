import { decorate, observable, computed } from "mobx";
import axios from "axios";

class ShopStore {
  constructor() {
    this.items = [];
    this.fetchedItem = null;
    this.loading = true;
    this.search = "";
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
    if (item) {
      this.loading = false;
      this.fetchedItem = item;
    } else {
      return alert("Item does not exists");
    }
  }

  get filteredItems() {
    return this.items.filter(item =>
      `${item.name}`.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}

decorate(ShopStore, {
  items: observable,
  loading: observable,
  search: observable,
  fetchedItem: observable,
  filteredItems: computed
});

const shopstore = new ShopStore();
shopstore.fetchAllItems();
export default shopstore;
