import React, { useState } from "react";
import { login } from "../Service/Service";
import { Link, json } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import Cookies from 'js-cookie';
export default function Login() {
  const [loginDetails, setlogingdetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e, property) => {
    setlogingdetails({ ...loginDetails, [property]: e.target.value });
  };
  const nevigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    login(loginDetails)
      .then((res) => {
        // Cookies.set('jwtToken', res.data, { expires: 7 });
        localStorage.setItem("jwt", res.data);
        alert(res.data);
        console.log("succesful login");
        document.getElementById("p").innerHTML = "you are loggded in";
        nevigate("/Home");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          document.getElementById("p").innerHTML =
            "User not found please sign in";
        } else {
          document.getElementById("p").innerHTML =
            "An error occurred. Please try again.";
        }
      });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px,10px,20px,#ccc",
            },
          }}
        >
          <Typography variant="h5" padding={3} textalign="center">
            Login
          </Typography>
          <TextField
            type={"email"}
            variant="outlined"
            value={loginDetails.email}
            placeholder="Enter email"
            margin="normal"
            onChange={(e) => {
              handleChange(e, "email");
            }}
          />
          <TextField
            type={"password"}
            value={loginDetails.password}
            variant="outlined"
            placeholder="Password"
            margin="normal"
            onChange={(e) => {
              handleChange(e, "password");
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Login
          </Button>
          Are you not a member?<Link to="/signup">signup</Link>
          <p id="p"></p>
        </Box>
      </form>
    </div>
  );
}
