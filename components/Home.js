import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground
} from "react-native";
import { Header } from "native-base";

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
        {/* <ImageBackground
          source={require("../assets/home.gif")}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        /> */}
        <Header>
          <Text onPress={() => navigation.navigate("ProductList")}>
            OneOfOne
          </Text>
        </Header>
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
