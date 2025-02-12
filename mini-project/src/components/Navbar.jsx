import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
            <Tab label="Home" value="/" component={Link} to="/" />
            <Tab label="About" value="/about" component={Link} to="/about" />
            <Tab label="Projects" value="/projects" component={Link} to="/projects" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;