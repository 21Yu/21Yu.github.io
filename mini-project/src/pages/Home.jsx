import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function Home() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 8, ml: 10}}>
            {/* Left-hand side card containing the bio and image */}
            <Card sx={{ width: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                {/* Rectangular Screenshot */}
                <img
                    src="/Yu.jpg"  // Replace with your actual image path
                    alt="Your Screenshot"
                    style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '8px' }} // Rectangular style
                />

                {/* Bio Paragraph */}
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Hello, I'm [Your Name].
                    </Typography>
                    <Typography variant="body1">
                        I'm a passionate developer with experience in building web applications. 
                        I'm currently exploring new technologies and looking forward to learning more about front-end frameworks.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Feel free to connect with me!
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Home;
