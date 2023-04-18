import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Person3Icon from "@mui/icons-material/Person3";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/material/styles";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ForgetPassword from "./ForgetPassword";
import { Route, Link, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";

import logo from "./icon.png";

const drawerWidth = 240;

const StyledDashboardIcon = styled(DashboardIcon)({
  color: "black",
  "&:hover": {
    color: "#004280",
  },
});

const StyledLaptopMacIcon = styled(LaptopMacIcon)({
  color: "black",
  "&:hover": {
    color: "#004280",
  },
});

const StyledPersonIcon = styled(Person3Icon)({
  color: "black",
  "&:hover": {
    color: "#004280",
  },
});

const StyledshoppingCart = styled(ShoppingCartIcon)({
  color: "black",
  "&:hover": {
    color: "#004280",
  },
});

const StyledFavoriteBorderOutlined = styled(FavoriteBorderOutlinedIcon)({
  color: "black",
  "&:hover": {
    color: "#004280",
  },
});

const StyledMailIcon = styled(MailOutlinedIcon)({
  color: "black",
  "&:hover": {
    color: "#004280",
  },
});

export default function Admin() {
  const location = useLocation();
  const [isCustomerOpen, setIsCustomerOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <img
            src={logo}
            sx={{ flexGrow: 1 }}
            alt="logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <h2>Ecommerce Website</h2>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ backgroundColor: "black" }}
          ></Typography>
          <br />
          <Link to="/SignupPage">
            <Button variant="outlined" color="success" className="btn">
              Signup
            </Button>
          </Link>
          <Link to="/LoginPage">
            <Button variant="outlined" color="success" className="btn">
              Login
            </Button>
          </Link>{" "}
          <br />
          <br />
          <Link to="/ForgetPassword"></Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              "Dashboard",
              "catalog",
              "Customers",
              "Orders",
              "Marketing",
              "Inbox",
            ].map((text, index) => (
              
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => setIsCustomerOpen(!isCustomerOpen)}
                >
                  <ListItemIcon>
                    {index === 0 && <StyledDashboardIcon />}
                    {index === 1 && <StyledLaptopMacIcon />}
                    {index === 2 && <StyledPersonIcon />}
                    {index === 3 && <StyledshoppingCart />}
                    {index === 4 && <StyledFavoriteBorderOutlined />}
                    {index === 5 && <StyledMailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  <ExpandMore />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography>
          <Routes>
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
          </Routes>
        </Typography>
      </Box>
    </Box>
  );
}
// <ListItem key={text} disablePadding>
//   <ListItemButton>
//     <ListItemIcon>
//       {index === 0 && <StyledDashboardIcon />}
//       {index === 1 && <StyledLaptopMacIcon />}
//       {index === 2 && <StyledPersonIcon />}
//       {index === 3 && <StyledshoppingCart />}
//       {index === 4 && <StyledFavoriteBorderOutlined />}
//       {index === 5 && <StyledMailIcon />}
//     </ListItemIcon>
//     <ListItemText primary={text} />
//   </ListItemButton>
// </ListItem>
