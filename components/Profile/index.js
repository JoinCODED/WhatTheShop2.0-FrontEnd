import React, { Component } from "react";

// NativeBase Components
import { Button, CardItem, Card, Content, Container } from "native-base";

import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Stores
import authStore from "../../stores/authStore";

//Components
import Logout from "../Logout";

import { Text, Alert } from "react-native";

// Style
import styles from "./styles";

class Profile extends Component {
  static navigationOptions = () => ({
    headerRight: <Logout />
  });
  handlePress() {
    this.props.navigation.navigate("Orders");
  }
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    if (!authStore.user) return this.props.navigation.navigate("Login");
    return (
      <Container style={{ justifyContent: "center" }}>
        <Card style={{ borderColor: "#BC8F8F" }}>
          <Text
            style={{
              color: "black",
              alignSelf: "center",
              fontSize: 35,
              fontFamily: "AcademyEngravedLetPlain",
              marginTop: 20,
              marginBottom: 10
            }}
          >
            User Information:
          </Text>
          <CardItem
            style={{
              marginTop: 10,

              alignSelf: "center",
              borderBottomColor: "#BC8F8F",
              borderBottomWidth: 1,
              width: "90%"
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 25,
                fontFamily: "AcademyEngravedLetPlain"
              }}
            >
              Username:{"\n"}
              {authStore.user.username}
            </Text>
          </CardItem>
          <CardItem
            style={{
              marginTop: 30,

              alignSelf: "center",
              borderBottomColor: "#BC8F8F",
              borderBottomWidth: 1,
              width: "90%"
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 25,
                fontFamily: "AcademyEngravedLetPlain"
              }}
            >
              Email: {"\n"}
              {authStore.user.email}
            </Text>
          </CardItem>
          <CardItem
            style={{
              marginTop: 30,
              alignSelf: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <Button
              transparent
              onPress={() => this.handlePress()}
              style={{
                alignSelf: "center",
                justifyContent: "center",
                width: "150%"
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 25,
                  fontFamily: "AcademyEngravedLetPlain",
                  textDecorationLine: "underline",
                  textDecorationColor: "#BC8F8F"
                }}
              >
                Previous Orders
              </Text>
            </Button>
          </CardItem>
        </Card>
        <Button
          onPress={() => authStore.logoutUser(this.props.navigation)}
          style={{
            bottom: -30,
            backgroundColor: "#BC8F8F",
            alignSelf: "center",
            justifyContent: "center",
            width: "90%"
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Logout
          </Text>
        </Button>
      </Container>
    );
  }
}
export default withNavigation(observer(Profile));
