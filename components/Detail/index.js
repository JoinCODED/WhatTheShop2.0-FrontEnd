import React, { Component } from "react";
import { observer } from "mobx-react";
// import NumericInput from "react-native-numeric-input";

// NativeBase Components
import { Alert } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

// Style
import styles from "../List/styles";
// Components
import CartButton from "../Buttons/CartButton";

// Store
import dinoStore from "../../stores/dinoStore";
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";
// import cartStore from "../../stores/cartStore";
// import authStore from "../../stores/authStore";

class DinosaurDetail extends Component {
  state = {
    quantity: 1
  };

  handleAdd = () => {
    if (authStore.user) cartStore.addItemToCart(this.setState);
    else {
      Alert.alert(
        "Login to add items to cart",
        [
          {
            text: "Log in",
            onPress: () => this.props.navigation.navigate("Login")
          },
          {
            text: "cancel",
            style: "cancel"
          }
        ],
        { cancelable: true }
      );
    }
  };

  render() {
    const dinosaurID = this.props.navigation.getParam("dinosaurID");
    const dinosaur = dinoStore.dinosaurs.find(
      dinosaur => dinosaurID === dinosaur.id
    );
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {dinosaur.name + "\n"}
                  <Text note>{dinosaur.description}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{ uri: dinosaur.image }} />
              </Right>
            </CardItem>
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.setState({ quantity })}
                  initValue={1}
                />
              </Body>

              <Right>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text>Add to Cart</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

DinosaurDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("dinosaurName"),
  headerRight: <CartButton />
});

export default DinosaurDetail;
