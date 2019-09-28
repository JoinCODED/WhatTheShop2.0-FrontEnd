// if (!this.props.user) return <Redirect to="/login" />;

// import { Redirect } from "react-router-dom";
import Login from "../Login";
import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { Card, CardItem, Text, Button, Header, Spinner } from "native-base";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
//
class Profile extends Component {
  componentDidMount = () => {
    if (authStore.user) {
      {
        () => profileStore.fetchProfile();
      }
    }
  };

  handlePress() {
    this.props.navigation.navigate("Orders");
  }

  render() {
    console.log(authStore.user);
    if (!authStore.user) return <Login />;
    return (
      <Card>
        <CardItem>
          <Text>
            Welcome to Beldowar {profileStore.profile.username}!{"\n"}
          </Text>
        </CardItem>
        <CardItem>
          <Button
            danger
            onPress={() => authStore.logout(this.props.navigation)}
          >
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default observer(Profile);
