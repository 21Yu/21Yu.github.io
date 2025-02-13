import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        // mt: 8, 
        py: 4, 
        textAlign: "center", 
        backgroundColor: '#222222', 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center" 
      }}
    >
      {/* Social Media Links */}
      <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
        <Link href="https://github.com/21Yu" target="_blank" sx={{ color: "inherit" }}>
          <FaGithub size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/yu-wu-a283492a5/" target="_blank" sx={{ color: "inherit" }}>
          <FaLinkedin size={30} />
        </Link>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" color='white'>
        © {new Date().getFullYear()} Yu Wu. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
