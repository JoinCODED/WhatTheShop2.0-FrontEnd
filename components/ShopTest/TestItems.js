import React, { Component } from "react";
import { ImageBackground, Image } from "react-native";

// NativeBase Components
import { View, Col, Card, CardItem, Body, Button, Text } from "native-base";

import { withNavigation } from "react-navigation";

class TestItem extends Component {
  handlePress() {
    this.props.navigation.navigate("Detail", {
      Detail: this.props.shoplist
    });
  }
  render() {
    const { shoplist } = this.props;
    console.log(shoplist.image);
    return (
      <Col>
        <Card transparent>
          <CardItem cardBody>
            <Button
              transparent
              style={style.button}
              onPress={() => this.handlePress(shoplist)}
            >
              <Image source={{ uri: shoplist.image }} style={style.image} />
              <View style={style.border} />
            </Button>
          </CardItem>
          <CardItem style={{ paddingTop: 0 }}>
            <Body>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  backgroundColor: "#BC8F8F",
                  opacity: 0.75
                }}
              >
                {shoplist.name}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Col>
    );
  }
}
const style = {
  leftMargin: {
    marginLeft: 7,
    marginRight: 0,
    marginBottom: 7
  },
  rightMargin: {
    marginLeft: 0,
    marginRight: 7,
    marginBottom: 7
  },
  button: { flex: 1, height: 250, paddingLeft: 4, paddingRight: 4 },
  image: { height: 250, width: null, flex: 1 },
  border: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: "rgba(253, 253, 253, 0.2)"
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#7f8c8d",
    position: "absolute",
    top: "52%"
  }
};

export default withNavigation(TestItem);
