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
                <Thumbnail square source={{ uri: profile.image }} />
              </Left>
              <Body>
                <Text>{profile.user}</Text>
                <Text note numberOfLines={1}>
                  {profile.bio}
                </Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => this.props.navigate("UserProfile")}
                >
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(ProfileCard);
