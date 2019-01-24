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
  Content
} from "native-base";

// Style
import styles from "./styles";

import { observer } from "mobx-react";

class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "TShirt-1",
      size: "Small"
    };
  }

  changeSize(value) {
    this.setState({
      size: value
    });
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
                <Picker.Item label="Larg" value="Larg" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default observer(ShopDetail);
