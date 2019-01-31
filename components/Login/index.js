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

  render() {
    // if (authStore.user) return this.props.navigation.replace("Profile");
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
        <Button
          full
          light
          transparent
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text
            style={{
              color: "black",
              fontSize: 20
            }}
          >
            New Account
          </Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
