import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css"; // Assuming you have a CSS module for styles
import LowerHeader from './LowerHeader';





const Header = () => {

  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </a>
            <a className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </a>
          </div>
          {/* search bar */}
          <div className={classes.search}>
            <select name="" id="" style={{ backgroundColor: "#E6E6E6" }}>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            {/* icon */}
            <BsSearch size={35} />
          </div>
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="US flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            <a href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>

            <a a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>

      <LowerHeader />
    </>
  );
};

export default Header;
