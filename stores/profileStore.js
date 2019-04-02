import { observable, decorate } from "mobx";
import axios from "axios";

class ProfileStore {
  profile = null;
  loading = false;

  GetUserProfile = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/profile/");
      // this.profile = res.data;
      this.profile = res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //Not sure exactly; something similar to this from Marwa
  EditUserProfile = async (profile_id, Userdata) => {
    try {
      let res = await axios.put("http://127.0.0.1:8000/api/profile/", Userdata);
      this.user = res.data;
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
