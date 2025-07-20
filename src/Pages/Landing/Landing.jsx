import React from 'react'
import CarouselEffect from "../../components/Carousel/CarouselEffect";
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import LayOut from './../../components/LayOut/LayOut';


const Landing = () => {
  return (
    <>
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
      </LayOut>
    </>
  );
}

export default Landing