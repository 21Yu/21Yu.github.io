import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Skills from '../components/skills';  
import Footer from '../components/Footer';  
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', // Ensures the page is at least the height of the screen
      background: `
      radial-gradient(circle at 50% 50%, rgba(34, 139, 34, 0.9), rgba(0, 100, 0, 0.9), transparent),
      linear-gradient(120deg, rgba(0, 128, 0, 0.8), rgba(30, 120, 60, 0.8), rgba(34, 139, 34, 0.8))
    `,
      backgroundSize: '400% 400%, 300% 300%',
      backgroundBlendMode: 'overlay',
      animation: 'gradientFlow 15s linear infinite, gradientLayer 10s linear infinite',
      color: 'white'
    }}>
      {/* <Navbar /> */}
      
      {/* Main Content */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexGrow: 1, p: 8, ml: 10 }}>
        {/* Left-hand side card containing the bio and image */}
        <Card sx={{ width: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, mr: 4 }}>
          <img
            src="/Yu.jpg"  
            alt="Your Screenshot"
            style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '8px' }}
          />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Overview
            </Typography>
            <Typography variant="body1">
              I'm a Computer Science student with a strong interest in software engineering,
              machine learning, and blockchain technology. I continuously expand my knowledge through hands-on projects and problem-solving.
            </Typography>
          </CardContent>
        </Card>

        {/* Right-hand side content */}
        <Box sx={{ flexGrow: 1, textAlign: "center", mt: 4 }}>
          <Typography variant="h4" sx={{ mb: 2, mt: 4, fontWeight: "bold" }}>
            Hello, I'm YU, and I build amazing things.
          </Typography>
          <Skills />
        </Box>
      </Box>

      {/* Footer (Sticks to the bottom) */}
      {/* <Footer /> */}
      
    </Box>

    {/* Keyframes Animation */}
    <style>
    {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 300% 50%; }
          }

          @keyframes gradientLayer {
            0% { background-position: 50% 0%; }
            100% { background-position: 50% 300%; }
          }
        `}
    </style>
  </>
  );
}

export default Home;
