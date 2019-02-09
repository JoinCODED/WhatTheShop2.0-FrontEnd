import React, { Component } from "react";
import { ImageBackground, View, FlatList, GridView } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  CardContent,
  Thumbnail,
  Text,
  Left,
  Icon,
  Content,
  Container,
  ListView
} from "native-base";

// Style
import styles from "./styles";

import { withNavigation } from "react-navigation";

class ShopItem extends Component {
  handlePress() {
    this.props.navigation.navigate("Detail", {
      Detail: this.props.shoplist
    });
  }
  render() {
    const { shoplist } = this.props;
    console.log("Shoplist", shoplist);
    return (
      <Card transparent>
        <CardItem button onPress={() => this.handlePress()}>
          <Thumbnail style={styles.item} source={{ uri: shoplist.image }} />
        </CardItem>
        <CardItem>
          <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
            <View style={styles.line} />
            <Text style={styles.name}> {shoplist.name} </Text>
            <View style={styles.line} />
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(ShopItem);
