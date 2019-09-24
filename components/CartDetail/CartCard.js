import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  ListItem,
  Button,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Icon
} from "native-base";

// Style

// Stores
import cartStore from "../../stores/CartStore";

// Navigation
import { withNavigation } from "react-navigation";
import { TouchableHighlight } from "react-native-gesture-handler";

class CartCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <TouchableHighlight>
              <Thumbnail bordered source={{ uri: item.image }} />
            </TouchableHighlight>
            <Text>{item.name}</Text>

            <Text note>{item.price}</Text>
            <Text>{item.quantity}</Text>
            <Button
              transparent
              onPress={() => cartStore.removeItemFromCart(item)}
            >
              <Icon name="delete" type="AntDesign" />
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(CartCard);
