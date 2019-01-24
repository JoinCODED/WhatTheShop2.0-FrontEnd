import React, { Component } from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
class Profile extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Button
            danger
            onPress={() => authStore.logoutUser(this.props.navigation)}
          >
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
export default withNavigation(observer(Profile));
