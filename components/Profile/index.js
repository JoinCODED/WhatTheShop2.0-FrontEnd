import React, { Component } from "react";

// NativeBase Components
import { Button, CardItem, Card, Content, Container } from "native-base";

import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Stores
import authStore from "../../stores/authStore";

//Components

import Login from "../Login";
import { Text, Alert } from "react-native";

// Style
import styles from "./styles";

class Profile extends Component {
  handlePress() {
    this.props.navigation.navigate("Orders");
  }
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    if (!authStore.user) return <Login />;
    return (
      <Container style={{ justifyContent: "center" }}>
        <Text
          style={{
            color: "black",
            alignSelf: "center",
            fontSize: 35,
            fontFamily: "AcademyEngravedLetPlain",
            marginBottom: 5
          }}
        >
          User Information:
        </Text>
        <Card style={{ borderColor: "#BC8F8F" }}>
          <CardItem
            style={{
              marginTop: 20,

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
              marginTop: 20,

              alignSelf: "center",

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
          />
        </Card>
        <Button
          transparent
          onPress={() => this.handlePress()}
          style={{
            alignSelf: "center",
            justifyContent: "center",
            width: "90%",
            marginTop: 20
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 30,
              fontFamily: "AcademyEngravedLetPlain",
              textDecorationLine: "underline",
              textDecorationColor: "#BC8F8F"
            }}
          >
            Previous Orders
          </Text>
        </Button>
      </Container>
    );
  }
}
export default withNavigation(observer(Profile));
