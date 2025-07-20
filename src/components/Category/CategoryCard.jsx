import React from 'react'
import classes from './Category.module.css'; // Assuming you have a CSS module for styles
import { Link } from 'react-router-dom'; // Import Link for navigation
const CategoryCard = ({data}) => {

  return (
    
    <div className={classes.category}>
      <Link to={`category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt="" />
     
          <p>show now</p>
        
      </Link>
    </div>
  );
}

export default CategoryCard