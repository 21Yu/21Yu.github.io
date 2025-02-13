import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid2 } from '@mui/material';
import Footer from '../components/Footer';  
import Navbar from '../components/Navbar';


function Projects() {
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
                <Navbar />

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8, gap: 4, flexGrow: 1 }}>
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
                                image="/music_streaming.png"  // Replace with your screenshot path
                                alt="Music-Streaming"
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Music-Streaming
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, whiteSpace: 'normal' }}>
                                "Music-Streaming" is a sleek and responsive website built for the artist evergn., designed to showcase their music and provide 
                                seamless access to various streaming platforms. 
                                </Typography>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    href="https://github.com/21Yu/music-streaming"  // Replace with your project link
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
                                image="/daily-routine.png"  // Replace with your screenshot path
                                alt="daily-routine"
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    daily-routine
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, whiteSpace: 'normal' }}>
                                    "Daily Routine" is an interactive web application that visualizes how different lifestyles structure their day.
                                    The project allows users to explore and compare the daily schedules of a loafer, slave, retiree, and billionaire through an intuitive dropdown menu.
                                </Typography>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    href="https://github.com/21Yu/daily-routine"  // Replace with your project link
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

            <Footer />
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

export default Projects;
