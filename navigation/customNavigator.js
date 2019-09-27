import React from "react";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Text, Image } from "react-native";
import { Container, Content, Header, Left, Body, Icon } from "native-base";

const customNavigator = props => (
  <Container>
    <Header style={{ height: 250 }}>
      <Body>
        <Image
          style={{ width: 250, height: 100 }}
          source={require("../assets/banakat.jpg")}
        />
      </Body>
    </Header>
    <Content>
      <DrawerNavigatorItems {...props} />
    </Content>
  </Container>
);

export default customNavigator;
