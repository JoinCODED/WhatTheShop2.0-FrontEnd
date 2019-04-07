import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Card
} from "react-native";
import { observer } from "mobx-react";

// import styles from "./styles";

//Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

class SideBar extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* <Card>
          <Image
            source={{ uri: {profileStore.image} }}
            style={{ height: 200, width: 200, flex: 1 }}
          />
        </Card> */}
        <Text
          onPress={() => navigation.navigate("List")} //1
          style={styles.uglyDrawerItem}
        >
          Store
        </Text>
        <Text
          onPress={() => navigation.navigate("Profile")} //2
          style={styles.uglyDrawerItem}
        >
          Profile
        </Text>
        <Text
          onPress={() => navigation.navigate("PrevList")} //2
          style={styles.uglyDrawerItem}
        >
          PrevList
        </Text>
        {/* <Text
          onPress={() => navigation.navigate("Home")} //3
          style={styles.uglyDrawerItem}
        >
          Home
        </Text>
        <Text onPress={this.logout} style={styles.uglyDrawerItem}>
          Log Out
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E73536",
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: "#E73536",
    borderWidth: 1,
    textAlign: "center"
  }
});

export default observer(SideBar);

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <ImageBackground
//             source={require("../../assets/drawer-cover.png")}
//             style={{ flex: 1, width: 280, justifyContent: "center" }}
//           >
//             <Text style={styles.headerText}>PROFILE</Text>
//             <Text style={styles.headerText}>{authStore.username}</Text>
//           </ImageBackground>
//           {/* <Text style={{ fontSize: 22, fontWeight: "600", color: "white" }}>
//             {" "}
//             Name{" "}
//           </Text> */}
//         </View>
//         <ScrollView style={styles.scrollview}>
//           <View style={styles.menuView}>
//             <Text
//               style={styles.menuText}
//               onPress={this.navigateToScreen("Home")}
//             >
//               {" "}
//               Home{" "}
//             </Text>
//           </View>
//           <View style={styles.menuView}>
//             <Text
//               style={styles.menuText}
//               onPress={this.navigateToScreen("Profile")}
//             >
//               {" "}
//               Profile{" "}
//             </Text>
//           </View>
//         </ScrollView>
//         <View style={styles.footerContainer}>
//           <Text style={{ color: "white" }}>This is my fixed footer</Text>
//         </View>
//       </View>
//     );
//   }
// }

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
