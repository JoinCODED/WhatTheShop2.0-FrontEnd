import { decorate, observable } from "mobx";
import axios from "axios";

class PreviousOrders {
  constructor() {
    this.orders = [];
    this.loading = true;
  }

  fetchOrders() {
    axios
      .get("http://127.0.0.1:8000/api/order/list/")
      .then(res => res.data)
      .then(orders => {
        this.orders = orders;
        this.loading = false;
      })
      .catch(err => console.error(err.response));
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }
}

decorate(PreviousOrders, {
  orders: observable,
  loading: observable
});

let previousOrders = new PreviousOrders();
export default previousOrders;
