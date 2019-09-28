import React, { Component } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

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

            <Text note>{item.price * item.quantity} KWD</Text>
            <Text>{item.quantity}</Text>
            <Button
              style={styles.delete}
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

const styles = StyleSheet.create({
  delete: {
    position: "absolute",
    right: 5
  }
});
