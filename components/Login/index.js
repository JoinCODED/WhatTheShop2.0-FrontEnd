import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  static navigationOptions = {
    title: "Login"
  };

  handleChangeUsername = value => {
    this.setState({ username: value });
  };
  handleChangePassword = value => {
    this.setState({ password: value });
  };

  handleLogin = () => {
    const navigation = this.props.navigation;
    authStore.loginUser(this.state, navigation);
  };

  handleSignup = () => {
    const navigation = this.props.navigation;
    authStore.registerUser(this.state, navigation);
  };

  render() {
    if (authStore.user) {
      this.props.navigation.navigate("List");
    }
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCorrect={false}
            autoCapitalize="none"
            value={this.state.username}
            onChangeText={this.handleChangeUsername}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.handleChangePassword}
          />
        </Item>
        <Button full onPress={this.handleLogin}>
          <Text>Login</Text>
        </Button>
        <Button full onPress={this.handleSignup}>
          <Text>Sign up</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
