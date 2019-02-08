import React, { Component } from "react";

import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";

import ShopList from "../ShopList";
class TabsScrollable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "TShirts"
    };
  }

  // pressShirt() {
  //   this.setState({ type: "Tshirts" });
  //   console.log("TYPE: ", this.state.type);
  // }
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="TShirt">
            <ShopList type={this.state.type} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabsScrollable;
