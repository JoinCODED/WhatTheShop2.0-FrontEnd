import React, { Component } from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

import CartButton from "../Buttons/CartButton";

componentDidMount = () => {
  if (authStore.user) orderStore.fetchAllOrders();
  else {
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

  return (
    <Card>
      <CardItem>
        <Left>
          <Picker
            note
            mode="dropdown"
            style={styles.picker}
            onValueChange={this.changeDrink}
            selectedValue={this.state.drink}
            placeholder="Choose Drink"
          >
            <Picker.Item label="Cappuccino" value="Cappuccino" />
          </Picker>
        </Left>
        <Button
          danger
          onPress={() => alert("You need to implement Logout ...")}
        >
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

Profile.navigationOptions = {
  title: "Profile",
  headerRight: <CartButton />,
  headerLeft: <Profile />
};
export default Profile;
