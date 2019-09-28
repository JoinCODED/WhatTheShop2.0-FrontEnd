import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
// import { Form, Item, Input, Button, Text } from "native-base";
import { Item, Input, Button, Text, Icon, Container, Card } from "native-base";

// Store
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class Register extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  };

  signupUser() {
    authStore.signup(this.state, this.props.navigation);
    console.log(this.state);
  }

  render() {
    return (
      // <Form>
      //   <Item>
      //     <Input
      //       placeholder="Username"
      //       autoCapitalize="none"
      //       onChangeText={username => this.setState({ username })}
      //     />
      //   </Item>
      //   <Item>
      //     <Input
      //       placeholder="First Name"
      //       autoCapitalize="none"
      //       onChangeText={first_name => this.setState({ first_name })}
      //     />
      //   </Item>
      //   <Item>
      //     <Input
      //       placeholder="Last Name"
      //       autoCapitalize="none"
      //       onChangeText={last_name => this.setState({ last_name })}
      //     />
      //   </Item>
      //   <Item last>
      //     <Input
      //       placeholder="Password"
      //       autoCapitalize="none"
      //       secureTextEntry={true}
      //       onChangeText={password => this.setState({ password })}
      //     />
      //   </Item>

      //   <Button
      //     full
      //     onPress={() => authStore.signup(this.state, this.props.navigation)}
      //   >
      //     <Text>Register</Text>
      //   </Button>
      // </Form>
      <Container style={{ justifyContent: "center" }}>
        <Card style={{ borderColor: "#BC8F8F" }}>
          <Text
            style={{
              marginTop: 20,
              alignSelf: "center",
              fontSize: 30,
              fontFamily: "AcademyEngravedLetPlain"
            }}
          >
            SIGN UP
          </Text>
          <Item>
            <Icon active name="ios-person-add" style={{ color: "#687373" }} />
            <Input
              placeholder="First Name"
              autoCapitalize="none"
              onChangeText={first_name => this.setState({ first_name })}
            />
          </Item>
          <Item>
            <Icon active name="ios-person-add" style={{ color: "#687373" }} />
            <Input
              placeholder="Last Name"
              autoCapitalize="none"
              onChangeText={last_name => this.setState({ last_name })}
            />
          </Item>
          <Item>
            <Icon active name="ios-person" style={{ color: "#687373" }} />
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>

          <Item>
            <Icon active name="ios-lock" style={{ color: "#687373" }} />
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          <Button
            full
            style={{
              backgroundColor: "#BC8F8F",
              fontWeight: "bold",
              marginTop: 10
            }}
            onPress={() => this.signupUser()}
          >
            <Text style={{ fontSize: 20 }}>Register</Text>
          </Button>
        </Card>
      </Container>
    );
  }
}
export default observer(Register);
