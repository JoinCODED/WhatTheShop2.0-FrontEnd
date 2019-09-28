import { createAppContainer } from "react-navigation";
import DrawerNav from "./Drawer";
import BottomTab from "./BottomTab";

const AppContainer = createAppContainer(DrawerNav);
export default AppContainer;
