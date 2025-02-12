import React from 'react';
import { Box, Typography, Card, CardContent, Link} from '@mui/material';
import Skills from '../components/skills';  // Import the Skills component
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"; // Add social media icons

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
            <Box sx={{ flex: 1 }}>
                <Skills />

                {/* Social Media Links (Placed below Skills) */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 8 }}>
                    <Link href="https://github.com/21Yu" target="_blank" sx={{ color: 'inherit' }}>
                        <FaGithub size={30} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yu-wu-a283492a5/" target="_blank" sx={{ color: 'inherit' }}>
                        <FaLinkedin size={30} />
                    </Link>
                    {/* <Link href="https://twitter.com/yourusername" target="_blank" sx={{ color: 'inherit' }}>
                        <FaTwitter size={30} />
                    </Link>
                    <Link href="https://www.facebook.com/yourusername" target="_blank" sx={{ color: 'inherit' }}>
                        <FaFacebook size={30} />
                    </Link> */}
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
