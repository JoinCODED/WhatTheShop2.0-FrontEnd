import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button } from "native-base";

//stores
import authStore from "../../Stores/authStore";

const Logout = () => {
  return (
    <Button danger onPress={authStore.logout}>
      <Text>Logout</Text>
    </Button>
  );
};

export default withNavigation(observer(Logout));
