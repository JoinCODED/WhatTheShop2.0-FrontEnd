import { decorate, observable } from "mobx";
import axios from "axios";

class ClassificationStore {
  constructor() {
    this.classification = [];
  }

  fetchClassification() {
    axios
      .get("http://127.0.0.1:8000/api/classification/")
      .then(res => res.data)
      .then(items => {
        this.classification = items;
      })
      .catch(err => console.error(err));
  }
}

decorate(ClassificationStore, { classification: observable });

const classificationStore = new ClassificationStore();
classificationStore.fetchClassification();

export default classificationStore;
