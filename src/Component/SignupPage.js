import React, { useState } from "react";
import { Link } from "@mui/material";
import axios from "axios";
import LoginIcon from "@mui/icons-material/Login";
import {
  Select,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    phoneNo: "",
    userType: "",
  });
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  let passwordError = "";
  let passwordValid = validatePassword(password);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "password") {
      setPassword(value);
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleLoginIconClick = () => {
    navigate("/LoginPage");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!passwordValid) {
      passwordError =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }
    if (passwordValid) {
      try {
        const checkUserResponse = await axios.get(
          `http://localhost:8080/payment/checkuser?email=${formData.email}`
        );
        if (checkUserResponse.data.exists) {
          setMessage("This email address is already registered.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            userType: "",
            phoneNo: "",
            country: "",
          });
          setPassword("");
        } else {
          const saveUserResponse = await axios.post(
            "http://localhost:8080/payment/saveuser",
            formData
          );
          setMessage("You have successfully signed up.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            userType: "",
            phoneNo: "",
            country: "",
          });
          setPassword("");
        }
      } catch (error) {
        console.log(error);
        setMessage("An error occurred while submitting the form.");
      }
    } else {
      setMessage("Provide a valid password.");
    }
  };

  return (
    <Box
      sx={{
        width: "400px",
        margin: "auto",
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
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              margin="4"
              required
              fullWidth
              sx={{ my: 0 }}
              marginTop={0}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              sx={{ my: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              sx={{ my: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              value={password}
              onChange={handleChange}
              margin="normal"
              type="password"
              required
              fullWidth
              sx={{ my: 0 }}
              error={Boolean(message && passwordError)}
              helperText={message && passwordError ? passwordError : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              sx={{ my: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              sx={{ my: 0 }}
            />
          </Grid>
          <Grid item xs={12} sx={{ ml: 0 }}>
            <FormControl size="medium" sx={{ width: "100%" }}>
              <InputLabel>User Type</InputLabel>
              <Select
                label="User Type"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                sx={{ my: 0, height: "100%" }}
                required
              >
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Seller">Seller</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "12px",
            }}
          >
            {/* <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mr: 2 }}
              style={{ backgroundColor: "#9C27B0" }}
            >
              <b>Signup</b>
            </Button> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#9C27B0" }}
            >
              <b>Signup</b>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <h4
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "38px",
              }}
            >
              Are You already a Member?{" "}
              <span
                onClick={handleLoginIconClick}
                style={{
                  color: "#9C27B0",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
              >
                Login here
              </span>
            </h4>
          </Grid>

          {message && <p sx={{ mt: 3 }}>{message}</p>}
        </Grid>
      </form>
    </Box>
  );
};

export default SignupPage;
