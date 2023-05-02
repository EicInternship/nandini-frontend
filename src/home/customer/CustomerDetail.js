//
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Typography } from "@mui/material";

const containerStyle = {
  padding: "16px",
  margin: "16px",
  backgroundColor: "#fff",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
  borderRadius: "8px",
  fontWeight: "bold",
};

const titleStyle = {
  fontWeight: "bold",
  backgroundColor: "#ffff",
};

const subtitleStyle = {
  marginTop: "8px",
};

const CustomerDetail = () => {
  const [user1, setUser1] = useState({});
  const [user2, setUser2] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          `http://localhost:9090/order/customerdetail?id=${params.id}`
        );
        setUser1(response1.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get(
          `http://localhost:8080/payment/customerdetail?id=${params.id}`
        );
        setUser2(response2.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);

  const user = { ...user1, ...user2 };

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
