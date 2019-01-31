import React, { Component } from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Data
//import shopList from "./list";
import ShopStore from "../../stores/shopStore";

// Component
import ShopItem from "./ShopItem";
import LogIcon from "../LogIcon";
//my imports
import { observer } from "mobx-react";

class ShopList extends Component {
  static navigationOptions = () => ({
    // title: navigation.getParam("shop", {}).name,
    headerRight: <LogIcon />
  });
  render() {
    const items = ShopStore.items;
    let ListItems;
    if (items)

      ListItems = items.map(item => {
        return <ShopItem shoplist={item} key={item.id} />;
      });

    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default observer(ShopList);
