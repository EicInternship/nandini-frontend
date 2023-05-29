import React from 'react'
import Carousel from 'react-elastic-carousel';
import { getproduct } from '../Service/Service';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useState,useEffect } from 'react';

 function Home() {
   const [Product, setproduct] = useState([])
  useEffect(() => {
    getproduct().then((res) => {
      console.log(res.data);
         setproduct(res.data)
    });
},[]);
  return (
    <>
      <div>
            {/* <Typography>this is home commpent</Typography> */}
            <Carousel >
              <Card className='card-first' >welcom to e Commerce</Card>
            {  Product.map((f) =>
            <Card className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          
          image={`http://localhost:9020/image/${f.pimagename}`} alt="Card image"
      
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
          {f.pname}
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
          {f.description}
          </Typography> */}
          {/* <Typography variant="h5">
          Rs.{f.price}
          </Typography> */}
          {/* <Button variant='contained'> Add to Cart</Button> */}
        </CardContent>
      </CardActionArea>
    </Card>
) }  
            </Carousel>

       </div>
    </>
  )
}
export default Home
