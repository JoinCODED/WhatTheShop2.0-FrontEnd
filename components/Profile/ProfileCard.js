import React, { Component } from "react";
import { Card, CardItem, Thumbnail, Text, Left, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class ProfileCard extends Component {
  handlePress = () => {
    this.props.navigation.navigate("Individual Profile", {
      profile: this.props.profile //CHANGE!!!
    });
  };

  render() {
    const { profile } = this.props;

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: profile.image }} />
            <Text>{profile.is_seller}</Text>
            <Text>{profile.bio}</Text>

            <Icon
              type="Ionicons"
              name="ios-more"
              style={{ color: "Black", fontSize: 30, marginLeft: 40 }}
              onPress={this.handlePress}
            />
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(ProfileCard);
