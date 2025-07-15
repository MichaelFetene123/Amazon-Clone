import React from "react";
import { Carousel } from "react-responsive-carousel"; // Assuming Carousel is in the same directory
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { img } from "./img/data"; // Importing image data
import classes from "./Carousel.module.css"; // Assuming you have a CSS module for styles
const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => (
          
            <img src={imageItemLink} />
          
        ))}
      </Carousel>
      <div className={classes.hero__img}> 
        
</div>
    </>
  );
};

export default CarouselEffect;
