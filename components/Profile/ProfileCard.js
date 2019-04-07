import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";
import { withNavigation } from "react-navigation";
import profileStore from "../../stores/profileStore";

class ProfileCard extends Component {
  handlePress = () => {
    this.props.navigation.navigate("Individual Profile", {
      profile: this.props.profile //CHANGE!!!
    });
  };

  render() {
    const { profile } = this.props;
    console.log("I AM ONE INDIVIDUAL PROFILE", profile);

    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: profileStore.image }} />
              </Left>
              <Body>
                <Text>{profile.user.username}</Text>
                <Text note numberOfLines={1}>
                  {profile.bio}
                </Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(ProfileCard);
