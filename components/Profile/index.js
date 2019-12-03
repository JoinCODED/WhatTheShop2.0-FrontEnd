import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

import CartButton from "../Buttons/CartButton";

const Profile = () => {
  return (
    <Card>
      <CardItem>
        <Button
          danger
          onPress={() => alert("You need to implement Logout ...")}
        >
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

Profile.navigationOptions = {
  title: "Profile",
  headerRight: <CartButton />,
  headerLeft: <Profile />
};
export default Profile;
