import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "./../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "./../../components/Product/ProductCard";
import CurrencyFormat from "./../../components/Product/CurrencyFormat/CurrencyFormat";
import { Link } from 'react-router-dom';
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, disPatch] = useContext(DataContext);
  
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => { 
    disPatch({
      type: Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement = (id) => {
    disPatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>O'pps ! No item in your cart </p>
          ) : (
            basket?.map((item, i) => (
              <section className={classes.cart__product}>
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderNoneDisplay={true}
                />
                <div className={classes.btn__container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20}/>
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>
                Subtotal ({basket?.length}{" "}
                {basket?.length === 1 ? "item" : "items"})
              </p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift</small>
            </span>
            <Link to={"/payment"}>Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
