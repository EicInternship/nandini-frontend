import axios from "axios";
import { useState } from "react";
import { Button, TextField, Box, Grid, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import MoodIcon from "@mui/icons-material/Mood";
import React from "react"
import MoodBadIcon from "@mui/icons-material/MoodBad";


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/payment/validuser?email=${formData.email}&password=${formData.password}`
      );

      if (response.data.isValidUser) {
        setMessage("Login successful!");
        setFormData({
          email: "",
          password: "",
        });
      } else if (response.data.isEmailValid) {
        setMessage("Password is incorrect. Please try again.");
        setFormData({
          password: "",
        });
      } else {
        setMessage("Invalid credentials. Please sign up.");
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setMessage("Error Occured");
      setFormData({
        email: "",
        password: "",
      });
      console.log(error);
    }
  };
  const passwordLength = formData.password.length;
  let emoji = <LockOutlinedIcon />;
  if (passwordLength >= 8) {
    emoji = <MoodIcon />;
  } else if (passwordLength > 5) {
    emoji = <MoodBadIcon />;
  }

  return (
    <Box
      sx={{
        width: "400px",
        margin: "auto",
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{emoji}</Avatar>
      <Typography component="h1" variant="h5">
        LOGIN
      </Typography>
      <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ my: 3 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              required
              sx={{ my: -2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={({ mr: 2 }, { my: 3 })}
              style={{
                backgroundColor: "#9C27B0",
                alignContent: "center",
                display: "flex",
              }}
            >
              <b>Login</b>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p>{message}</p>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default LoginPage;
