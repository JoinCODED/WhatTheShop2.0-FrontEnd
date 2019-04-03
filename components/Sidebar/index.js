import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground
} from "react-native";
import styles from "./styles";
import authStore from "../../stores/authStore";

class SideBar extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require("../../assets/drawer-cover.png")}
            style={{ flex: 1, width: 280, justifyContent: "center" }}
          >
            <Text style={styles.headerText}>PROFILE</Text>
            <Text style={styles.headerText}>{authStore.username}</Text>
          </ImageBackground>
          {/* <Text style={{ fontSize: 22, fontWeight: "600", color: "white" }}>
            {" "}
            Name{" "}
          </Text> */}
        </View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.menuView}>
            <Text
              style={styles.menuText}
              onPress={this.navigateToScreen("Home")}
            >
              {" "}
              Home{" "}
            </Text>
          </View>
          <View style={styles.menuView}>
            <Text
              style={styles.menuText}
              onPress={this.navigateToScreen("Profile")}
            >
              {" "}
              Profile{" "}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={{ color: "white" }}>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}
export default SideBar;

// import React, {
//   Component,
//   PropTypes,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from "react-native";

// export default class ControlPanel extends Component {
//   static contextTypes = {
//     drawer: PropTypes.object.isRequired
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <Text>MAIN</Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={this.context.drawer.open}
//         >
//           <Text>Open Drawer</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#7699dd",
//     padding: 20,
//     flex: 1
//   },
//   button: {
//     backgroundColor: "white",
//     borderWidth: 1,
//     borderColor: "black",
//     padding: 10
//   }
// });
