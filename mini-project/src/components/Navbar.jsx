import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";


export default function ColorTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: '#222222' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="navigation tabs"
        centered
      >
        <Tab value="/" label="Home" component={Link} to="/" sx={{ width: 'auto' }} />
        <Tab value="/about" label="About" component={Link} to="/about" sx={{ width: 'auto' }} />
        <Tab value="/projects" label="Projects" component={Link} to="/projects" sx={{ width: 'auto' }} />
      </Tabs>
    </Box>
  );
}
