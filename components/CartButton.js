import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";

class CartButton extends Component {
  render() {
    return (
      <Text>
        {cartStore.quantity > 0 && cartStore.quantity}
        <Icon
          type="MaterialCommunityIcons"
          name="cart-outline"
          style={{ color: "Black", fontSize: 30 }}
          onPress={() => this.props.navigation.navigate("CartPage")}
        />
      </Text>
    );
  }
}

export default withNavigation(observer(CartButton));
