import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "./../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
import { ClipLoader } from "react-spinners";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState({ signIn: false, signUp: false });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  // console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name === "signin") {
      // firebase auth
      setLoading({ ...Loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({  
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signIn: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signIn: false });
        });
    } else {
      setLoading({ ...Loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signUp: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signUp: false });
        });
    }
  };

  // console.log(email, password)
  return (
    <section className={classes.login}>
      <Link to='/'>
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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            name="signin"
            type="submit"
            onClick={authHandler}
            className={classes.login__signInButton}
          >
            {Loading.signIn ? <ClipLoader size={15} color="#000" /> : "Sign In"}
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing-in, you agree to AMAZON FAKE CLONE Conditions of Use &
          sale.Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* create account button */}
        <button
          name="signup"
          type="submit"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {Loading.signUp ? (
            <ClipLoader size={15} color="#000" />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {/* error message */}
        {error && (
          <small style={{ color: "red", fontSize: "12px", padding: "5px" }}>
            {error}
          </small>
        )}
      </div>
    </section>
  );
};

export default Auth;
