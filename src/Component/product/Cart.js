import { Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import CartContext from "../../context/CartContex";
import CartItem from "../cart/CartItem";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
function Cart() {
  const { cart, clearCart, totalprice, shipping_fee } = useContext(CartContext);
  const nevigate = useNavigate("/bilingform");
  if (cart.length === 0) {
    return (
      <div className="emptycart">
        <h3>No item in Cart </h3>
      </div>
    );
  }
  return (
    <div>
      <Grid container spacing={5}>
        {cart.map((cartitem) => {
          return <CartItem key={cartitem.id} cartitem={cartitem} />;
        })}
      </Grid>
      <div className="cart-two-button">
        <Link to={{ pathname: "/productcard", state: { replace: true } }}>
          <Button variant="contained" style={{ backgroundColor: "#9C27B0" }}>
            <b>continue Shopping</b>
          </Button>
        </Link>
        <Button
          variant="contained"
          onClick={clearCart}
          style={{ backgroundColor: "#9C27B0" }}
        >
          <b>clear cart</b>
        </Button>
      </div>
      <br />
      <br />
      <div className="order-total--amount">
        <div className="order-total--subdata">
          <div>
            <p>subtotal:</p>
            <p>Rs.{totalprice}</p>
          </div>
          <div>
            <p>shipping fee:</p>
            <p>Rs.{shipping_fee}</p>
          </div>
          <hr />
          <div>
            <p>order total:</p>
            <p>Rs.{shipping_fee + totalprice}</p>
          </div>
        </div>
      </div>
      <br />
      <div className="place-order-button">
        <Button variant="contained" style={{ backgroundColor: "#9C27B0" }}>
          <b>Place order</b>
        </Button>
      </div>
    </div>
  );
}
export default Cart;
