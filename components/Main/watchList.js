import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  Input,
  Form,
  Item
} from "native-base";
import WatchCard from "./watchCard";
import watchStore from "../../stores/watchStore";
import { observer } from "mobx-react";

class WatchList extends Component {
  state = {
    watchs: null
  };
  handleSearch = query => {
    console.log("query", query);
    watchStore.query = query;
  };

  render() {
    let watchs = watchStore.filteredItems;
    const watchCard = watchs.map(watch => {
      return (
        <WatchCard
          key={watch.id}
          watch={watch}
          navigation={this.props.navigation}
        />
      );
    });

    if (watchStore.loading) {
      return (
        <Container style={styles.container}>
          <Content>
            <Text>loading</Text>
          </Content>
        </Container>
      );
    }

    return (
      <Container style={styles.container}>
        <Content>
          <Input
            style={styles.textHigligted}
            placeholder="Search..."
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.handleSearch}
          />
          {watchCard}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#422D56"
  },
  card: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#116466",
    backgroundColor: "#000000"
  },
  textHigligted: { color: "white" }
});

export default observer(WatchList);
