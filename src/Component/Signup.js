import React, { useState } from 'react';
import { addUser } from '../Service/Service';
import { Box, TextField, Button, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () =>
 {
  const[loading,setloading]=useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonenum: '',
    password: '',
    country:''
  });

  const nevigate=useNavigate()
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.phonenum) {
      errors.phonenum = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9]{10,10}$/.test(formData.phonenum)) {

      errors.phonenum = 'Invalid phone number';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true)
    if (validateForm()) {
      addUser(formData).then((res) => {
        console.log(res.data);
        console.log('success log');
        setloading(false)
        nevigate("/Login")

      }) .catch((error)=>{
         console.log(error.data);
         alert("user is present")
      })
    }
  };

  const handleReset = (e) => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phonenum: '',
      password: '',
      country:''
    });
    setErrors({});
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          padding ={4}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{
            ":hover": {
              boxShadow: '10px,10px,20px,#ccc'
            }
          }} >
          <Typography variant="h5" padding={1} textalign="center">Signup</Typography>
          <TextField type={"text"}
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter FirstName'
          />
          {errors.firstName && <span>{errors.firstName}</span>}
          <TextField type={"text"}
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter LastName'
            margin="normal" />
          {errors.lastName && <span>{errors.lastName}</span>}
          <TextField type={"email"}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter Email '
            margin="normal" />
          {errors.email && <span>{errors.email}</span>}

          <TextField type={"number"}
            name="phonenum"
            value={formData.phonenum}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter PhoneNo'
            margin="normal" />
          {errors.phonenum && <span>{errors.phonenum}</span>}
          <TextField type={"text"}
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter Country'
            margin="normal" />
          <TextField type={"password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter Password'
            margin="normal" />
          {errors.password && <span>{errors.password}</span>}
          <div className='flex' style={{display:"flex",gap:"10px"}}>
            <Button type={"reset"}
              onClick={(e)=>handleReset(e)}
              variant='contained'
              sx={{ marginTop: 3, borderRadius: 3 }}>
              Reset
            </Button>
            <Button type="submit"
              variant='contained'
              sx={{ marginTop: 3, borderRadius: 3 }}>Sign up</Button>
          </div>
        </Box>
      </form>

    </div>
  )
}
export default Signup