import { decorate, observable } from "mobx";
import axios from "axios";

class SellerStore {
  sellers = null;
  seller = null;
  loading = true;

  fetchAllSellers = async () => {
    try {
      let res = await axios.get(
        "http://coffee.q8fawazo.me/api/?format=json/api/"
      );
      let sellers = res.data;
      this.sellers = sellers;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(SellerStore, {
  sellers: observable,
  seller: observable,
  loading: observable
});

let sellerStore = new SellerStore();
sellerStore.fetchAllSellers();

export default SellerStore;
