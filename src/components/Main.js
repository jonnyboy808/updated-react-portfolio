import React from "react";
import Navbar from "./Navbar";

// using mui for react styling
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/MenuRounded";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

// set up for  appbar
function Main(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pages = [], setCurrentPage, currentPage } = props;

  const drawerEl = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navbar menu popup
  // pop back navbar menu
  const drawer = (
    <Box
      onClick={drawerEl}
      sx={{ textAlign: "center", backgroundColor: "black" }}>
      <Typography
        variant="h4"
        sx={{my: 3, fontWeight: "bold", color: "white", textDecoration: "underline", }}>
        Menu
      </Typography>
      <List sx={{ textAlign: "center" }}>
        <ListItem>
          <ListItemButton>
            <Navbar
              pages={pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  // Navbar styling
  return (
    <Box dock="fixed">
      <AppBar component="Navbar">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <IconButton
            onClick={drawerEl}
            sx={{ color: "rgba(150, 38, 254, 0.928)", display: { md: "none" } }}>
            <MenuIcon sx={{ fontSize: 45 }} />
          </IconButton>

          {/* My name in the top left of every page */}
          <Typography sx={{ flex: 1, fontSize: "25px" }}>
            Jonathan's Portfolio
          </Typography>

          {/* Navbar links styling */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button>
              <Navbar
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navbar that comes from clicking 3 lines */}
      <Box component="Drawer">
        {" "}
        <Drawer
          open={mobileOpen}
          onClose={drawerEl}
          sx={{ display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { width: drawerElWidth } }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

const drawerElWidth = 190;

export default Main;
