import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function About() {
    return (
        <Box sx={{ textAlign: 'center', p: 8 }}>
            {/* Education Title */}
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                Education
            </Typography>

            {/* About Section Card */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ width: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                    {/* SFU Screenshot */}
                    <img
                        src="/SFU.png"  // Replace with the actual image path of SFU
                        alt="SFU Campus"
                        style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '8px' }}
                    />

                    {/* Description */}
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Simon Fraser University
                        </Typography>
                        <Typography variant="body1">
                            I am currently a Computer Science student at SFU. I am passionate about solving problems and 
                            continuously improving my technical skills.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

export default About;
