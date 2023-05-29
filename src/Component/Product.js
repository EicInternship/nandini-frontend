import React, { useEffect, useState } from "react";
import { addproduct } from "../Service/Service";
import { getcategory } from "../Service/Service";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Product() {
  const [categories, setCategories] = useState(false);
  const nevigate = useNavigate();
  // useEffect(() => {
  //   axios.get("http://localhost:9020/category").then((res) => {
  //     setCategories(res.data);
  //   });
  // }, []);
  useEffect(() => {
    getcategory().then((res) => {
      setCategories(res.data);
    });
  }, []);
  const [productdata, setproductdata] = useState({
    pname: "",
    description: "",
    price: "",
    file: "",
    category: "",
  });
  const handelchange = (e, property) => {
    setproductdata({ ...productdata, [property]: e.target.value });
  };
  const handelimagechange = (e) => {
    setproductdata((prevproductdata) => ({
      ...prevproductdata,
      file: e.target.files[0],
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    addproduct(productdata).then((res) => {
      console.log(res.data);
      nevigate("/productcard");
    });
  };
  const printOptions = () => {
    return categories.map((category) => (
      <MenuItem key={category.id} value={category.category}>
        {category.category}
      </MenuItem>
    ));
  };
  return (
    <div>
      <form onSubmit={(e) => handelSubmit(e)}>
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
            Add Product
          </Typography>
          <TextField
            type={"text"}
            value={productdata.pname}
            onChange={(e) => {
              handelchange(e, "pname");
            }}
            variant="outlined"
            placeholder="Enter Product Name"
            margin="normal"
          />
          <TextField
            type={"text"}
            value={productdata.description}
            onChange={(e) => {
              handelchange(e, "description");
            }}
            variant="outlined"
            placeholder="Enter Product description"
            margin="normal"
          />
          <TextField
            type="Number"
            value={productdata.price}
            onChange={(e) => {
              handelchange(e, "price");
            }}
            variant="outlined"
            placeholder="Enter Product Price"
            margin="normal"
          />
          <Box sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productdata.category}
              label="Category"
              onChange={(e) => handelchange(e, "category")}
            >
              {categories ? printOptions() : ""}
            </Select>
          </Box>
          {/* <select name="category" id="category" onChange={e=>handleDropDownChange(e)}>
          <option selected disbale>Select Category</option>
          {
            categories ? printOptions(): ""
          }

        </select> */}
          {/* <lable>Product Image :</lable> */}
          <InputLabel id="demo-simple-file-label">
            Upload Product Image
          </InputLabel>
          <TextField
            type={"file"}
            variant="outlined"
            id="demo-simple-file-label"
            placeholder="Upload Product Image"
            margin="normal"
            onChange={(e) => {
              handelimagechange(e);
            }}
          />
          <Button
            type={"submit"}
            variant="contained"
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {" "}
            submit
          </Button>
        </Box>
      </form>
    </div>
  );
}
export default Product;
