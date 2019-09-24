import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import guitarStore from "../../stores/guitarStore";

// Component
import GuitarItem from "./GuitarItem";
import CartButton from "../Cart/CartButton";

class GuitarList extends Component {
  render() {
    if (guitarStore.loading) return <Spinner />;
    let guitarList = guitarStore.guitars.map(guitar => (
      <GuitarItem guitar={guitar} key={guitar.id} />
    ));

    return (
      <Content>
        <List>{guitarList}</List>
      </Content>
    );
  }
}
GuitarList.navigationOptions = {
  title: "Shop",
  headerRight: <CartButton />
};

export default observer(GuitarList);
