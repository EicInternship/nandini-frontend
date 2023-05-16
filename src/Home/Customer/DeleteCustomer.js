import React from "react";
import axios from "axios";
import { Await } from "react-router";
import { useState } from "react";
import { useLocation } from "react-router";

const DeleteCustomer = () => {
  const handleDeleteClick = async (event, id) => {
    event.preventDefault();

    console.log(`in delete function ${id}`);

    try {
      const response = await axios.get(
        `http://localhost:8080/payment/deleteuser?id=${id}`
      );

      if (response.status === 200) {
        setMessage(`User ${id} deleted successfully!`);
      } else {
        setMessage("Error Occured");
      }
    } catch (error) {
      setMessage("Error Occured");
      console.log(error);
    }
  };
  const location = useLocation();
  const { id } = location.state; // Retrieve customer data from state
  console.log("id is", id);
  const [message, setMessage] = useState("");
  return (
    <div>
      <h2>Delete Customer</h2>
      <p>Are you sure you want to delete Customer with id={id}?</p>
      <button onClick={(event) => handleDeleteClick(event, id)}>Delete</button>
    </div>
  );
};

export default DeleteCustomer;
