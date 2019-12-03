import { decorate, observable } from "mobx";
import { instance } from "./instance";

class DinoStore {
  dinosaurs = [];
  loading = true;

  fetchAllDinosaurs = async () => {
    try {
      const res = await instance.get("dinosaurs/");
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
