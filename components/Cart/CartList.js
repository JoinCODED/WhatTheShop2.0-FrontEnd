import React, { Component } from "react";
import { observer } from "mobx-react";
import { List, Button, Icon, Text, Card, CardItem } from "native-base";

import CartStore from "../../stores/cartStore";
import CartItem from "./CartItem";

class CartList extends Component {
  render() {
    let content = CartStore.items.map(item => (
      <CartItem item={item} key={item.id} />
    ));
    return (
      <List>
        {content}
        <Card
          style={{
            borderColor: "#BC8F8F",
            flexWrap: "wrap",
            alignItems: "flex-start",
            flexDirection: "row"
          }}
        >
          <CardItem
            style={{
              width: "100%",
              flexDirection: "column",
              borderBottomColor: "#BC8F8F",
              borderBottomWidth: 1
            }}
          >
            <Text style={{ color: "#778899", fontSize: 20 }}>
              Your Total: {CartStore.total} KD
            </Text>
          </CardItem>
        </Card>
        <Button
          full
          style={{ backgroundColor: "#BC8F8F" }}
          onPress={() => {
            if (authStore.user) {
              CartStore.checkOutCart(alert("Thank you for shopping with us!"));
            } else {
              this.props.navigation.replace("Login");
            }
          }}
        >
          <Icon
            active
            name="money"
            type="FontAwesome"
            style={{ color: "white" }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default observer(CartList);
