import { createDrawerNavigator, createAppContainer } from "react-navigation";
import BottomTab from "./BottomTab";
import ProductList from "../components/ProductList";

const Drawer = createDrawerNavigator({
  Tabs: BottomTab,
  List: ProductList
});

const AppContainer = createAppContainer(Drawer);

export default AppContainer;
