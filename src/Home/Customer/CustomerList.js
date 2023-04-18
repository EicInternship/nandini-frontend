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
import { Checkbox } from "@mui/material";

import { useEffect, useState } from "react";
import { UserService } from "../../Service/UserService";
import { Margin } from "@mui/icons-material";
import React from "react";
const Customer = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    UserService().then((res) => setUser(res.data));
  }, []);

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const visibleData = user.slice(start, end);

  return (
    <div style={{ margin: "auto" }}>
      {user.length > 0 && (
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
        count={user.length}
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
