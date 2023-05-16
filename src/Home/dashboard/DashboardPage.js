import PropTypes from "prop-types";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import React from "react";
import { Box } from "@mui/material";
import { useAuth } from "../../component/auth";
import { Button } from "@mui/material";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../service/UserService";

export const DashboardPage = (props) => {
  const { difference, positive = false, sx, value } = props;
  const [userEmail, setUserEmail] = useState([]);
  const [totalseller, setTotalseller] = useState([]);
  const [totalcustomer, setTotalcustomer] = useState([]);
  const [totaladmin, setTotaladmin] = useState([]);
  const [sumOfSpent, setSumOfSpent] = useState([]);
  const [totalproduct, setTotalproduct] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    UserService.totalEmail().then((res) => setUserEmail(res.data));
    UserService.totalSeller().then((res) => setTotalseller(res.data));
    UserService.totalCustomer().then((res) => setTotalcustomer(res.data));
    UserService.totalAdmin().then((res) => setTotaladmin(res.data));
    UserService.sumofspent().then((res) => setSumOfSpent(res.data));
    UserService.totalProduct().then((res) => setTotalproduct(res.data));
  }, []);
  const handleLogout = () => {
    auth.logout();
    navigate("/Home");
  };

  return (
    <>
      <h1>Welcome {auth.user}</h1>
      <Button onClick={handleLogout}>logout</Button>
      <Stack direction="row">
        <Card sx={{ width: "50%", ...sx }}>
          <CardContent>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography color="text.secondary" variant="overline">
                  <b>Total Users</b>
                </Typography>
                <Typography variant="h4">{userEmail}</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#ffc6d3",
                  height: 56,
                  width: 56,
                }}
              >
                <SvgIcon>
                  <UsersIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
        <Box sx={{ mx: 2 }} />
        <Card sx={{ width: "50%", ...sx }}>
          <CardContent>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography color="text.secondary" variant="overline">
                  <b>Total Customer</b>
                </Typography>
                <Typography variant="h4">{totalcustomer}</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#c1c7ff",
                  height: 56,
                  width: 56,
                }}
              >
                <SvgIcon>
                  <UsersIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      <Box sx={{ my: 3 }} />
      <Stack direction="row">
        <Card sx={{ width: "50%", ...sx }}>
          <CardContent>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography color="text.secondary" variant="overline">
                  <b>Total Seller</b>
                </Typography>
                <Typography variant="h4">{totalseller}</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#adebff",
                  height: 56,
                  width: 56,
                }}
              >
                <SvgIcon>
                  <UsersIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
        <Box sx={{ mx: 2 }} />
        <Card sx={{ width: "50%", ...sx }}>
          <CardContent>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography color="text.secondary" variant="overline">
                  <b>Total Admin</b>
                </Typography>
                <Typography variant="h4">{totaladmin}</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#C2EFCD",
                  height: 56,
                  width: 56,
                }}
              >
                <SvgIcon>
                  <UsersIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      <Box sx={{ my: 3 }} />
      <Stack direction="row">
        <Card sx={{ width: "50%", ...sx }}>
          <CardContent>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography color="text.secondary" variant="overline">
                  <b>Total Profit</b>
                </Typography>
                <Typography variant="h4">{sumOfSpent}</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#e6fdab",
                  height: 56,
                  width: 56,
                }}
              >
                <SvgIcon>
                  <UsersIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
        <Box sx={{ mx: 2 }} />
        <Card sx={{ width: "50%", ...sx }}>
          <CardContent>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography color="text.secondary" variant="overline">
                  <b>Total Product</b>
                </Typography>
                <Typography variant="h4">{totalproduct}</Typography>
              </Stack>
              <Avatar
                sx={{
                  backgroundColor: "#fadeb1",
                  height: 56,
                  width: 56,
                }}
              >
                <SvgIcon>
                  cd
                  <UsersIcon />
                </SvgIcon>
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

DashboardPage.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  sx: PropTypes.object,
};
