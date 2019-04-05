import { decorate, observable } from "mobx";
import axios from "axios";

class PreviousOrderStore {
  previousOrders = null;
  // previousOrder = null;
  // loading = true;

  fetchAllPreviousOrders = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/prevorders/");
      let previousOrders = res.data;
      this.previousOrders = previousOrders;
      // this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(PreviousOrderStore, {
  previousOrders: observable
  // previousOrder: observable,
  // loading: observable
});

let previousOrderStore = new PreviousOrderStore();
export default previousOrderStore;
