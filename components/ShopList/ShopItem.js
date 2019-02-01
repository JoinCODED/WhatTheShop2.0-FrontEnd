import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Icon,
  Content
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
    console.log("Image inside the shop item", shoplist.image);
    return (
      <Content>
        <View style={styles.overlay} />
        <ListItem
          button
          onPress={() => this.handlePress()}
          style={styles.listitem}
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  source={{ uri: shoplist.image }}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{shoplist.name}</Text>
                <Text note style={styles.text} />
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </Content>
    );
  }
}

export default withNavigation(ShopItem);
