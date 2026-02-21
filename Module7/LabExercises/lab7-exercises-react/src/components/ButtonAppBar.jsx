import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserProvider";

export default function ButtonAppBar() {
  const { currentUser } = useContext(userContext);

  return (
      <AppBar position="fixed">
        <Toolbar>
          {/* Left side (Icon + Title) */}
          <Box sx={{display: "flex", alignItems: "center", gap:1}}>

          <IconButton
            component={NavLink}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon/>
          </IconButton>
          <Typography variant="h6" component="div">
            INSTITUTE OF DATA - COHORT 2025-10-07-SE-PT-AU-NZ
          </Typography>
          </Box>

          {/* This pushes the contents below to the right. */}
          <Box sx={{ flexGrow: 1 }}/>

          {/* Right side buttons */}
          {currentUser ? ( <>
          <Box sx={{ display: "flex"}}>
          <Button component={NavLink} to="/tasks" color="inherit" sx={{ mr: 3 }}>
              Completed Tasks
            </Button>
            <Button component={NavLink} to="/rates" color="inherit" sx={{ mr: 3 }}>
              BitCoin Rates
            </Button>
            <Button component={NavLink} to="/login" color="inherit">
            Logout
          </Button> </Box></>
          ) : <Button component={NavLink} to="/login" color="inherit">
            Login
          </Button>}
        </Toolbar>
      </AppBar>
  );
}
