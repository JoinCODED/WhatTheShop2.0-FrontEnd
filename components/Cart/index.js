import React, { Component } from "react";
import { observer } from "mobx-react";
import Spinner from "react-native-loading-spinner-overlay";
import { View, ScrollView } from "react-native";
// NativeBase Components

// Component
import CartItem from "./CartItem";

//Store
import CartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import LoadingComp from "./Loading";
import { withNavigation } from "react-navigation";
import CartList from "./CartList";
import cartStore from "../../stores/cartStore";

class Cart extends Component {
  state = {
    spinner: false
  };
  static navigationOptions = () => ({
    // title: navigation.getParam("shop", {}).name,
    // headerRight: <LogIcon />,

    title: "My Cart"
  });

  componentDidMount() {
    CartStore.getcart();
    // setInterval(() => {
    //   this.setState({
    //     spinner: !this.state.spinner
    //   });
    // }, 1000);
  }

  handleView() {
    if (CartStore.loading) {
      return <LoadingComp />;
    } else {
      return <CartList />;
    }
  }

  render() {
    console.log("Loading is: ", CartStore.loading);
    return (
      <ScrollView>
        <View>{this.handleView()}</View>
      </ScrollView>
    );
  }
}

export default withNavigation(observer(Cart));
