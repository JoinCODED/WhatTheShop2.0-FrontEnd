import { createDrawerNavigator, createAppContainer } from "react-navigation";
import BottomTab from "./BottomTab";
import ProductListStack from "./ProductListStack";
import SideMenu from "../components/Sidebar";
import UserProfile from "../components/Profile/UserProfile";
import PrevOrdersList from "../components/PreviousOrders/PrevOrdersList";

const Drawer = createDrawerNavigator(
  {
    Tabs: BottomTab,
    List: ProductListStack,
    UserProfile: UserProfile,
    PrevList: PrevOrdersList
  },
  {
    contentComponent: SideMenu
  }
);

const AppContainer = createAppContainer(Drawer);

export default AppContainer;

// // this.props.navigation.dispatch(DrawerActions.openDrawer());
// // this.props.navigation.dispatch(DrawerActions.closeDrawer());
// // this.props.navigation.dispatch(DrawerActions.toggleDrawer());
