import React, { useState, useEffect } from "react";
import classes from "./Results.module.css"; // Assuming you have a CSS module for styling
import LayOut from "./../../components/LayOut/LayOut";
import { useParams } from "react-router-dom"; // Import useParams to get route parameters`
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard"; // Import your ProductCard component
import Loader from './../../Loader/Loader';

const Results = () => {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((Response) => {
        setLoading(false);
        //  console.log(Response.data);
        setResults(Response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {loading ? (
          <Loader />
        ) : (
          <div className={classes.product__container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Results;
