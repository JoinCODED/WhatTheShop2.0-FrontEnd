import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";
//Store
import CartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";
class Cart extends Component {
  render() {
    const items = CartStore.items;
    let content;
    if (items) {
      content = items.map(item => <CartItem item={item} key={item.id} />);
    }

    return (
      <List>
        {content}
        <Button
          full
          danger
          onPress={() => {
            if (authStore.user) {
              CartStore.checkOutCart(alert("Thank you for shopping with us!"));
            } else {
              this.props.navigation.replace("Login");
            }
          }}
        >
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default withNavigation(observer(Cart));
