import { observable, decorate } from "mobx";
import axios from "axios";
import authStore from "./authStore";

class ProfileStore {
  profile = null;

  profileUser = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/profile/");
      this.profile = res.data;
    } catch (err) {
      console.log(err);
    }
  };
}

decorate(ProfileStore, {
  profile: observable
});

const profileStore = new ProfileStore();

export default profileStore;
