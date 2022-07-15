import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "react-modern-drawer";

import { Badge } from "@mui/material";

const pages = ["SHOP", "OUR STORY", "BLOG", "HELP"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "#FFFFFF",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{
              color: "#3E583F",
              display: { xs: "flex", md: "none" },
              margin: "0",
            }}
            onClick={handleOpenNavMenu}
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "400",
                  fontFamily: "Proxima Nova",
                  fontStyle: "normal",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: "1rem",
                    fontWeight: "400",
                    fontFamily: "Proxima Nova",
                    fontStyle: "normal",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>
          <Box>
            <img src="../Assets/icons/logo.svg" alt="logo" />
          </Box>
          <Badge badgeContent={4} color="secondary">
            <Button onClick={toggleDrawer}>
              <img src="../Assets/icons/bagicon.svg" alt="cart" />
            </Button>
          </Badge>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="cart-container">
          <div>
            <h1 className="mycart">
              <img src="../Assets/Icons/right icon.svg" alt="cart" />
              My Cart <span className="cart-items">(1 Items)</span>
            </h1>
          </div>
        </div>
        <hr className="hr-color" />
        <div className="cart-product-details">
          <img
            src="../Assets/images/product image 1.jpg"
            alt="product"
            width="100px"
            margin="10px"
          />
          <div>
            <h1>Superfood Clenaser</h1>
            <h6>16.09 OZ</h6>
            <h3>$30.99</h3>
          </div>
        </div>
        <Button sx={{ color: "#AAAAAA" }}>Remove</Button>
        <div className="cart-bottom">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3E583F",
              color: "#FFFFFF",
              fontFamily: "Proxima Nova",
              fontWeight: "500",
              fontSize: "20px",
              width: "100%",
              mt: "10px",
              "&:hover": {
                backgroundColor: "#5E8760",
              },
            }}
          >
            $30-CHECKOUT{" "}
          </Button>
          <p>
            *Shipping, taxes, and discount codes are calculated at next step
          </p>
        </div>
      </Drawer>
    </>
  );
};
export default Navbar;
