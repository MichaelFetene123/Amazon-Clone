import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from './Header.module.css'

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>


      <ul>
        <li>
          <AiOutlineMenu size={25} />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Register</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
