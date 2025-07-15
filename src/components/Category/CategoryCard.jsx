import React from 'react'
import classes from './Category.module.css'; // Assuming you have a CSS module for styles

const CategoryCard = ({data}) => {

  return (
    
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt="" />
     
          <p>show now</p>
        
      </a>
    </div>
  );
}

export default CategoryCard