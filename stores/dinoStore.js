import { decorate, observable } from "mobx";
import { instance } from "./instance";
import axios from "axios";
class DinoStore {
  dinosaurs = [];
  loading = true;

  fetchAllDinosaurs = async () => {
    try {
      console.log("res");
      const res = await instance.get("list/");
      console.log(res);
      const dinosaurs = res.data;
      this.dinosaurs = dinosaurs;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(DinoStore, {
  dinosaurs: observable,
  loading: observable
});

const dinoStore = new DinoStore();
dinoStore.fetchAllDinosaurs();

export default dinoStore;
