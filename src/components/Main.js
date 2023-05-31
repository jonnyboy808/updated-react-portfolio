// SOURCE: Material UI Docs for Responsive App Bar with Drawer
// https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer

import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/MenuRounded";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const drawerElWidth = 190;

// set up for  appbar 
function Main(props) {
  const { window } = props;
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
      <Typography variant="h4" sx={{ my: 3, fontWeight: "bold", color: "white", textDecoration: "underline" }}>
        Menu
      </Typography>
      <List sx={{ textAlign: "center" }}>
        <ListItem>
          <ListItemButton>
            <Navbar
              pages={pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // Navbar styling
  return (
    <Box posistion="fixed">
      <AppBar component="Navbar">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <IconButton
            onClick={drawerEl}
            sx={{ color: "rgba(150, 38, 254, 0.928)", display: { md: "none" } }}>
            <MenuIcon  sx={{ fontSize: 45 }} />
          </IconButton>

          {/* My name in the top left of every page */}
          <Typography
            sx={{ flex: 1,  fontSize: "25px"  }}>
            Jonathan's Portfolio
          </Typography>

          {/* Navbar links styling */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button>
              <Navbar
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navbar that comes from clicking 3 lines */}
      <Box component="Drawer">
        {" "}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={drawerEl}
          sx={{ display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: drawerElWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Main;