import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "./CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({ product, flex, renderDesc, renderNoneDisplay }) => {
  const { title, image, id, price, rating, description } = product;

  const [state, disPatch] = useContext(DataContext);
  // console.log(state);

  const addToCart = () => {
    disPatch({
      type: Type.ADD_TO_BASKET,
      item: {
        title,
        image,
        id,
        price,
        rating,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button
          className={`${classes.button} ${
            renderNoneDisplay ? classes.renderNoneDisplay : ""
          }`}
          onClick={addToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
