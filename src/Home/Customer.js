import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Checkbox } from "@mui/material";

import { useEffect, useState } from "react";
import { UserService } from "../Service/UserService";
import { Margin } from "@mui/icons-material";

const Customer = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    UserService().then((res) => setUser(res.data));
  }, []);

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
              {user.map((users) => (
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
    </div>
  );
};

export default Customer;
