import React from "react";
import authStore from "../../stores/authStore";
// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

const Profile = ({ navigation }) => {
  return (
    <Card>
      <CardItem>
        <Button
          danger
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text>Login</Text>
        </Button>
      </CardItem>

      <CardItem>
        <Button
          danger
          onPress={() => {
            navigation.navigate("Logout");
          }}
        >
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default Profile;
