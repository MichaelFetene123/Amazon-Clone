import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from './Product.module.css'
import Loader from './../../Loader/Loader';

const Product = () => {
  const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={classes.product__container}>
          {products?.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Product;
