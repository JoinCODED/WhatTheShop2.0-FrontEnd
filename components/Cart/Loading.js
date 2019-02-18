import React, { Component } from "react";
import { Text } from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import CartStore from "../../stores/cartStore";
class Loading extends Component {
  state = {
    spinner: false
  };
  componentDidMount() {
    CartStore.getcart();
    setInterval(() => {
      this.setState({
        spinner: !this.state.spinner
      });
    }, 1000);
  }
  render() {
    // return <Text>LOADING...</Text>;
    return <Spinner visible={this.state.spinner} textContent={"Loading..."} />;
  }
}

export default Loading;
