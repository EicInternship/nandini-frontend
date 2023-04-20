import * as React from "react";
import { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Collapse } from "@mui/material";
import { Dashboard, ExpandMore } from "@mui/icons-material";
import { ExpandLess } from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Button } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Person3Icon from "@mui/icons-material/Person3";
import ErrorIcon from "@mui/icons-material/Error";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SignupPage from "../Component/SignupPage";
import LoginPage from "../Component/LoginPage";
import { Routes, Route } from "react-router-dom";
import CustomerList from "./Customer/CustomerList";
import { Marketing } from "./Marketing";
import { Inbox } from "./Inbox";
import { Order } from "./Order";
import { Catalog } from "./Catalog";
import { ErrorPage } from "./Error/ErrorPage";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

const drawerWidth = 250;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
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
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
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
const StyledCustomerIcon = styled(PeopleAltIcon)({
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
const StyledErrorIcon = styled(ErrorIcon)({
  color: "black",
  "&:hover": {
    color: "#004280",
  },
});
const StyledError1Icon = styled(ReportGmailerrorredRoundedIcon)({
  color: "black",
  "&:hover": {
    color: "#004280",
  },
});
const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [customerListOpen, setCustomerListOpen] = useState(false);
  const [errorListOpen, setErrorListOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleCustomerClick = () => {
    setCustomerListOpen(!customerListOpen);
  };
  const handleErrorClick = () => {
    setErrorListOpen(!errorListOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "black",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Ecommerce Website
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ backgroundColor: "black" }}
          ></Typography>
          <br />
          <Link to="/SignupPage">
            <Button
              variant="outlined"
              color="success"
              className="btn"
              style={{ borderWidth: "2px", marginRight: "2px" }}
            >
              <b>Signup</b>
            </Button>
          </Link>
          <Link to="/LoginPage">
            <Button
              variant="outlined"
              color="success"
              className="btn"
              style={{ borderWidth: "2px", marginLeft: "2px" }}
            >
              <b>Login</b>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{ backgroundColor: "#FFD333" }}>
          <Button
            variant="outlined"
            color="success"
            className="btn"
            style={{ borderWidth: "2px" }}
          >
            <b>Admin</b>
          </Button>
          {/* <img
            src={logo}
            sx={{ flexGrow: 1 }}
            alt="logo"
            style={{ height: "40px", marginRight: "10px" }}
          /> */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton component={Link} to="/Dashboard">
            <ListItemIcon>
              <StyledDashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={Link} to="/Catalog">
            <ListItemIcon>
              <StyledLaptopMacIcon />
            </ListItemIcon>
            <ListItemText primary="Catalog" />
          </ListItemButton>

          <ListItemButton onClick={handleCustomerClick}>
            <ListItemIcon>
              <StyledPersonIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
            {customerListOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={customerListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="Customer/CustomerList"
              >
                {/* onClick={handleDrawerClose} */}
                <ListItemIcon>
                  <StyledCustomerIcon />
                </ListItemIcon>
                <ListItemText primary="Customer List" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton component={Link} to="/Marketing">
            <ListItemIcon>
              <StyledFavoriteBorderOutlined />
            </ListItemIcon>

            <ListItemText primary="Marketing" />
          </ListItemButton>
          <ListItemButton component={Link} to="/Order">
            <ListItemIcon>
              <StyledshoppingCart />
            </ListItemIcon>

            <ListItemText primary="Orders" />
          </ListItemButton>
          <ListItemButton component={Link} to="/Inbox">
            <ListItemIcon>
              <StyledMailIcon />
            </ListItemIcon>

            <ListItemText primary="Inbox" />
          </ListItemButton>
          <ListItemButton onClick={handleErrorClick}>
            <ListItemIcon>
              <StyledErrorIcon />
            </ListItemIcon>

            <ListItemText primary="ErrorPage" />
            {errorListOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={errorListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="ErrorPage">
                <ListItemIcon>
                  <StyledError1Icon />
                </ListItemIcon>
                <ListItemText primary="404" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Box component="main" sx={{ flexGrow: 12, p: 12 }}>
        <Typography>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="Customer/CustomerList" element={<CustomerList />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/Marketing" element={<Marketing />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
