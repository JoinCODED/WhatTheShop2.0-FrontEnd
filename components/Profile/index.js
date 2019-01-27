// import React, { Component } from "react";

// NativeBase Components
import { Button } from "native-base";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Components
import LogIcon from "../LogIcon";

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Alert, ScrollView } from "react-native";

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
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
              }}
            />
            <Text style={styles.name}>John Doe</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.name}>John Doe</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.name}>John Doe</Text>
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

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  container: {
    padding: 20
  },
  box: {
    marginTop: 10,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2,
    paddingTop: 10
  },
  profileImage: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  name: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#1E90FF"
  }
});
export default withNavigation(observer(Profile));
