import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handlePress = () => {
    authStore.register(this.state);
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
        <Button full onPress={this.handlePress}>
          <Text>Register</Text>
        </Button>
        <Button full onPress={() => this.props.navigation.navigate("Login")}>
          <Text>Already registered? Login here!</Text>
        </Button>
      </Form>
    );
  }
}
Register.navigationOptions = {
  title: "Register"
};

export default Register;
