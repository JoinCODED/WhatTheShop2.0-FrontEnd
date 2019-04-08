import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../stores/authStore";

class LogOut extends Component {
  handleLogout = () => {
    const navigation = this.props.navigation;
    authStore.logout(navigation);
    alert("LOGGED OUT");
  };

  render() {
    return (
      <>
        <Text>Hello World </Text>
        <Text>Hello World </Text>
        <Text>Hello World </Text>
        <Text>Hello World </Text>
        <Button onPress={this.handleLogout}>
          <Text>Logout</Text>
        </Button>
      </>
    );
  }
}
export default observer(LogOut);
