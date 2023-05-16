import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { UserService } from "../../service/UserService";
import { Link } from "react-router-dom";
import Productdetails from "./Productdetails";
import CartContext from "../../context/CartContex";

const useStyles = makeStyles({
  card: {
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

function ProductCard() {
  const [Product, setproduct] = useState([]);
  // const { addToCart }= useContext(CartContext)

  useEffect(() => {
    UserService.getproduct().then((res) => {
      setproduct(res.data);
    });
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={5}>
        {Product.map((f) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={f.id}>
            <Box>
              <Link
                to={{
                  pathname: `/productDetails/${f.id}`,
                  state: { replace: true },
                }}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ maxWidth: 345 }} className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="150"
                      image={`http://localhost:9020/image/${f.pimagename}`}
                      alt="Card image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {f.pname}
                      </Typography>

                      <Typography variant="h5">Rs.{f.price}</Typography>

                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#9C27B0" }}
                      >
                        <b>Add to Cart</b>
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default ProductCard;
