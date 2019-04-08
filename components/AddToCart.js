import React, { Component } from "react";
import { observer } from "mobx-react";
import { Image } from "react-native";
import defimage from "../assets/defimage.png";

// NativeBase Components
import {
  Thumbnail,
  Text,
  ListCard,
  Left,
  Body,
  Right,
  List,
  Content,
  Button,
  CardItem,
  Card,
  Icon,
  TouchableOpacity
} from "native-base";

// // Components
import CartButton from "./CartButton";

// Store
import cartStore from "../stores/cartStore";

class AddToCart extends Component {
  state = {
    product_id: this.props.product.id,
    quantity: 1,
    buttonState: this.props.product.available
  };

  handlePress = () => {
    cartStore.addItemToCart(this.state);
    let newState = this.state.buttonState;
    this.setState({ buttonState: !newState });
  };

  render() {
    const { product } = this.props;
    return (
      <CardItem>
        {product.available ? (
          <Button onPress={this.handlePress}>
            <Text>
              <Icon name="plussquareo" type="AntDesign" />
              HELLOO
            </Text>
          </Button>
        ) : (
          <Text>ITEM NOT AVAILABLE</Text>
        )}
      </CardItem>
    );
  }
}

export default observer(AddToCart);
