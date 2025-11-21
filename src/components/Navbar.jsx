import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box, Grid
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

import bannerImg from "../assets/react.svg";
import ExpandMore from "@mui/icons-material/ExpandMore";


export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#1976D2", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Tech Bridge
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button onClick={() => navigate("/")}>Home</Button>

          {/* Services Dropdown */}
          <Button endIcon={<ExpandMoreIcon />} onClick={openMenu}>
            Services
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
            MenuListProps={{ onMouseLeave: closeMenu }}
          >
            <Grid container sx={{ p: 2, width: 500 }}>
              {/* Left Side */}
              <Grid item xs={7}>
                <MenuItem onClick={() => { navigate("/hr-services"); closeMenu(); }}>
                  • HR Services
                </MenuItem>
                <MenuItem onClick={() => { navigate("/software-services"); closeMenu(); }}>
                  • Software Development
                </MenuItem>
                <MenuItem onClick={() => { navigate("/supply-chain"); closeMenu(); }}>
                  • Supply Chain / Logistics
                </MenuItem>
                <MenuItem onClick={() => { navigate("/saas-products"); closeMenu(); }}>
                  • SaaS Products
                </MenuItem>
              </Grid>

              {/* Right Side Image */}
              <Grid item xs={5}>
                <img
                  src={bannerImg}
                  style={{ width: "100%", borderRadius: 12 }}
                  alt="services"
                />
              </Grid>
            </Grid>
          </Menu>
        </Box>

        <Button variant="contained" sx={{ borderRadius: 2 }}>
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
}
