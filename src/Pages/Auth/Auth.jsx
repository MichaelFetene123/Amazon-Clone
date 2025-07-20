import React from 'react' 
import classes from './SignUp.module.css'; // Assuming you have a CSS module for styling
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* form */}

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>  
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

            <button className={classes.login__signInButton} type="submit">Sign In</button>
        </form>

        {/* agreement */}
        <p>By signing-in, you agree to AMAZON FAKE CLONE Conditions of Use & sale.Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        {/* create account button */}
        <button className={classes.login__registerButton}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth