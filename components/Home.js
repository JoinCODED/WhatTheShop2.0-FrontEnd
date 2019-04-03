import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
class Home extends React.Component {
  static navigationOptions = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#81ecec",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Hello!!! This is Home screen</Text>
      </View>
    );
  }
}

class Profile extends React.Component {
  static navigationOptions = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#81ecec",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Hi!!! This is a Profile screen</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png"
          }}
        />
      </View>
    );
  }
}
export default Home;
