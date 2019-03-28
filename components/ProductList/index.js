import React, { Component } from "react";
import ProductCard from "./ProductCard";
import productStore from "../../stores/ProductStore";
import { observer } from "mobx-react";
import { Content, List } from "native-base";

class ProductList extends Component {
  static navigationOptions = {
    title: "Product-List"
    // headerLeft: null
  };

  render() {
    const products = productStore.products.map(product => (
      <ProductCard product={product} key={product.id} />
    ));

    return (
      <Content>
        <List>{products}</List>
      </Content>
    );
  }
}

export default observer(ProductList);
