import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Store
import CartStore from "../../stores/cartStore";

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
          onPress={() =>
            CartStore.checkOutCart(alert("Thank you for shopping with us!"))
          }
        >
          <Text>Checkout</Text>
        </Button>
        <Text style={{ marginLeft: 50, color: "black" }}>
          {CartStore.total}
        </Text>
      </List>
    );
  }
}

export default observer(Cart);
