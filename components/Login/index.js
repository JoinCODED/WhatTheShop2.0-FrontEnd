import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../Stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    if (authStore.user) this.props.navigation.navigate("StackNav");
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
        <Button
          full
          onPress={() => alert("You need to implement Login noob...")}
        >
          <Text>Login</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
