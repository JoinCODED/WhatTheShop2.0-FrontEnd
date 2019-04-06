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

//Components
import ProfileCard from "./ProfileCard";

//Stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

class Profile extends Component {
  static navigationOptions = {
    title: "ProfileTab"
  };

  componentDidMount() {
    profileStore.GetProfiles();
  }

  render() {
    if (profileStore.loading) {
      return <Spinner />; // to check the path is going to this component
    }
    console.log("Profile", profileStore.profiles);

    const profileList = profileStore.profiles.map(profile => (
      <ProfileCard profile={profile} key={profile.id} />
    ));

    return (
      <>
        {profileList}
        <Card>
          <CardItem>
            {/* <Content>
            <Text>{profileStore.profile}</Text>
            <Text>{profileStore.user.username}</Text>
            <Text>{user.username}</Text>
          </Content> */}
            <Button
              danger
              onPress={() => alert("You need to implement Logout n00b...")}
            >
              <Text>Logout</Text>
            </Button>
          </CardItem>
        </Card>
      </>
    );
  }
}
export default observer(Profile);

// get user profile; no need to put an id (based on our backend)
