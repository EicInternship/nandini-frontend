import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getloginseller } from '../Service/Service'
import { Box, TextField, Typography,Button } from '@mui/material'
 function LoginSeller() {
    const[loginDetails,setlogingdetails]=useState({
        email:"",
        password:""
      })
    const  handleChange=(e,property)=>{
        setlogingdetails({...loginDetails,[property]:e.target.value})
   }
   const nevigate=useNavigate()
   const handleSubmit=(e)=>{
    e.preventDefault();

    // getloginseller(loginDetails).then((res)=>{
    //     console.log(res.data)
    //     console.log("succesful login")
    //     document.getElementById("p").innerHTML = "you are loggded in";
    //     nevigate("/product")
    //  }).catch((error) => {
    //   if (error.response.status === 404) {
    //     document.getElementById("p").innerHTML = "User not found please sign in";
    //   } else {
    //     document.getElementById("p").innerHTML = "An error occurred. Please try again.";
    //   }
    //  } ) 
    // })
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <Box display="flex"
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
 }
export default LoginSeller
