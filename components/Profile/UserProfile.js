import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import { observer } from "mobx-react";

//Stores
import profileStore from "../../stores/profileStore";

class UserProfile extends Component {
  static navigationOptions = {
    title: "UserProfile"
  };

  componentDidMount() {
    profileStore.getUserProfile();
  }

  render() {
    const profile = profileStore.profile;
    console.log(profile);

    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={profile ? { uri: profile.profile.image } : ""}
                />
                <Body>
                  <Text>{profile ? profile.profile.bio : "yiug"}</Text>
                  <Text note>{profile ? profile.profile.dob : "yiug"}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image

                  source={profile ? { uri: profile.profile.image } : ""}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>{profile ? profile.profile.location : "yiug"}</Text>

              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default observer(UserProfile);
