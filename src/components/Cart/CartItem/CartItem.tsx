import React, { useState } from "react";
import styles from "./CartItem.module.scss";
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";
import { ICartProduct } from "../../../models";

type Props = {
  item: ICartProduct,
  adjustQty: any,
  removeFromCart: any
}


const CartItem = ({ item, adjustQty, removeFromCart } : Props) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e:any) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Quantity</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.actions__deleteItemBtn}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    adjustQty: (id: string, value: number) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id: string) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
