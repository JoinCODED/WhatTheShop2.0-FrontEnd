import { createStackNavigator } from "react-navigation-stack";

// Components
import CarDetail from "../components/CarDetail";
import CarList from "../components/CarList";
import CarCart from "../components/CarCart";
import Login from "../components/Login";
// import CheckoutScreen from "../components/Checkout";
// import SignupScreen from "../components/Signup";
import ProfileScreen from "../components/Profile";

const CarStack = createStackNavigator(
  {
    Carlist: CarList,
    CarDetail: CarDetail,
    CarCart: CarCart,
    Login: Login,
    Profile: ProfileScreen
    // Checkout: CheckoutScreen
  },
  {
    initialRouteName: "Carlist",
    defaultNavigationOptions: {
      title: "Car Shop"
    }
  }
);

export default CarStack;
