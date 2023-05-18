import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";

const theme = createTheme();

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resetpasswordemail = await axios.post(
        `http://localhost:8080/payment/checkEmailForReset`,
        formData.email
      );
      console.log(formData.email);
      if (resetpasswordemail.status === 200) {
        setMessage("password sent successfully in your provided Email id");
        setFormData({
          email: "", // Clearing the email value
        });
      }
    } catch (error) {
      console.log(error);
      setMessage("Please check your email");
      setFormData({
        email: "", // Clearing the email value
      });
      console.log("Email is not here in the database");
    }
  };

  const handleBackToLogin = () => {
    navigate("/LoginPage");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: -10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Box
              // component="form"
              // // onSubmit={handleSubmit}
              // noValidate
              sx={{ mt: 1 }}
            >
              {formData ? (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter Email Adress"
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e, "email");
                  }}
                  autoFocus
                />
              ) : (
                ""
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#9C27B0" }}
              >
                <b>Reset password</b>
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <h4
                    onClick={handleBackToLogin}
                    style={{ cursor: "pointer", color: "#9C27B0" }}
                  >
                    Go to Login Page
                  </h4>
                </Grid>
                <Grid item xs={12}>
                  <p>{message}</p>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgetPassword;
