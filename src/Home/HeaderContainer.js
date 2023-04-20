import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const HeaderContainer = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));

const Header = () => {
  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};

export default Header;
