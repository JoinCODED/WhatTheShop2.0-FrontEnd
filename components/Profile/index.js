import React from "react";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

// Styles
import { StyleSheet } from "react-native";

const Profile = ({ navigation }) => {
  const getView = () => {
    if (authStore.user) {
      return (
        <Card>
          <CardItem>
            <Button
              style={styles.Login}
              danger
              onPress={() => authStore.logout()}
            >
              <Text>Logout</Text>
            </Button>
          </CardItem>
        </Card>
      );
    }
    return (
      <Card>
        <CardItem>
          <Button
            style={styles.Login}
            danger
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text>Login</Text>
          </Button>
        </CardItem>

        {/* <CardItem>
          <Button
            style={styles.Signup}
            danger
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text>Sign Up</Text>
          </Button>
        </CardItem> */}
      </Card>
    );
  };

  return getView();
};
export default observer(Profile);

const styles = StyleSheet.create({
  Login: {
    top: 10,
    right: 10,
    width: 95
  },
  Signup: {
    position: "absolute",
    right: 10,
    top: -47,
    width: 95
  }
});
