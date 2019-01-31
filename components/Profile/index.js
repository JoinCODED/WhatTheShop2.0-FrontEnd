// import React, { Component } from "react";

// NativeBase Components
import { Button } from "native-base";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Components
import LogIcon from "../LogIcon";

import React, { Component } from "react";
import { Text, View, Image, Alert, ScrollView } from "react-native";

// Style
import styles from "./styles";
class Profile extends Component {
  constructor(props) {
    super(props);
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  static navigationOptions = () => ({
    headerRight: <LogIcon />
  });

  render() {
    if (!authStore.user) return this.props.navigation.navigate("Login");
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.box}>
            {/* <Image
              style={styles.profileImage}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
              }}
            /> */}
            <Text style={styles.name}>{authStore.user.username} </Text>
          </View>
          {/* <View style={styles.box}>
            <Text style={styles.name}>{authStore.userInfo.first_name}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.name}>{authStore.userInfo.last_name}</Text>
          </View> */}
          <View style={styles.box}>
            <Text style={styles.name}>{authStore.user.email}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.name}>Previous Orders </Text>
          </View>
        </View>
        <Button
          danger
          onPress={() => authStore.logoutUser(this.props.navigation)}
          style={{
            bottom: -70,
            alignSelf: "center",
            justifyContent: "center",
            width: "90%"
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Logout
          </Text>
        </Button>
      </ScrollView>
    );
  }
}
export default withNavigation(observer(Profile));
