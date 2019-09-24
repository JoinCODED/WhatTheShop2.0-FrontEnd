// if (!this.props.user) return <Redirect to="/login" />;

// import { Redirect } from "react-router-dom";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

class Profile extends Component {
  componentDidMount = () => {
    if (authStore.user) profileStore.fetchProfile();
  };
  render() {
    console.log(authStore.user);
    if (!authStore.user) return this.props.navigation.replace("Login");
    if (authStore.user) return this.props.navigation.replace("Profile");
    return (
      <Card>
        <CardItem>
          <Text>
            Welcome {profileStore.profile.username}!{"\n"}
          </Text>
        </CardItem>
        <CardItem>
          <Button
            danger
            onPress={() => authStore.logout(this.props.navigation)}
          >
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default observer(Profile);
