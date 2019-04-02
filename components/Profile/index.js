import React, { Component } from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

//Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

class Profile extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Button
            danger
            onPress={() => alert("You need to implement Logout n00b...")}
          >
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
export default Profile;
