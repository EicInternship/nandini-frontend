import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import CartContext from "../../context/CartContex";

function CartItem({ cartitem }) {
  const { removeItem, setIncrement, setDecrease } = useContext(CartContext);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={cartitem.id}>
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={`http://localhost:9020/image/${cartitem.pimagename}`}
              alt="Card image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cartitem.pname}
              </Typography>

              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => setDecrease(cartitem.id)}
                  style={{ marginRight: "8px", backgroundColor: "#FFA500" }}
                >
                  <FaMinus style={{ margin: "5px", alignItems: "center" }} />
                </button>

                <div className="amount-style">{cartitem.amount}</div>

                <button
                  onClick={() => setIncrement(cartitem.id)}
                  style={{ marginLeft: "8px", backgroundColor: "#FFA500" }}
                >
                  <FaPlus
                    style={{
                      margin: "5px",
                      alignItems: "center",
                    }}
                  />
                </button>
              </div>
              <Typography variant="h5">
                Rs.{cartitem.price * cartitem.amount}
              </Typography>

              <Button
                variant="contained"
                onClick={() => {
                  removeItem(cartitem.id);
                }}
                style={{ backgroundColor: "#9C27B0" }}
              >
                <b>Remove</b>
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
}
export default CartItem;
