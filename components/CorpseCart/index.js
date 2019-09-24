import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../../stores/cartStore";

const CorpseCart = () => {
  const { items } = cartStore;
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      {cartItems}
      <Button full danger onPress={cartStore.checkoutCart}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

export default observer(CorpseCart);
