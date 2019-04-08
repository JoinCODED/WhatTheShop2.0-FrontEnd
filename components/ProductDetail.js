import React, { Component } from "react";
import { observer } from "mobx-react";
import { Image } from "react-native";
import defimage from "../assets/defimage.png";
import AddToCart from "./AddToCart";

// NativeBase Components
import {
  Thumbnail,
  Text,
  ListCard,
  Left,
  Body,
  Right,
  List,
  Content,
  Button,
  CardItem,
  Card,
  Icon,
  TouchableOpacity
} from "native-base";

// // Components
import CartButton from "./CartButton";

// Store
import cartStore from "../stores/cartStore";

class ProductDetail extends Component {
  state = {
    product_id: this.props.navigation.getParam("shop").id,
    // option: "",
    // quantity: 1,

    buttonState: false
  };

  static navigationOptions = {
    headerRight: <CartButton />
  };

  // static navigationOptions = {
  //   title: "detail",
  //   headerRight: <CartButton />
  // };

  // changeProduct = value => {
  //   this.setState({
  //     product_id: value
  //   });
  // };

  //   changeOption = value => {
  //     this.setState({
  //       option: value
  //     });
  //   };

  handlePress = () => {
    cartStore.addItemToCart(this.state);
    this.setState({ buttonState: true });
  };

  render() {
    const product = this.props.navigation.getParam("shop");
    console.log("product INFO", product);

    return (
      // <>
      //   <Text>{product.name}</Text>
      //   <Button light onPress={this.handlePress}>
      //     <Text>Add</Text>
      //   </Button>
      // </>
      <>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: defimage.png }} />
                <Body>
                  <Text>{product.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: product.image }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <AddToCart product={product} />
          </Card>
        </Content>
      </>
    );
  }
}

export default observer(ProductDetail);
