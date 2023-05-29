import React, { useState } from "react";
import { addcategory } from "../Service/Service";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Category() {
  const [Categorydata, setcategorydata] = useState({
    category: "",
    categotydescription: "",
  });
  const nevigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handelechange = (e) => {
    setcategorydata({
      ...Categorydata,
      [e.target.name]: e.target.value,
    });
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!Categorydata.category) {
      validationErrors.category = "Category Title is required";
    }
    if (!Categorydata.categotydescription) {
      validationErrors.categoryDescription = "Category Description is required";
    }
    if (Object.keys(validationErrors).length === 0) {
      // if no validation errors, submit the form
      addcategory(Categorydata).then((res) => {
        console.log(res.data);
        console.log("successfully added");
        nevigate("/product");
      });
    } else {
      setErrors(validationErrors);
    }
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
          <Typography variant="h5" padding={1} textalign="center">
            {" "}
            Add Category
          </Typography>
          <TextField
            type={"text"}
            value={Categorydata.category}
            name="category"
            onChange={(e) => {
              handelechange(e);
            }}
            variant="outlined"
            placeholder="Enter Category"
            margin="normal"
          />
          {errors.category && (
            <span style={{ color: "red" }}>{errors.category}</span>
          )}

          <TextField
            type={"textarea"}
            value={Categorydata.categotydescription}
            name="categotydescription"
            onChange={(e) => {
              handelechange(e);
            }}
            variant="outlined"
            placeholder="Enter Category Description"
            margin="normal"
          />
          {errors.categoryDescription && (
            <span style={{ color: "red" }}>{errors.categoryDescription}</span>
          )}
          <Button
            type={"submit"}
            variant="contained"
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Add Category
          </Button>
        </Box>
      </form>
    </div>
  );
}
export default Category;
