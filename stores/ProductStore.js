import { decorate, observable } from "mobx";
import axios from "axios";

class ProductStore {
  products = null;
  product = null;
  loading = true;

  fetchAllProducts = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/list/");
      let products = res.data;
      console.log(products);
      this.products = products;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(ProductStore, {
  products: observable,
  product: observable,
  loading: observable
});

let productStore = new ProductStore();
productStore.fetchAllProducts();

export default productStore;
