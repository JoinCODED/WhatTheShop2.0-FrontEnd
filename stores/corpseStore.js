import { decorate, observable } from "mobx";
import axios from "axios";

class CorpseStore {
  corpses = null;
  cropse = null;
  loading = true;

  fetchAllcorpses = async () => {
    try {
      let res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      let corpses = res.data;
      this.corpses = corpses;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CorpseStore, {
  coprses: observable,
  coprse: observable,
  loading: observable
});

let corpseStore = new CorpseStore();
corpseStore.fetchAllcorpses();

export default corpseStore;
