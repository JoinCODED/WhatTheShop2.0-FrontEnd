import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import NumericInput from "react-native-numeric-input";
import { ImageBackground } from "react-native";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  View
} from "native-base";
import { Image, StyleSheet } from "react-native";
import { renderComponent } from "recompose";

// Style
// import styles from "./styles";

//Store
import banakStore from "../../stores/BanakStore";
import cartStore from "../../stores/CartStore";
import BanakModal from "../BanakModal";
import Quantity from "./Quantity";
// Components
// import CartButton from "../CartButton";

class BanakDetail extends Component {
  state = {
    value: 1
  };
  static navigationOptions = ({ navigation }) => ({
    title: "Detail",

    headerRight: <BanakModal />
  });
  render() {
    const BanakID = this.props.navigation.getParam("banakID");
    const Banak = banakStore.banaks.find(Banaks => Banaks.id === BanakID);

    return (
      // <Content>
      //   <BanakModal />
      //   <List>
      //     <ListItem>
      //       <Left>
      //         <Text>
      //           {Banak.name + "\n"}
      //           <Text>{Banak.description}</Text>
      //         </Text>
      //       </Left>
      //       <Body />
      //       <Right>
      //         <Thumbnail bordered source={{ uri: Banak.image }} />
      //       </Right>
      //     </ListItem>
      //     <ListItem></ListItem>
      //     <Button
      //       full
      //       danger
      //       onPress={() => cartStore.addItemToCart({ ...Banak, quantity: 1 })}
      //     >
      //       <Text>Add</Text>
      //     </Button>
      //   </List>
      // </Content>
      <Content>
        <Image
          style={{ width: 450, height: 250, position: "absolute" }}
          source={{ uri: Banak.image }}
        />

        <Text style={styles.text}>
          {Banak.name + "\n"}
          <Text>{Banak.description}</Text>
        </Text>

        <Quantity Banak={Banak} />
      </Content>
    );
  }
}

export default withNavigation(observer(BanakDetail));

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 260,
    left: 20,
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold"
  }
});
