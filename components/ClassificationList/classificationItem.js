import React, { Component } from "react";
import { ImageBackground, View, Image } from "react-native";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";

// Navigation
import { withNavigation } from "react-navigation";

// Style
import styles from "./styles";

class ClassificationItem extends Component {
  handlePress() {
    this.props.navigation.navigate("TabBar", {
      List: this.props.classification.id
    });
  }
  render() {
    return (
      <Card style={{ borderColor: "#BC8F8F" }}>
        <CardItem
          button
          style={styles.transparent}
          onPress={() => this.handlePress(this.props.classification)}
        >
          <ImageBackground
            source={{ uri: this.props.classification.backgroundImage }}
            style={styles.background}
          >
            <CardItem style={styles.transparent}>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={styles.text}>
                  {this.props.classification.name}
                </Text>
              </View>
            </CardItem>
          </ImageBackground>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(ClassificationItem);
{
  /* <ImageBackground
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
              <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
                <Text style={styles.text}>
                  {this.props.classification.name}
                </Text>
              </View>
            </CardItem>
          </Card> 
        </ListItem> 
      </ImageBackground> */
}
