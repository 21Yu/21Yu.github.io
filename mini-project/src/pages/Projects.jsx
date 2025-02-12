import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';

function Projects() {
    return (
        <Box sx={{ p: 8 }}>
            
            {/* Projects Title */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                My Projects
            </Typography>

            {/* Solo Projects Section */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                Solo Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {/* Solo Project 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/project1-screenshot.png"  // Replace with your screenshot path
                            alt="Project 1 Screenshot"
                        />
                        <CardContent>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Project 1: Weather App
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                A weather forecasting application using React and OpenWeather API.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                href="https://github.com/yourusername/weather-app"  // Replace with your project link
                                target="_blank"
                            >
                                View Project
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Solo Project 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/project2-screenshot.png"  // Replace with your screenshot path
                            alt="Project 2 Screenshot"
                        />
                        <CardContent>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Project 2: Portfolio Website
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                A personal portfolio built using React and Material-UI to showcase my work.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                href="https://github.com/yourusername/portfolio"  // Replace with your project link
                                target="_blank"
                            >
                                View Project
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Add more solo projects similarly */}
            </Grid>

            {/* Team Projects Section */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 6, mb: 2, textAlign: 'center' }}>
                Team Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {/* Team Project 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/hackathon-project1-screenshot.png"  // Replace with your screenshot path
                            alt="Hackathon Project 1 Screenshot"
                        />
                        <CardContent>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Hackathon Project 1: Real-time Chat App
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                A real-time chat application developed during a hackathon using Node.js and WebSockets.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                href="https://github.com/yourusername/chat-app"  // Replace with your project link
                                target="_blank"
                            >
                                View Project
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Team Project 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/hackathon-project2-screenshot.png"  // Replace with your screenshot path
                            alt="Hackathon Project 2 Screenshot"
                        />
                        <CardContent>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Hackathon Project 2: Smart Health Tracker
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                A health tracker app built with a team for a hackathon that syncs data with wearables.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                href="https://github.com/yourusername/smart-health-tracker"  // Replace with your project link
                                target="_blank"
                            >
                                View Project
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Add more team projects similarly */}
            </Grid>
        </Box>
    );
}

export default Projects;
