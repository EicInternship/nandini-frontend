import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
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
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Person3Icon from "@mui/icons-material/Person3";
import logo from "./icon.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SignupPage from "../Component/SignupPage";
import LoginPage from "../Component/LoginPage";
import { Routes, Route } from "react-router-dom";
import Customer from "./Customer";
import { Marketing } from "./Marketing";
import { Inbox } from "./Inbox";
import { Order } from "./Order";
import { Catalog } from "./Catalog";
const drawerWidth = 200;

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

const Dashboard = ({ to, primaryText, secondaryText }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
          <Typography variant="h4" noWrap component="div">
            Ecommerce Website
          </Typography>{" "}
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
          </Link>
          <Link to="/"></Link>
          <Link to="/Catalog"></Link>
          <Link to="/Customer"></Link>
          <Link to="/Marketing"></Link>
          <Link to="/Order"></Link>
          <Link to="/Inbox"></Link>
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
        <DrawerHeader>
          <img
            src={logo}
            sx={{ flexGrow: 1 }}
            alt="logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
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
          {[
            "Dashboard",
            "Catalog",
            "Customer",
            "Marketing",
            "Order",
            "Inbox",
          ].map((text, index) => (
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
            //     {/* <Link to={`/${text == "Customer" ? text : ""}`}>{text}</Link> */}
            //   </ListItemButton>
            // </ListItem>

            <ListItem button components={Link} to={to}>
              <ListItemText
                primary={primaryText}
                secondary={secondaryText}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Box component="main" sx={{ flexGrow: 12, p: 12 }}>
        <Typography>
          <Routes>
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Customer" element={<Customer />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/Marketing" element={<Marketing />} />
          </Routes>
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
