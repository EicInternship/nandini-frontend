import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  TablePagination,
} from "@mui/material";
import { Checkbox } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";
import { InputBase } from "@mui/material";
import { useEffect, useState } from "react";
import { UserService } from "../../service/UserService";
import React from "react";
import { alpha } from "@mui/material";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { Link, Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const Customer = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteruser, setFilterUser] = useState([]);
  const [error, setError] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    UserService.getUser().then((res) => setUser(res.data));
  }, []);

  const filteredData = user.filter(
    (u) =>
      u.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const frm = useFormik({
    initialValues: {
      id: "",
    },
    onSubmit: (values) => {
      const filteredUser = user.filter(
        (user1) => user1.firstName === values.id
      );
      setFilterUser(filteredUser);

      if (filteredUser.length === 0) {
        setError(`User with Name ${values.id} not found.`);
        setFilterUser([]);
      } else {
        setError("");
        setFilterUser(filteredUser);
      }
    },
  });

  const data = filteruser.length > 0 ? filteruser : filteredData;

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const visibleData = data.slice(start, end);

  const options = ["Add", "Delete", "Update"];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    if (option === "Add") {
      navigate("/Add");
      handleClose();
    } else if (option === "Delete") {
      handleClose();
      navigate("/Delete");
    } else {
      handleClose();
      navigate("/Update");
    }
  };
  const innerTheme = createTheme({
    palette: {
      primary: {
        main: orange[600],
      },
    },
  });
  return (
    <div style={{ margin: "auto" }}>
      <div>
        <form onSubmit={frm.handleSubmit}>
          <SearchIcon />

          <TextField
            name="id"
            onChange={frm.handleChange}
            placeholder="Enter Customer Name"
            variant="standard"
          />
          <Button
            size="small"
            type="submit"
            variant="outlined"
            className="btn"
            style={{
              backgroundColor: "#FFA500",
              fontSize: "15px",
              //margin: "7px",
              // marginBottom:"30px",
              alignItems: "center",
              borderWidth: "2px",
              marginLeft: "11px",
              color: "black",
            }}
          >
            <b>submit</b>
          </Button>
        </form>
      </div>

      {error && <p className="error">{error}</p>}
      {filteredData.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="customer table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <ThemeProvider theme={innerTheme}>
                    <Checkbox />
                  </ThemeProvider>
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Registered</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Country</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Group</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleData.map((users) => (
                <TableRow key={users.email}>
                  <TableCell>
                    <ThemeProvider theme={innerTheme}>
                      <Checkbox />
                    </ThemeProvider>
                  </TableCell>
                  <TableCell>
                    {users.firstName + " " + users.lastName}
                  </TableCell>
                  <TableCell>{users.signupDate}</TableCell>
                  <TableCell>{users.country}</TableCell>
                  <TableCell>{users.userType}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Add"}
                          onClick={() => handleMenuItemClick(option)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </div>
  );
};

export default Customer;
