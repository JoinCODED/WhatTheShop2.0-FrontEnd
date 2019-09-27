import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/CartStore";
import { StyleSheet } from "react-native";
import { Text, Button, View } from "native-base";

class Quantity extends Component {
  state = {
    value: 1
  };

  render() {
    return (
      <>
        <View style={styles.quantity}>
          <NumericInput
            value={this.state.value}
            onChange={value => this.setState({ value })}
            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
            totalWidth={240}
            totalHeight={50}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor="black"
            iconStyle={{ color: "white" }}
            rightButtonBackgroundColor="black"
            leftButtonBackgroundColor="black"
          />
        </View>
        <Text style={styles.price}>
          {this.props.Banak.price * this.state.value} KWD
        </Text>
        <View>
          <Button
            style={styles.Button}
            bordered
            dark
            onPress={() =>
              cartStore.addItemToCart({
                ...this.props.Banak,
                quantity: this.state.value
              })
            }
          >
            <Text style={styles.textButton}>Add</Text>
          </Button>
        </View>
      </>
    );
  }
}

export default Quantity;
const styles = StyleSheet.create({
  Button: {
    height: 50,
    width: 110,
    position: "absolute",
    top: 660,
    left: 30
  },
  textButton: {
    paddingLeft: 37
  },
  quantity: {
    position: "absolute",
    top: 660,
    right: 10
  },
  price: {
    position: "absolute",
    top: 260,
    right: 20,
    fontSize: 19,
    fontStyle: "italic"
  }
});
