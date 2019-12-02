import React, { Component } from "react";

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
// import CartButton from "../Buttons/CartButton";
import dinoStore from "../../Stores/dinoStore";
// import cartStore from "../../Stores/cartStore";
// import authStore from "../../Stores/authStore";

class DinosaurDetail extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    rarity: "",
    quantity: 1
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
          </Card>
        </Content>
      </Container>
    );
  }
}

DinosaurDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("dinosaurName")
});

export default DinosaurDetail;
