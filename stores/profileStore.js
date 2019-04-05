import { observable, decorate } from "mobx";
import axios from "axios";

class ProfileStore {
  profile = null;

  GetUserProfile = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/profile/");
      // let res = await axios.get(
      //   `http://127.0.0.1:8000/api/profile/${userID.user_id}/`
      // );
      // this.profile = res.data;
      this.profile = res.data;
      console.log(this.profile);
    } catch (err) {
      console.log(err);
    }
  };

  // retraiveUserProfile = async userID => {
  //   try {
  //     console.log("BEFOR", userID.pro);
  //     const res = await axios.get(
  //       `http://127.0.0.1:8000/api/user/${userID.user_id}/data/`
  //     );
  //     console.log("AFTER");
  //     const user = res.data;
  //     this.user = user;
  //     // console.log("this is the user", this.user);
  //   } catch (error) {
  //     console.log("error setting profile user", error);
  //   }
  // };

  //Not sure exactly; something similar to this from Marwa
  // EditUserProfile = async (profile_id, Userdata) => {
  //   try {
  //     let res = await axios.put("http://127.0.0.1:8000/api/profile/", Userdata);
  //     this.user = res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
}

decorate(ProfileStore, {
  profile: observable
});

const profileStore = new ProfileStore();

export default profileStore;