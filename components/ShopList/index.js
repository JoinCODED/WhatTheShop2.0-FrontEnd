import React, { Component } from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Data
//import shopList from "./list";
import ShopStore from "../../stores/shopStore";

// Component
import ShopItem from "./ShopItem";

//my imports
import { observer } from "mobx-react";

class ShopList extends Component {
  render() {
    const items = ShopStore.items;
    let ListItems;
    if (items)
      ListItems = items.map(item => <ShopItem shoplist={item} key={item.id} />);
    //navigation={this.props.navigation}
    if (ListItems) {
      return (
        <Content>
          <List>{ListItems}</List>
        </Content>
      );
    }
  }
}

export default observer(ShopList);
