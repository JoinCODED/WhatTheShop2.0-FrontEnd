import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Icon, Button } from "native-base";

// Styles
import styles from "./styles";
//stores
import authStore from "../../stores/authStore";

const LogoutButton = ({ navigation }) => {
  if (authStore.user)
    return (
      <Button transparent light>
        <Icon
          onPress={authStore.logout(navigation)}
          name="logout"
          type="MaterialCommunityIcons"
          style={{ color: "red" }}
        />
      </Button>
    );
};

export default withNavigation(observer(LogoutButton));
