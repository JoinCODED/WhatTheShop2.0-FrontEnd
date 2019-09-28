import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import cartStore from "../../stores/CartStore";

// Component
import CartCard from "./CartCard";

// import  from "";

class CartDetail extends Component {
  render() {
    if (cartStore.loading) return <Spinner />;
    const items = cartStore.items;
    let cartItems = items.map(pointeditem => (
      <CartCard item={pointeditem} key={pointeditem.id} />
    ));
    return (
      <Content>
        <List>{cartItems}</List>
      </Content>
    );
  }
}

export default observer(CartDetail);
