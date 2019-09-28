import { decorate, observable } from "mobx";
import { instance } from "./instance";

class OrderHistory {
  order = "";
  loading = true;

  fetchOrders = async () => {
    try {
      let res = await instance.get("order/");

      this.order = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(OrderHistory, {
  order: observable,
  loading: observable
});

let orderStore = new OrderHistory();
export default orderStore;
