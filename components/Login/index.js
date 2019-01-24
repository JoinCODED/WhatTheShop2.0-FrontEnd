import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  static navigationOptions = {
    title: "Login"
  };

  loginUser() {
    authStore.loginUser(this.state, this.props.navigation);
  }
  signupUser() {
    authStore.signupUser(this.state, this.props.navigation);
  }
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
        <Button full success onPress={() => this.loginUser()}>
          <Text>Login</Text>
        </Button>
        <Button full warning onPress={() => this.signupUser()}>
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
