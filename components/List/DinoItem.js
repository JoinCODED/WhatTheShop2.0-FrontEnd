import React from "react";
import { withNavigation } from "react-navigation";
// import { View } from "react-native";
import { Image, View } from "react-native";

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
  Right,
  ListItem
} from "native-base";

// Style
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const DinoItem = ({ dinosaur, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      dinosaurID: dinosaur.id,
      dinosaurName: dinosaur.name
    });

  return (
    <TouchableOpacity onPress={handlePress}>
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
    </TouchableOpacity>
  );
};

export default withNavigation(DinoItem);
