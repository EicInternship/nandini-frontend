import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { getloginseller } from '../Service/Service'
import axios from 'axios'
import { Box, Button, TextField, Typography } from '@mui/material'
export default function SellerLogin() {
    const[loginDetails,setlogingdetails]=useState({
        email:"",
        password:""
      })
      const nevigate=useNavigate()
      const  handleChange=(e,property)=>{
        setlogingdetails({...loginDetails,[property]:e.target.value})
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:9020/checkseller?email=${loginDetails.email}&password=${loginDetails.password}`).then((res)=>{
        console.log("succesful login")
        document.getElementById("p").innerHTML = "you are loggded in";
        nevigate("/product")
    }
    ).catch((error) => {
        console.log(error.res)
        // if (error.response.status === 401) {
        //   document.getElementById("p").innerHTML = "User not found please sign in";
        // } else {
          document.getElementById("p").innerHTML = "you are not a seller. please register.";
        
       } ) 
}

     
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <Box
          display="flex"
           flexDirection={"column"}
            maxWidth={400}
             alignItems="center"
              justifyContent={"center"}
              margin="auto"
              marginTop={5}
              padding={5}
              borderRadius={5}
              boxShadow={'5px 5px 10px #ccc'}
              sx={{
                 ":hover":{
                  boxShadow:'10px,10px,20px,#ccc'
                 }
              }}
              >
            <Typography  variant="h5" padding={3} textalign="center">Login For Seller</Typography>
           
            <TextField
            type={"email"}
             variant='outlined'
              value={loginDetails.email} 
              placeholder='Enter email'
              margin="normal"
              onChange={(e)=>{handleChange(e,'email')}} />
            <TextField type={"password"}
            value={loginDetails.password} 
            variant='outlined'
            placeholder='Password'
            margin="normal"
            onChange={(e)=>{handleChange(e,'password')}} />
             <Button variant='contained' type="submit"
              sx={{marginTop:3,borderRadius:3}}>Login</Button>
             {/* Are you not a member?<Link to ="/signup">signup</Link> */}
            <p id="p"></p>
            </Box>
        </form>
    </div>
  )
}
