import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";
import { NavigationEvents } from "react-navigation";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          full
          onPress={() => {
            navigation.navigate("BanakList"); // added but dont know how to add navigation to this file.
          }}
        >
          <Text>Login</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
