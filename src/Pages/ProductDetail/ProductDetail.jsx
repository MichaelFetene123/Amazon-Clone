import React, { useState, useEffect } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "./../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "./../../components/Product/ProductCard";
import Loader from "./../../Loader/Loader";

const ProductDetail = () => {
  const { productId } = useParams();
  // console.log(productId);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((response) => {
        // console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      <>
        {loading ? (
          <Loader />
        ) : (
          product && (
            <ProductCard product={product} flex={true} renderDesc={true} />
          )
        )}
      </>
    </LayOut>
  );
};

export default ProductDetail;
