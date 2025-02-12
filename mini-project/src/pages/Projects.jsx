import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid2 } from '@mui/material';

function Projects() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8, gap: 4 }}>

            {/* Projects Title */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                My Projects
            </Typography>

            {/* Solo Projects Section */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, mt: 2, textAlign: 'center' }}>
                Solo Projects
            </Typography>
            <Grid2 container spacing={4} justifyContent="center" alignItems="stretch">
                {/* Solo Project 1 */}
                <Grid2 item xs={12} sm={6} md={4}>
                    <Card sx={{     width: 400,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-between', // Ensures content is spread out properly
                                        height: '100%', // Ensures the card stretches to match the other cards
                                        p: 2 }}>
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
                </Grid2>

                {/* Solo Project 2 */}
                <Grid2 item xs={12} sm={6} md={4}>
                    <Card sx={{     width: 400,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-between', // Ensures content is spread out properly
                                        height: '100%', // Ensures the card stretches to match the other cards
                                        p: 2 }}>
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
                </Grid2>

                {/* Add more solo projects similarly */}
            </Grid2>

            {/* Team Projects Section */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 6, mb: 2, textAlign: 'center' }}>
                Team Projects
            </Typography>
            <Grid2 container spacing={4} justifyContent="center" alignItems="stretch">
                {/* Team Project 1 */}
                <Grid2 item xs={12} sm={6} md={4}>
                    <Card sx={{     width: 400,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-between', // Ensures content is spread out properly
                                        height: '100%', // Ensures the card stretches to match the other cards
                                    p: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/Menu_Mayhem.jpg"  // Replace with your screenshot path
                            alt="Menu_Mayhem"
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Menu Mayhem
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, whiteSpace: 'normal' }}>
                                Bring order to the chaos of friend groups not being able to pick where to eat out!
                                Use Menu Mayhem to come to harmony and find out where you will eat!
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                href="https://devpost.com/software/menu-mayhem"  // Replace with your project link
                                target="_blank"
                            >
                                View Project
                            </Button>
                        </CardContent>
                    </Card>
                </Grid2>

                {/* Team Project 2 */}
                <Grid2 item xs={12} sm={6} md={4}>
                    <Card sx={{     width: 400,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-between', // Ensures content is spread out properly
                                    height: '100%', // Ensures the card stretches to match the other cards
                                    p: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/Leaf_To_Success.png"  // Replace with your screenshot path
                            alt="Leaf To Success"
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Leaf To Success
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                A personal portfolio built using React and Material-UI to showcase my work.
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                href="https://devpost.com/software/leaf-to-success"  // Replace with your project link
                                target="_blank"
                            >
                                View Project
                            </Button>
                        </CardContent>
                    </Card>
                </Grid2>

                {/* Add more Team projects similarly */}
            </Grid2>
        </Box>
    );
}

export default Projects;
