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
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
// import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import EditIcon from "@mui/icons-material/Edit";
import { ImUserPlus } from "react-icons/im";
import { Box } from "@mui/material";

const UserList = () => {
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

  // useEffect(() => {
  //   UserService.getUser().then((res) => setUser(res.data));
  // }, []);

  useEffect(() => {
    UserService.getUser().then((res) => {
      const updatedUsers = res.data.map((user) => {
        return {
          ...user,
          active: Math.random() > 0.5 ? "Active" : "Inactive",
        };
      });
      setUser(updatedUsers);
    });
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
  const handleUpdateOperation = (event, user) => {
    navigate("/Update", { state: { user } });
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
          to={{ pathname: "/Add", state: { replace: true } }}
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
          <ImUserPlus fontSize="20px" />
          <Box sx={{ mx: 0.4 }} />
          <b> Customer</b>
        </Button>
      </div>

      {error && <p className="error">{error}</p>}
      {filteredData.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="customer table">
            <TableHead>
              <TableRow>
                {/* <TableCell>
                  <ThemeProvider theme={innerTheme}>
                    <Checkbox />
                  </ThemeProvider>
                </TableCell> */}
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Id
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Registered
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Role
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Country
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Group
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Status
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Spent
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Edit
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleData.map((users) => (
                <TableRow key={users.email}>
                  <TableCell sx={{ fontSize: "16px" }}>{users.id}</TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={{
                        pathname: `/CustomerDetail/${users.id}`,
                        state: { replace: true },
                      }}
                    >
                      {users.firstName} {users.lastName}
                    </Link>
                  </TableCell>

                  <TableCell sx={{ fontSize: "16px" }}>
                    {users.signupDate}
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>{users.role}</TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>
                    {users.country}
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>
                    {users.userType}
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", fontSize: "16px" }}
                    style={{
                      color: users.active === "Active" ? "green" : "red",
                    }}
                  >
                    {users.active}
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>{users.spent}</TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>
                    <Button
                      onClick={(event) => {
                        handleUpdateOperation(event, users);
                      }}
                    >
                      <EditIcon style={{ color: "black" }} />
                    </Button>
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>
                    <Button
                      onClick={(event) => {
                        handleDeleteOperation(event, users.id);
                        console.log("id is " + users.id);
                      }}
                    >
                      <DeleteIcon style={{ color: "black" }} />
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

export default UserList;
