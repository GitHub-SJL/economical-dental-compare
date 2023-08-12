import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Context } from "../../../context/contextProvider";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("userToken");
};
const isLoggedIn = () => {
  return getTokenFromLocalStorage() !== null;
};
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            알뜰치과비교
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to={isLoggedIn() ? "/logout" : "/login"}
          >
            {isLoggedIn() ? "로그아웃" : "로그인"}
          </Button>
          <Button color="inherit" component={Link} to="/join">
            회원가입
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}