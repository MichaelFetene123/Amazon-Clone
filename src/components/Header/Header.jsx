import React,{ useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css"; // Assuming you have a CSS module for styles
import LowerHeader from './LowerHeader';
import {Link} from "react-router-dom"; // Assuming you are using react-router for navigation
import {DataContext} from "../DataProvider/DataProvider";




const Header = () => {

  const [{basket}, disPatch] = useContext(DataContext);

const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
}, 0);

  return (
    <div className={classes.sticky__header}>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </Link>
            <Link className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </Link>
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
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="US flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItems}</span>
            </Link>
          </div>
        </div>
      </section>

      <LowerHeader />
    </div>
  );
};

export default Header;
