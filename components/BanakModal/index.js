import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Icon, Button } from "native-base";
import Modal from "react-native-modal";
import CartDetail from "../CartDetail";
import cartStore from "../../stores/CartStore";

export default class BanakModal extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button transparent onPress={this.toggleModal}>
          <Icon name="shoppingcart" type="AntDesign" />
        </Button>
        <Modal isVisible={this.state.isModalVisible} animationType="fade">
          <View style={{ flex: 1 }}>
            <CartDetail />
            <Button
              style={styles.Button1}
              bordered
              light
              onPress={cartStore.checkOut}
            >
              <Text style={styles.Text1}>Check Out</Text>
            </Button>
            <Button
              style={styles.Button2}
              bordered
              light
              onPress={this.toggleModal}
            >
              <Text style={styles.Text2}>Cancel</Text>
            </Button>
            {/* <Text>Total={cartStore.totalCart}</Text> */}
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Text1: {
    color: "white",
    textAlign: "center",
    paddingLeft: 19
  },
  Text2: {
    color: "white",
    textAlign: "center",
    paddingLeft: 27
  },
  Button1: {
    height: 50,
    width: 110,
    position: "absolute",
    bottom: 30,
    left: 30
  },
  Button2: {
    height: 50,
    width: 110,
    position: "absolute",
    bottom: 30,
    right: 30
  }
});
