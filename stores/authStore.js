import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";

import { instance } from "./instance";


const instance = axios.create({
  baseURL: "http://192.168.100.148:80/"
});


class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("api/login/", userData);
      const user = res.data;
      await this.setUser(user.access);
      navigation.navigate("Profile");
    } catch (err) {
      console.log("something went wrong logging in", err);
    }
  };

  register = async (userData, navigation) => {
    try {
      await instance.post("api/register/", userData);
      this.login(userData, navigation);
    } catch (err) {
      console.error(err);
    }
  };

  logout = () => {
    this.setUser();
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
  login: observable,
  signup: observable,
  logout: observable,
  checkForToken: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
