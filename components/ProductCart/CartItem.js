import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";

class CartItem extends Component {
  deletePress = () => {
    cartStore.removeItemFromCart(this.props.item);
  };

  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}>
            {" "}
            {item.product.name}{" "}
          </Text>
          {/* <Text note style={{ marginLeft: 16 }}>
            {item.option}
          </Text> */}
        </Left>
        {/* <Body>
          <Text style={{ color: "black" }}>{item.quantity}</Text>
        </Body> */}
        <Right>
          <Button transparent onPress={this.deletePress}>
            <Icon name="trash" style={{ color: "black", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default observer(CartItem);
