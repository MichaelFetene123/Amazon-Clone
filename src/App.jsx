import { useState, useEffect, useContext } from "react";
import "./App.css";
import AppRouter from "./Router";
import { Type } from "./Utility/Action.type";
import { auth } from "./Utility/firebase";
import { DataContext } from "./components/DataProvider/DataProvider";

function App() {
  const [count, setCount] = useState(0);
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
     if (authUser) {
       // console.log(authUser);
       dispatch({
         type: Type.SET_USER,
         user: authUser,
       });

     } else {
       dispatch({
         type: Type.SET_USER,
         user: null,
       });
      }
      
    });
  }, []);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
