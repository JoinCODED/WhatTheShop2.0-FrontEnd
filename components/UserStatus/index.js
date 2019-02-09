import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
//Components
import Logout from "../Logout";
import Login from "../LogIcon";
class userStatus extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return authStore.user ? <Logout /> : <Login />;
  }
}
export default new observer(userStatus);
