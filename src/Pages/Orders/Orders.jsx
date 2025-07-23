import React, { useContext, useEffect, useState } from "react";
import classes from "./Orders.module.css"; // Assuming you have a CSS module for styling
import LayOut from "./../../components/LayOut/LayOut";
import { db } from "./../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from './../../components/Product/ProductCard';

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot?.docs?.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders.length == 0 && <div style={{ padding: '20px' }}>
            you don't have orders yet.
          </div>
            }
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID:{eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard
                    flex={true}
                    product={order}
                    key={order.id}
                    renderNoneDisplay={true}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
