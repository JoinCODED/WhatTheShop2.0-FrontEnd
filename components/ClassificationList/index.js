import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

// Store
import classificationStore from "../../stores/classificationStore";

// Component
import ClassificationItem from "./classificationItem";

class Classification extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Classification",
    headerRight: (
      <Button light transparent onPress={() => navigation.navigate("Cart")}>
        <Icon type="FontAwesome" name="shopping-bag" color="white" />
      </Button>
    )
  });

  render() {
    const classification = classificationStore.classification;
    let Items;
    if (classification) {
      Items = classification.map(item => (
        <ClassificationItem classification={item} key={item.id} />
      ));
    }
    return (
      <Content>
        <List>{Items}</List>
      </Content>
    );
  }
}

export default observer(Classification);
