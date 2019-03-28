// import React, { Component } from "react";
// import { withNavigation } from "react-navigation";
// import { Button, Text, Icon } from "native-base";
// import cartStore from "../../store/cartStore";
// import { observer } from "mobx-react";

// class CartButton extends Component {
//   render() {
//     return (
//         <Button
//           light
//           transparent
//           onPress={() => this.props.navigation.navigate("ProductCart")}
//         >
//           <Text>
//             {cartStore.quantity > 0 && cartStore.quantity}
//       <Icon
//         type="MaterialCommunityIcons"
//         name="cart-outline"
//         style={{ color: "white", fontSize: 15 }}
//       />
//           </Text>
//         </Button>
//     );
//   }
// }

// export default withNavigation(observer(CartButton));
