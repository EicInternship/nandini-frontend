import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React from "react";
import { Typography } from "@mui/material";

const containerStyle = {
  padding: "16px",
  margin: "16px",
  backgroundColor: "#fff",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
  borderRadius: "8px",
  fontWeight:"bold",
};

const titleStyle = {
  fontWeight: "bold",
  
  backgroundColor: "#ffff",
  
};

const subtitleStyle = {
  marginTop: "8px",
};

const CustomerDetail = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/customerdetail?id=${params.id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [params.id]);

  return (
    <div style={containerStyle}>
      <Typography variant="h4" style={titleStyle}>
        Id: {user.id}
      </Typography>
      <Typography variant="h5" style={subtitleStyle}>
        <b>Name:</b> {user.firstName} {user.lastName}
      </Typography>
      <Typography variant="h5" style={subtitleStyle}>
        <b>Email:</b> {user.email}
      </Typography>
      <Typography variant="h5" style={subtitleStyle}>
        <b>Registered Date:</b> {user.signupDate}
      </Typography>
      <Typography variant="h5" style={subtitleStyle}>
        <b>Country:</b> {user.country}
      </Typography>
      <Typography variant="h5" style={subtitleStyle}>
        <b>Group:</b> {user.userType}
      </Typography>
    </div>
  );
};

export default CustomerDetail;
