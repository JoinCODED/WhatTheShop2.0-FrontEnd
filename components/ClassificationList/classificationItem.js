import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Navigation
import { withNavigation } from "react-navigation";

// Style
import styles from "./styles";

class ClassificationItem extends Component {
  handlePress() {
    this.props.navigation.navigate("List", {
      List: this.props.classification
    });
  }
  render() {
    return (
      <ImageBackground
        source={{ uri: this.props.classification.backgroundImage }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          onPress={() => this.handlePress(this.props.classification)}
          style={styles.listitem}
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Text style={styles.text}>
                  {this.props.classification.name}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default withNavigation(ClassificationItem);
