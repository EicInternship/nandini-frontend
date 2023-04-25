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
import { useEffect, useState } from "react";
import { UserService } from "../../service/UserService";
import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const Customer = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteruser, setFilterUser] = useState([]);
  const [error, setError] = useState("");
  const [Id, setId] = useState(null);

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const innerTheme = createTheme({
    palette: {
      primary: {
        main: orange[600],
      },
    },
  });
  const handleDeleteOperation = (event, id) => {
    console.log("ID IS:" + id);
    navigate("/Delete", { state: { id } });
  };

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
        <Button
          sx={{ fontWeight: "bold" }}
          component={Link}
          to="/Add"
          size="small"
          variant="outlined"
          className="btn"
          style={{
            backgroundColor: "#FFA500",
            fontSize: "15px",
            alignItems: "center",
            borderWidth: "2px",
            marginLeft: "705px",
            marginTop: "-55px",
            color: "black",
          }}
        >
          <PersonAddAlt1Icon />
          <b> Customer</b>
        </Button>
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
                <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
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
                  <TableCell>{users.id}</TableCell>
                  <TableCell>
                    {users.firstName + " " + users.lastName}
                  </TableCell>
                  <TableCell>{users.signupDate}</TableCell>
                  <TableCell>{users.country}</TableCell>
                  <TableCell>{users.userType}</TableCell>
                  <TableCell>
                    <Button>
                      <AddIcon />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={(event) => {
                        handleDeleteOperation(event, users.id);
                        console.log("id is " + users.id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
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
