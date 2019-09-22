import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import CartDetail from "../CartDetail";

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
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <CartDetail />
            <Button title="Check out" />
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}
