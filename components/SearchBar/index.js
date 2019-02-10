// import { SearchBar } from "react-native-elements";
import React, { Component } from "react";
import { TextInput } from "react-native";
import { observer } from "mobx-react";
import { Icon, Content, Card, CardItem } from "native-base";
class SearchBar extends Component {
  render() {
    const store = this.props.store;
    return (
      <Content>
        <Card style={{ borderColor: "#BC8F8F" }}>
          <CardItem>
            <Icon name="search" type="Feather" style={{ color: "#778899" }} />
            <TextInput
              placeholder="Type Here..."
              onChangeText={search => (store.search = search)}
              style={{ fontSize: 25 }}
            />
          </CardItem>
        </Card>
      </Content>
    );
  }
}
export default observer(SearchBar);
// onChangeText={this.updateSearch}
