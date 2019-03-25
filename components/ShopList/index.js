import React, { Component } from "react";

// NativeBase Components
import { View } from "native-base";
import { ScrollView } from "react-native";

//import shopList from "./list";
import ShopStore from "../../stores/shopStore";

// Component
import ShopItem from "./ShopItem";
import LogIcon from "../LogIcon";
import SearchBar from "../SearchBar";
//my imports
import { observer } from "mobx-react";
import styles from "./styles";

class ShopList extends Component {
  static navigationOptions = () => ({
    // title: navigation.getParam("shop", {}).name,
    headerRight: <LogIcon />,

    title: "Items List",
    headerRight: (
      <Button light transparent onPress={() => navigation.navigate("Cart")}>
        <Icon type="FontAwesome" name="shopping-bag" color="white" />
      </Button>
    )
  });

  render() {
    const items = ShopStore.filteredItems;

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

    return (
      <ScrollView>
        <SearchBar store={ShopStore} />
        <View style={styles.container}>{ListItems}</View>
      </ScrollView>
    );
  }
}

export default observer(ShopList);
