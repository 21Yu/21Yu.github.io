import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Skills from '../components/skills';  // Import the Skills component

function Home() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 8, ml: 10 }}>
            {/* Left-hand side card containing the bio and image */}
            <Card sx={{ width: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, mr: 4 }}>
                {/* Rectangular Screenshot */}
                <img
                    src="/Yu.jpg"  // Replace with your actual image path
                    alt="Your Screenshot"
                    style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '8px' }} // Rectangular style
                />

                {/* Bio Paragraph */}
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Hello, I'm YU
                    </Typography>
                    <Typography variant="body1">
                        I'm a Computer Science student with a strong interest in software engineering, 
                        machine learning, and blockchain technology. I continuously expand my knowledge through hands-on projects and problem-solving.
                    </Typography>
                </CardContent>
            </Card>

            {/* Right-hand side card containing the Skills component */}
            <Skills />
        </Box>
    );
}

export default Home;
