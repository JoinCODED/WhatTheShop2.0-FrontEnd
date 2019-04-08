import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [1, 2, 3]
    };
  }

  render() {
    const { listItems } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.containerColumn}
          data={listItems}
          renderItem={this.renderListItemFirstChildSmaller}
        />
        <FlatList
          style={styles.containerColumn}
          data={listItems}
          renderItem={this.renderListItemLastChildSmaller}
        />
      </View>
    );
  }

  renderListItemFirstChildSmaller = ({ item, index }) => {
    return (
      <Text style={[styles.text, { height: index === 0 ? 100 : 200 }]}>
        {item}
      </Text>
    );
  };

  renderListItemLastChildSmaller = ({ item, index }) => {
    return (
      <Text
        style={[
          styles.text,
          { height: index === this.state.listItems.length - 1 ? 100 : 200 }
        ]}
      >
        {item}
      </Text>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row"
  },
  containerColumn: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  text: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "green"
  }
});
