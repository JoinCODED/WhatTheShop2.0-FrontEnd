import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button, Card } from "native-base";
import { observer } from "mobx-react";
class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/236x/ec/28/ef/ec28ef7b452e57dfe3684409ae0e6350.jpg"
        }}
        style={styles.container}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => this.props.navigation.navigate("Classification")}
            >
              <View style={styles.textContainer}>
                <Button style={{ height: 100 }} full transparent>
                  <Text style={styles.text}>Shop Now</Text>
                </Button>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  touchable: {
    padding: 20,
    paddingBottom: 30,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center",
    marginTop: 150
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "#BC8F8F",
    opacity: 0.4
  },
  textContainer: {
    borderColor: "#FFE4E1",
    borderWidth: 8,
    // backgroundColor: "#000000",
    // opacity: 0.8,
    padding: 20,
    paddingBottom: 30,
    paddingLeft: 50,
    paddingRight: 50,
    // alignItems: "center"
    justifyContent: "center",
    marginTop: 150
  },
  text: {
    justifyContent: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "600"
  },
  top: {
    height: "80%",
    alignItems: "center",

    justifyContent: "center"
  }
});
export default observer(WelcomeScreen);
// onPress={() => this.props.navigation.replace("Classification")}
