import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    title: "Register"
  };

  signupUser() {
    authStore.signupUser(this.state, this.props.navigation);
    console.log(this.state);
  }

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="First Name"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Last Name"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>

        <Button full warning onPress={() => this.signupUser()}>
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Register);
