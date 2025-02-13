import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Skills from '../components/skills';  
import Footer from '../components/Footer';  

function Home() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' // Ensures the page is at least the height of the screen
    }}>
      
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
      <Footer />
      
    </Box>
  );
}

export default Home;
