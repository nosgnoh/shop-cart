import React from "react";
import styles from "./Products.module.scss";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";
import { IProduct } from "../../models";

type Props = {
  products: IProduct[]
}

type State = {
  shop: {
    products: IProduct[]
  }
}

const Products = ({ products }: Props) => {
  return (
    <div className={styles.products}>
      {products.map((product: IProduct) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
