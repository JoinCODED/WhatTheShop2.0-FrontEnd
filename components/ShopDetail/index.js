import React, { Component } from "react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
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
        <Text>
          <Icon type="FontAwesome" name="shopping-bag" />
        </Text>
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
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>{item.name + "\n"}</Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: item.image }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.size}
                onValueChange={this.changeSize.bind(this)}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger onPress={() => this.handleAdd()}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default observer(ShopDetail);
