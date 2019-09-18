import React from "react";
import authStore from "../../stores/authStore";
// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

const Profile = () => {
  return (
    <Card>
      <CardItem>
        <Button
          danger
          onPress={() => {
            authStore.login;
          }}
        >
          <Text>Login</Text>
        </Button>
      </CardItem>

      <CardItem>
        <Button
          danger
          onPress={() => {
            authStore.logout;
          }}
        >
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default Profile;
