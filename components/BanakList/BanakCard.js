import React, { Component } from "react";
import { ImageBackground, View, Image } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

// Navigation
import { withNavigation } from "react-navigation";
import {
  TouchableHighlight,
  TouchableOpacity
} from "react-native-gesture-handler";

class BanakCard extends Component {
  handlePress = () => {
    this.props.navigation.navigate("BanakDetail", {
      banakID: this.props.banak.id
    });
  };

  render() {
    const { banak } = this.props;
    return (
      // <Card>
      //   <CardItem>
      //     <Left>
      //       <TouchableHighlight style={styles.img} onPress={this.handlePress}>
      //         <Thumbnail bordered source={{ uri: banak.image }} />
      //       </TouchableHighlight>
      //       <Text>{banak.name}</Text>
      //       <Text note>{banak.price}</Text>
      //     </Left>
      //   </CardItem>
      // </Card>

      <View
        style={{ width: 350, height: 200, flexDirection: "row", margin: 33 }}
      >
        <TouchableOpacity
          style={{ width: 350, height: 200 }}
          onPress={this.handlePress}
        >
          <Image
            style={{ width: 350, height: 200, position: "absolute" }}
            source={{ uri: banak.image }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              alignSelf: "flex-end"
            }}
          >
            <Text style={{ color: "white", fontSize: 20, margin: 6 }}>
              {banak.name}
            </Text>
            <Text style={{ color: "white", margin: 6 }}>{banak.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(BanakCard);
