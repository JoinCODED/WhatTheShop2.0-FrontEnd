import React, { Component } from "react";

import {
  Container,
  View,
  Header,
  Tab,
  Text,
  Tabs,
  ScrollableTab,
  TabHeading,
  Icon
} from "native-base";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";

import ShopStore from "../../stores/shopStore";
import ShopItem from "../ShopList/ShopItem";
import styles from "./styles";
import SearchBar from "../SearchBar";
class TabsScrollable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      category: ""
    };
  }

  setStateForTabChange = i => {
    this.setState({ type: i });
  };

  render() {
    const items = ShopStore.filteredItems;
    let category = "";
    let myList;
    const classification = this.props.navigation.getParam("List", {});
    console.log("class ", classification);
    let itemList = items.filter(item => classification === item.classification);

    if (this.state.type === 0) {
      category = "All";
    } else if (this.state.type === 1) {
      category = "TShirts";
    } else if (this.state.type === 2) {
      category = "Shoes";
    } else if (this.state.type === 3) {
      category = "Sunglasses";
    }
    if (this.state.type === 0) {
      myList = itemList;
    } else {
      myList = itemList.filter(item => category === item._type);
    }
    console.log("My List ", myList);
    let ListItems;
    if (myList) {
      ListItems = myList.map(item => {
        return <ShopItem shoplist={item} key={item.id} />;
      });
    }

    return (
      <ScrollView>
        <Tabs
          style={styles.size}
          renderTabBar={() => (
            <ScrollableTab
              style={{
                backgroundColor: "#BC8F8F"
              }}
            />
          )}
          onChangeTab={event => {
            this.setStateForTabChange(event.i);
          }}
        >
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "white",
                  tintColor: "red"
                }}
              >
                <Text>All</Text>
              </TabHeading>
            }
          />
          <Tab heading="T-Shirt" />
          <Tab heading="Shoes" />
          <Tab heading="Sunglasses" />
        </Tabs>
        <SearchBar store={ShopStore} />
        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {ListItems}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default observer(TabsScrollable);
