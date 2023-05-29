// import { useContext } from "react";
// import CartContext from "../../contex/Cart/CartContex";
// import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import { styled} from '@mui/material/styles';
// const CartItem = ({ item }) => {
//   const { removeItem } = useContext(CartContext);
// //   let opts = { format: "%s%v", symbol: "€" };
//   return (
//     // <li className='CartItem__item'>
//     //   <img src={item.image} alt='' />
//     //   <div>
//     //     {item.name} {item.price}
//     //   </div>
//     //   <button className='CartItem__button' onClick={() => removeItem(item._id)}>
//     //     Remove
//     //   </button>
//     // </li> 

//                     <Box>
//                     <Card sx={{ maxWidth: 345 }}  >
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="150"
//                   image={`http://localhost:8080/image/${item.pimagename}`} alt="Card image"
              
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                   {item.pname}
//                   </Typography>
//                   {/* <Typography variant="body2" color="text.secondary">
//                   {f.description}
//                   </Typography> */}
//                   <Typography variant="h5">
//                   Rs.{item.price}
//                   </Typography>
                 
//                   <Button variant='contained' onClick={() => removeItem(item._id)}  > Remove
//                   </Button>
        
//                 </CardContent>
//               </CardActionArea>
//             </Card>
        
//                     </Box>

//   );
// };

// export default CartItem;
 import React, { useContext, useState } from 'react'
 import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
 import { FaMinus, FaPlus } from "react-icons/fa";
import CartContext from '../../contex/Cart/CartContex';
 
 function CartItem({cartitem}) {
      const{removeItem,setIncrement,setDecrease}=useContext(CartContext)
    
   return (    
<Grid item xs={12} sm={6} md={4} lg={3} key={cartitem.id}>
            <Box>
            <Card sx={{maxWidth: 345}}  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={`http://localhost:9020/image/${cartitem.pimagename}`} alt="Card image"
      
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          { cartitem.pname}
          </Typography>
   
   
          <button onClick={() =>setDecrease(cartitem.id)}>
          <FaMinus />
        </button>
        <div className="amount-style">{cartitem.amount}</div>
        <button onClick={() => setIncrement(cartitem.id)}>
          <FaPlus />
        </button>
          <Typography variant="h5">
          Rs.{cartitem.price * cartitem.amount}
          </Typography>
        
          <Button variant='contained'onClick={()=>{removeItem(cartitem.id)}} > Remove
          </Button>
         
        </CardContent>
      </CardActionArea>
    </Card>
            </Box>
            </Grid>
        
    
   )
 }
 export default CartItem
 