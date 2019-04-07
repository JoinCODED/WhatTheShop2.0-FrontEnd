import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Screen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: "Screen One",
    drawerIcon: () => (
      <Image
        source={{
          uri: `https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjzz--a27ThAhWLDxQKHb-NBeAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw2jfEosmQj4WQ3WrvRSkATf&ust=1554408006312066`
        }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
