import React, { useContext, useState } from "react";
import classes from "./Payment.module.css"; // Assuming you have a CSS module for styling
import LayOut from "./../../components/LayOut/LayOut";
import { DataContext } from "./../../components/DataProvider/DataProvider";
import ProductCard from "./../../components/Product/ProductCard";
import CurrencyFormat from "./../../components/Product/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "./../../Utility/action.type";

const Payment = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  // console.log(user);

  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (event) => {
    // console.log(event);
    event?.error?.message
      ? setCardError(event.error.message)
      : setCardError("");
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    try {
      setProcessing(true);
      // step 1
      // backend || functions ---> contact to the client secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // step 2
      // client side (react confirmation)
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      // console.log(paymentIntent);

      // step 3
      // after the confirmation --->order firebase save ,clear the basket,
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      //  empty the basket
      dispatch({ type: Type.CLEAR_BASKET });

      setProcessing(false);

      navigate("/orders", { state: { msg: "you have placed new Order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      <div className={classes.payment__header}>
        Checkout ({totalItems}) items
      </div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket.map((item) => (
              <ProductCard
                product={item}
                flex={true}
                renderNoneDisplay={true}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}

                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;
