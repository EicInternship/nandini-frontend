import axios from "axios";
import { useState } from "react";
import { Button, TextField, Box, Grid, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import MoodIcon from "@mui/icons-material/Mood";
import React from "react";
import jwtDecode from "jwt-decode";
import { UserService } from "../service/UserService";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import { useAuth } from "./auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { replace } from "formik";
const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPage = location.state?.path || "/ProductCard";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const auth = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // auth.login(formData);
    UserService.login(formData)
      .then((res) => {
        localStorage.setItem("jwt", res.data);
        console.log(res.data);
        console.log(jwtDecode(res.data).sub);
        console.log(jwtDecode(res.data));
        // alert(res.data);
        auth.login(jwtDecode(res.data).sub);
        console.log("succesful login");
        setMessage("You Are Logged In");
        navigate(redirectPage, { replace: true });
        setFormData({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          setMessage("User is Not Found");
          setFormData({
            email: "",
            password: "",
          });
        } else {
          setMessage("Error Occured during Login");
          setFormData({
            email: "",
            password: "",
          });
        }
      });
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
              onChange={(e) => {
                handleChange(e, "email");
              }}
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
              onChange={(e) => {
                handleChange(e, "password");
              }}
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
