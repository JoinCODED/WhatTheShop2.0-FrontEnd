import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import authStore from "../stores/authStore";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  };
  handleChange = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = () => {
    const navigation = this.props.navigation;
    authStore.registerUser(this.state, navigation);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.handleChange("username", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.handleChange("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.handleChange("email", val)}
        />

        <Button title="Sign Up" onPress={this.signUp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
