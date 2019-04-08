import React, { Component } from "react";

// import { Image } from "react-native";

import {
  Card,
  CardItem,
  Body,
  Thumbnail,
  Text,
  Left,
  Icon,
  Button
} from "native-base";
import { withNavigation } from "react-navigation";

class PrevOrderCard extends Component {
  handlePress = () => {
    this.props.navigation.navigate("PrevDetail", {
      prevOrder: this.props.order
    });
  };
  render() {
    const { order } = this.props;
    // let allImages = order.items.map(item => (
    //   <Thumbnail key={item.id} source={{ uri: item.product.image }} />
    // ));
    console.log("=================");
    // console.log(order.detail);
    return (
      <Card>
        <CardItem>
          {/* <Left>{allImages}</Left> */}
          <Body>
            <Text>{order.added_date}</Text>
            <Button onPress={this.handlePress}>
              <Text> press </Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(PrevOrderCard);
