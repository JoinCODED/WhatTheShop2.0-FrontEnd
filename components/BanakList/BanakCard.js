import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style

// Navigation
import { withNavigation } from "react-navigation";
import { TouchableHighlight } from "react-native-gesture-handler";

class BanakCard extends Component {
  handlePress = () => {
    this.props.navigation.navigate("BanakDetail", {
      banakID: this.props.banak.id
    });
  };

  render() {
    const { banak } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <TouchableHighlight onPress={this.handlePress}>
              <Thumbnail bordered source={{ uri: banak.image }} />
            </TouchableHighlight>
            <Text>{banak.name}</Text>
            <Text note>{banak.price}</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(BanakCard);
