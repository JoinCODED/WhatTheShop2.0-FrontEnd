import React, { Component } from "react";

// NativeBase Components
import {
  Card,
  Text,
  Button,
  Thumbnail,
  Picker,
  Content,
  CardItem,
  Icon
} from "native-base";

// Style
import styles from "./styles";

import { observer } from "mobx-react";

import cartStore from "../../stores/cartStore";

class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "Small",
      quantity: 1
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("Detail", {}).name,
    headerRight: (
      <Button light transparent onPress={() => navigation.navigate("Cart")}>
        <Icon type="FontAwesome" name="shopping-bag" color="white" />
      </Button>
    )
  });

  changeSize(value) {
    this.setState({
      size: value
    });
  }

  handleAdd() {
    //Key names must be same as in the backend >> backend code (anyname = the list index name ['id'])
    const item = this.props.navigation.getParam("Detail", {});
    let order = {
      ...this.state, //... >> to remove the tag (this.state) and take only the key the the value and save it inside an object
      //name: item.name,
      id: item.id
    };

    cartStore.addItemtoCart(order);
  }

  render() {
    const item = this.props.navigation.getParam("Detail", {});

    return (
      <Content>
        <Card transparent>
          <CardItem cardBody>
            <Thumbnail
              source={{ uri: item.image }}
              style={{
                width: 350,
                height: 350,
                justifyContent: "center",
                alignSelf: "center"
              }}
            />
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Availabe Sizes:</Text>
            <Picker
              note
              mode="dropdown"
              style={{ width: 150 }}
              selectedValue={this.state.size}
              onValueChange={this.changeSize.bind(this)}
            >
              <Icon name="arrow-drop-down" type="MaterialIcons" />

              <Picker.Item label="Small" value="Small" />
              <Picker.Item label="Medium" value="Medium" />
              <Picker.Item label="Large" value="Large" />
            </Picker>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Price:</Text>
            <Text style={styles.text}>{item.price}</Text>
          </CardItem>
          <CardItem
            style={{
              borderColor: "#BC8F8F",
              flexWrap: "wrap",
              width: "100%"
            }}
          >
            <Text style={styles.text}>Description:</Text>
            <Text style={styles.text}>{item.description}</Text>
          </CardItem>
        </Card>
        <Button
          full
          style={{ backgroundColor: "#BC8F8F" }}
          onPress={() => this.handleAdd()}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Add To Cart</Text>
        </Button>
      </Content>
    );
  }
}

export default observer(ShopDetail);
