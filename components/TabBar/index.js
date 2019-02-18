import React, { Component } from "react";

import {
  View,
  Tab,
  Text,
  Tabs,
  ScrollableTab,
  TabHeading,
  Button,
  Icon
} from "native-base";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import ShopStore from "../../stores/shopStore";
import ShopItem from "../ShopList/ShopItem";
import styles from "./styles";
import SearchBar from "../SearchBar";
class TabsScrollable extends Component {
  static navigationOptions = ({ navigation }) => ({
    // title: navigation.getParam("shop", {}).name,
    // headerRight: <LogIcon />,

    title: "Items List",
    headerRight: (
      <Button light transparent onPress={() => navigation.navigate("Cart")}>
        <Icon type="FontAwesome" name="shopping-bag" color="white" />
      </Button>
    )
  });
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
              activeTextStyle={{ color: "#0dc49d" }}
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
                  backgroundColor: "white"
                }}
              >
                <Text styel={{ tabBarUnderlineStyle: { color: "red" } }}>
                  All
                </Text>
              </TabHeading>
            }
          />
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "white"
                }}
              >
                <Text>T-Shirt</Text>
              </TabHeading>
            }
          />
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "white"
                }}
              >
                <Text>Shoes</Text>
              </TabHeading>
            }
          />
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "white",
                  labelColor: "black"
                }}
              >
                <Text>Sunglasses</Text>
              </TabHeading>
            }
          />
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
