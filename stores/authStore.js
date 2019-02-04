import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
  //"http://192.168.100.96:8000/"
});

class AuthStore {
  constructor() {
    this.user = null;
    this.isAuthenticated = false;
  }

  setAuthToken(token) {
    if (token) {
      AsyncStorage.setItem("myToken", token).then(() => {
        axios.defaults.headers.common.Authorization = `JWT ${token}`;
        this.user = jwt_decode(token);
        console.log(jwt_decode(token));
        this.isAuthenticated = true;
      });
    } else {
      AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
      this.isAuthenticated = false;
    }
  }
  setCurrentUser(decodedUser) {
    this.user = decodedUser;
  }
  loginUser(userData, navigation) {
    instance
      .post("/api/login/", userData)
      .then(res => res.data)
      .then(user => {
        const decodedUser = jwt_decode(user.token);
        this.setAuthToken(user.token);
        console.log(decodedUser);
        this.setCurrentUser(decodedUser);
        navigation.replace("Profile");
      })
      .catch(err => console.error(err.response.data));
  }
  signupUser(userData, navigation) {
    instance
      .post("/api/register/", userData)
      .then(res => res.data)
      .then(user => {
        // console.log("signup");

        this.loginUser(userData, navigation);
      })
      .catch(err => console.log(err.response.data));
  }
  checkForToken() {
    console.log("ran");
    AsyncStorage.getItem("myToken").then(token => {
      if (token) {
        const user = jwt_decode(token);
        if (user.exp > Date.now() / 1000) {
          console.log("works?");
          this.setAuthToken(token);
        } else {
          console.log("Nop");
          this.setAuthToken();
        }
      } else {
        console.log("no token");
      }
    });
  }

  logoutUser(navigation) {
    this.setAuthToken();
    navigation.replace("Login");
  }
}

decorate(AuthStore, {
  user: observable,
  isAuthenticated: observable
});
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;

//   constructor() {
//     this.user = null;
//   }

//   setAuthToken(token) {
//     if (token) {
//       // Apply to every request
//       instance.defaults.headers.common.Authorization = `JWT ${token}`;
//     } else {
//       delete axios.defaults.headers.common.Authorization;
//     }
//   }

//   setCurrentUser(decoded) {
//     if (token) {
//       // Decode token to get user data
//       const decodedUser = jwt_decode(token);
//       this.user = decodedUser;
//     } else {
//       this.user = null;
//     }
//   }

//   logoutUser() {
//     AsyncStorage.removeItem("jwtToken").then(
//       () => {
//         this.setCurrentUser();
//         this.setAuthToken();
//       },
//       () => {
//         console.log("something went wrong with logging out");
//       }
//     );
//   }

//   loginUser(username, password) {
//     const userData = {
//       username: username,
//       password: password
//     };
//     instance
//       .post("/api/login/", userData)
//       .then(res => res.data)
//       .then(user => {
//         const { token } = user;
//         // Save token to localStorage
//         AsyncStorage.setItem("jwtToken", token).then(
//           () => {
//             // Set token to Auth header
//             this.setAuthToken(token);

//             // Set current user
//             this.setCurrentUser(token);
//           },
//           () => console.log("something went wrong with setting jwt token")
//         );
//       })
//       .catch(err => console.log("something went wrong logging in"));
//   }

//   checkForToken = () => {
//     AsyncStorage.getItem("jwtToken")
//       .then(token => {
//         if (token) {
//           const currentTime = Date.now() / 1000;

//           // Decode token and get user info
//           const decodedUser = jwt_decode(token);

//           // Check token expiration
//           if (decodedUser.exp >= currentTime) {
//             // Set auth token header
//             this.setAuthToken(token);
//             // Set user and isAuthenticated
//             this.setCurrentUser(decodedUser);
//           } else {
//             this.logoutUser();
//             // Redirect to login
//           }
//         }
//       })
//       .catch(err => console.error(err));
//   };
// }

// decorate(Store, {
//   user: observable
// });

// export default new Store();
