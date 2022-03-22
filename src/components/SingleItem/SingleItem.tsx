import React from "react";
import styles from "./SingleItem.module.scss";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { IProduct } from "../../models";

type Props = {
  current: IProduct,
  addToCart: any
}

const SingleItem = ({ current, addToCart }: Props) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current?.image}
        alt={current?.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>$ {current.price}</p>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => addToCart(current.id)}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (id: string) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
