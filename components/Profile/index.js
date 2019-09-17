import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import { renderComponent } from "recompose";

const Profile = () => {

  const {navigation} = this.props
  return (
    <Card>
      <CardItem>
        <Button full success onPress={() => navigation.navigate{"ItemList"}}>
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
 
};
export default Profile;
