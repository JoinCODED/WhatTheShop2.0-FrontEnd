import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  List,
  Content,
  Spinner,
  View,
  Button,
  Image,
  Left,
  TouchableHighlight,
  Text
} from "native-base";
import { ImageBackground, StyleSheet, Icon } from "react-native";

// Store
import banakStore from "../../stores/BanakStore";

// Component
import BanakCard from "./BanakCard";
import BanakModal from "../BanakModal";
import banakat from "../../assets/banakat.jpg";
import { Header } from "react-navigation-stack";
import customNavigator from "../../navigation/customNavigator";

// import  from "";

class BanakList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "BanakaT",
    headerLeft: (
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Text>...</Text>
      </Button>
    ),

    headerRight: <BanakModal />
  });
  render() {
    if (banakStore.loading) return <Spinner />;
    const banaks = banakStore.banaks;
    let Banak = banaks.map(pointedbanak => (
      <BanakCard banak={pointedbanak} key={pointedbanak.id} />
    ));
    return (
      <Content>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/banakat.jpg")}
        >
          <List style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Banak}
          </List>

          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Text>test</Text>
          </Button>
        </ImageBackground>
      </Content>
    );
  }
}

export default observer(BanakList);

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%"
  }
});
