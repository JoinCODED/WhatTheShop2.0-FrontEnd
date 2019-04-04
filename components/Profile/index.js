import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  Content,
  List,
  Spinner
} from "native-base";

//Stores
import profileStore from "../../stores/profileStore";
import ProfileCard from "./ProfileCard";
import authStore from "../../stores/authStore";

class Profile extends Component {
  static navigationOptions = {
    title: "ProfileTab"
  };

  componentDidMount() {
    profileStore.GetUserProfile();
  }

  render() {
    if (!profileStore.profile) {
      return <Spinner />; // to check the path is going to this component
    }
    console.log("Profile", profileStore.profile);
    return (
      <Card>
        <CardItem>
          <Content>
            <Text>{profileStore.profile}</Text>
            <Text>{authStore.user.username}</Text>
            <Text>{authStore.user.userprofile}</Text>
          </Content>
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
export default observer(Profile);
