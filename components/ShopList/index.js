import React, { Component } from "react";

// NativeBase Components
import { List, Content, View, Text, Container, CardItem } from "native-base";
import { ScrollView, Dimensions } from "react-native";

//import shopList from "./list";
import ShopStore from "../../stores/shopStore";

// Component
import ShopItem from "./ShopItem";
import LogIcon from "../LogIcon";
//my imports
import { observer } from "mobx-react";
import styles from "./styles";
import { Grid, Col, Row } from "react-native-easy-grid";

class ShopList extends Component {
  static navigationOptions = () => ({
    // title: navigation.getParam("shop", {}).name,
    headerRight: <LogIcon />
  });
  render() {
    const items = ShopStore.items;

    const classification = this.props.navigation.getParam("List", {});

    const itemList = items.filter(
      item => classification.id === item.classification
    );

    let ListItems;
    if (itemList) {
      ListItems = itemList.map(item => {
        return <ShopItem shoplist={item} key={item.id} />;
      });
    }

    if (items)

      ListItems = items.map(item => {
        return <ShopItem shoplist={item} key={item.id} />;
      });

    return (
      <ScrollView>
        <View style={styles.container}>{ListItems}</View>
      </ScrollView>
    );
  }
}

export default observer(ShopList);
