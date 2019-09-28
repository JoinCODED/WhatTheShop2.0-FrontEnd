import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CarStore {
  cars = null;
  loading = true;

  fetchAllCars = async () => {
    try {
      let res = await instance.get("products/list/");
      this.cars = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err.response.data);
    }
  };
  getCarById = id => {
    return this.cars.find(car => car.id == id);
  };
  removeCar = deletedCar => {
    this.cars = this.cars.filter(car => car.id !== deletedCar.id);
  };
}
decorate(CarStore, {
  cars: observable,
  loading: observable
});

let carStore = new CarStore();
if (!carStore.cars) {
  carStore.fetchAllCars();
}

export default carStore;
