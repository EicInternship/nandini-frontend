import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { useFormik } from "formik";
import { Checkbox } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";
import { InputBase } from "@mui/material";
import { useEffect, useState } from "react";
import { UserService } from "../../Service/UserService";
import React from "react";
import { alpha } from "@mui/material";

const Customer = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  useEffect(() => {
    UserService().then((res) => setUser(res.data));
  }, []);

  const filteredData = user.filter(
    (u) =>
      u.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const visibleData = filteredData.slice(start, end);

  return (
    <div style={{ margin: "auto" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={handleSearch}
        />
      </Search>
      {filteredData.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="customer table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
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
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    {users.firstName + " " + users.lastName}
                  </TableCell>
                  <TableCell>{users.signupDate}</TableCell>
                  <TableCell>{users.country}</TableCell>
                  <TableCell>{users.userType}</TableCell>
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
        rowsPerPageOptions={[5, 10]}
      />
    </div>
  );
};

export default Customer;
