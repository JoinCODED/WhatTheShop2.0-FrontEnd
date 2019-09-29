import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Title,
  Body,
  Container,
  Card,
  CardItem,
  Content,
  Header
} from "native-base";
import { Image } from "react-native";

// Store
import authStore from "../../stores/authStore";
// import LogoutButton from "../Buttons/LogoutButton";
// import LoginButton from "../Buttons/LoginButton";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  };
  logo = require("../../assets/wheels-deals-logo.png");
  static navigationOptions = ({ navigation }) => ({
    title: "Sign Up"
    // headerLeft: null
    // headerRight: <CartButton />,
    // headerLeft: <LogoutButton />
    // headerLeft: <LoginButton />
  });
  render() {
    const { navigation } = this.props;
    if (authStore.user) navigation.replace("Profile");
    return (
      <Container>
        {/* <Header>Welcome to the Cool Carz App</Header> */}
        <Header />
        <Content>
          <Card>
            {/* <Image
              source={this.logo}
              style={{
                width: "30%"
              }}
            /> */}
            <Title>Welcome to the Wheels Deals App!</Title>
            <CardItem>
              <Form>
                <Text>
                  {" "}
                  Sign Up to start using this app and see some cool cars
                </Text>
                <Item>
                  <Input
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item>
                  <Input
                    placeholder="First name"
                    autoCapitalize="none"
                    onChangeText={first_name => this.setState({ first_name })}
                  />
                </Item>
                <Item>
                  <Input
                    placeholder="Last name"
                    autoCapitalize="none"
                    onChangeText={last_name => this.setState({ last_name })}
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
                  onPress={() => authStore.signup(this.state, navigation)}
                >
                  <Text>Signup</Text>
                </Button>
              </Form>
            </CardItem>

            {/* </CardItem> */}
          </Card>
          <Card>
            <CardItem>
              <Text>
                If you already have an account with Wheels Deals, sign in to
                your account
              </Text>
            </CardItem>
            <CardItem>
              <Button
                success
                full
                onPress={() => this.props.navigation.replace("Login")}
              >
                <Text>Login</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default observer(Signup);
