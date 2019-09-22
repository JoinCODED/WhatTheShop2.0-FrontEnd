import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class BanakStore {
  banaks = [];
  loading = true;
  query = "";

  fetchBanaks = async () => {
    try {
      const res = await instance.get("/item/");
      const banaks = res.data;
      // console.log("BANAKAT", banaks);
      this.banaks = banaks;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  };
}

decorate(BanakStore, {
  banaks: observable,
  loading: observable,
  query: observable
});

const banakStore = new BanakStore();
banakStore.fetchBanaks();

export default banakStore;
