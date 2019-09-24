import { decorate, observable } from "mobx";
import { instance } from "./instance";

const instance = axios.create({
  baseURL: "http://192.168.100.254:80/"
});

class ProfileStore {
  profile = null;
  loading = true;

  fetchProfile = async () => {
    try {
      let res = await instance.get("profile/");

      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

let profileStore = new ProfileStore();
export default profileStore;
