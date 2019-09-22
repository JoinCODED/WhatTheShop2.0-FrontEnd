import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import banakStore from "../../stores/BanakStore";

// Component
import BanakCard from "./BanakCard";
import BanakModal from "../BanakModal";

// import  from "";

class BanakList extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: "Coffee List",
  //   headerLeft: null
  //     headerRight: <CartButton />
  // });
  render() {
    if (banakStore.loading) return <Spinner />;
    const banaks = banakStore.banaks;
    let Banak = banaks.map(pointedbanak => (
      <BanakCard banak={pointedbanak} key={pointedbanak.id} />
    ));
    return (
      <Content>
        <BanakModal />
        <List>{Banak}</List>
      </Content>
    );
  }
}

export default observer(BanakList);
