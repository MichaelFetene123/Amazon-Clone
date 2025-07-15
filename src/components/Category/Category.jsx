
import React from 'react'
import {categoryInfo} from './categoryFullInfo';
import CategoryCard from './CategoryCard';
import classes from './Category.module.css'; // Assuming you have a CSS module for styles


const Category = () => {
  return (
    <section className={classes.category__container}>
      {
        categoryInfo.map((infos) => (
<CategoryCard data={infos}/>
        ))
      }
   </section>
  )
}

export default Category

