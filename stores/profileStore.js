import { decorate, observable } from "mobx";
import { instance } from "./instance";

class ProfileStore {
  profile = "";
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
