// import React, { Component } from "react";
// import ProductCard from "./ProductCard";
// import productStore from "../../stores/ProductStore";
// import { observer } from "mobx-react";
// import { Content, List } from "native-base";

// class ProductList extends Component {
//   static navigationOptions = {
//     title: "Product-List"
//     // headerLeft: null
//   };

//   render() {
//     const products = productStore.products.map(product => (
//       <ProductCard product={product} key={product.id} />
//     ));

//     return (
//       <Content>
//         <List>{products}</List>
//       </Content>
//     );
//   }
// }

// export default observer(ProductList);

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList
} from "react-native";
import { observer } from "mobx-react";
import ProductStore from "../../stores/ProductStore";
import CartButton from "../CartButton";
import AddToCart from "../AddToCart";

class Galleries extends Component {
  static navigationOptions = {
    headerRight: <CartButton />
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [
  //       { id: 1, likes: 12, image: "https://lorempixel.com/400/200/nature/6/" },
  //       { id: 2, likes: 11, image: "https://lorempixel.com/400/200/nature/5/" },
  //       { id: 3, likes: 25, image: "https://lorempixel.com/400/200/nature/4/" },
  //       { id: 4, likes: 12, image: "https://lorempixel.com/400/200/nature/6/" },
  //       { id: 5, likes: 10, image: "https://lorempixel.com/400/200/sports/1/" },
  //       { id: 6, likes: 12, image: "https://lorempixel.com/400/200/nature/8/" },
  //       { id: 7, likes: 34, image: "https://lorempixel.com/400/200/nature/1/" },
  //       { id: 8, likes: 45, image: "https://lorempixel.com/400/200/nature/3/" },
  //       { id: 9, likes: 32, image: "https://lorempixel.com/400/200/nature/4/" },
  //       { id: 9, likes: 56, image: "https://lorempixel.com/400/200/nature/5/" }
  //     ]
  //   };
  // }

  addProductToCart = () => {
    Alert.alert("Success", "The product has been added to your cart");
  };
  handlePress = item => {
    this.props.navigation.navigate("Detail", {
      shop: item
    });
  };

  render() {
    // console.log("PRODUCTS", ProductStore.products);

    const products = ProductStore.products;

    const data = products.map(product => ({
      id: product.id,
      likes: 40,
      image: product.image
    }));

    // products.forEach(product =>
    //   data.push({ id: product.id, likes: 40, image: product.image })
    // );

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={products}
          horizontal={false}
          numColumns={2}
          listKey={(item, index) => {
            return index;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={post => {
            const item = post.item;
            console.log("ITEM", item.image);
            return (
              <View style={styles.card}>
                <TouchableOpacity
                  style={styles.socialBarButton}
                  onPress={() => this.handlePress(post.item)}
                >
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                  />
                </TouchableOpacity>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <AddToCart product={item} />
                      <TouchableOpacity
                        style={styles.socialBarButton}
                        onPress={() => this.addProductToCart()}
                      >
                        <Image
                          style={styles.icon}
                          source={{
                            uri:
                              "https://png.icons8.com/flat_round/50/000000/share.png"
                          }}
                        />
                        <Text style={[styles.socialBarLabel, styles.share]}>
                          Share
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image
                          style={styles.icon}
                          source={{
                            uri:
                              "https://png.icons8.com/color/50/000000/hearts.png"
                          }}
                        />
                        <Text style={styles.socialBarLabel}>{item.likes}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default observer(Galleries);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#eee"
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "rgb(209,224,245)"
  },
  listContainer: {
    alignItems: "center"
  },
  separator: {
    marginTop: 10
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    flexBasis: "47%",
    marginHorizontal: 5
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null
  },
  /******** card components **************/
  share: {
    color: "#25b7d3"
  },
  icon: {
    width: 25,
    height: 25
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center"
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

// import React from "react";
// import { FlatList, Text, View, StyleSheet } from "react-native";
// import { observer } from "mobx-react";
// import ProductStore from "../../stores/ProductStore";

// class ListScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       listItems: [1, 2, 3]
//     };
//   }

//   render() {
//     const { listItems } = this.state;
//     const products = ProductStore.products;
//     const data = [];

//     products.forEach(product =>
//       data.push({ id: product.id, likes: 40, image: product.image })
//     );
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={styles.containerColumn}
//           data={data}
//           renderItem={this.renderListItemFirstChildSmaller}
//         />
//         <FlatList
//           style={styles.containerColumn}
//           data={data}
//           renderItem={this.renderListItemLastChildSmaller}
//         />
//       </View>
//     );
//   }

//   renderListItemFirstChildSmaller = ({ item, index }) => {
//     return (
//       <Text style={[styles.text, { height: index === 0 ? 100 : 200 }]}>
//         {item}
//       </Text>
//     );
//   };

//   renderListItemLastChildSmaller = ({ item, index }) => {
//     return (
//       <Text
//         style={[
//           styles.text,
//           { height: index === this.state.listItems.length - 1 ? 100 : 200 }
//         ]}
//       >
//         {item}
//       </Text>
//     );
//   };
// }

// export default observer(ListScreen);

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     flexDirection: "row"
//   },
//   containerColumn: {
//     display: "flex",
//     flex: 1,
//     flexDirection: "column"
//   },
//   text: {
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "green"
//   }
// });
