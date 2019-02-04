import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import classificationStore from "../../stores/classificationStore";

// Component
import ClassificationItem from "./classificationItem";

class Classification extends Component {
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
