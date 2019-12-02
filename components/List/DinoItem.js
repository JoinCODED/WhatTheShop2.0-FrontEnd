import React from "react";
import { withNavigation } from "react-navigation";
// import { View } from "react-native";
import { Image } from "react-native";

// NativeBase Components
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

// Style
import styles from "./styles";

const DinoItem = ({ dinosaur, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      dinosaurID: dinosaur.id,
      dinosaurName: dinosaur.name
    });

  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{dinosaur.name}</Text>
            <Text note>{dinosaur.rarity}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{ uri: dinosaur.image }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Right>
          <Text>{dinosaur.price}</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default withNavigation(DinoItem);
