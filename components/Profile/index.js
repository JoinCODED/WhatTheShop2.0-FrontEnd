import React, { Component } from "react";
import { Alert } from "react-native";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Left,
  Picker,
  Text,
  Spinner
} from "native-base";

// Stores
import authStore from "../../stores/authStore";
import orderStore from "../../stores/orderStore";
import CartButton from "../Buttons/CartButton";
import profileStore from "../../stores/profileStore";

//Styles
import styles from "./styles";
import LogoutButton from "../Buttons/LogoutButton";

class Profile extends Component {
  componentDidMount = async () => {
    if (authStore.user) {
      await profileStore.getUserProfile();
      console.log(profileStore.user);
      await orderStore.fetchAllOrders();
      console.log(profileStore.orders);
    } else {
      Alert.alert(
        "You're not logged in!",
        "Log in to view your profile!",
        [
          {
            text: "Nevermind",
            style: "cancel"
          },
          {
            text: "Log in",
            onPress: () => this.props.navigation.navigate("Login")
          }
        ],
        { cancelable: true }
      );
    }
  };
  render() {
    if (profileStore.loading) return <Spinner />;

    return (
      <Card>
        <CardItem>
          <Left>
            <Text>{profileStore.user.name}</Text>
            <Text>{profileStore.user.email}</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerRight: <CartButton />,
  headerLeft: <LogoutButton />
};
export default observer(Profile);
