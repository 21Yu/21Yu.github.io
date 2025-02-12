import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem } from '@mui/material';

function About() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8, gap: 4 }}>
            
            {/* Education Section */}
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Education
            </Typography>
            <Card sx={{ width: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <img
                    src="/SFU.png"  // Your SFU image in the public folder
                    alt="SFU Campus"
                    style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '8px' }}
                />
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

            {/* Work Experience Section */}
            <Typography variant="h4" sx={{ mt: 6, mb: 2, fontWeight: 'bold' }}>
                Work Experience
            </Typography>
            <Box sx={{ display: 'flex', gap: 8 }}>
                {/* Edo Japan - Cook */}
                <Card sx={{ width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                    <img
                        src="/EDO.png"  // Your SFU image in the public folder
                        alt="EDO Japan"
                        style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '8px' }}
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Cook - Edo Japan
                        </Typography>
                        <Typography variant="body2">
                            <strong>Transferable Skills:</strong>
                            <List sx={{ padding: 0 }}>
                                <ListItem sx={{ display: 'list-item' }}>Teamwork: Collaborated with a diverse team.</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Time Management: Worked under pressure to meet deadlines.</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Attention to Detail: Ensured quality control.</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Problem-Solving: Resolved kitchen issues quickly.</ListItem>
                            </List>
                        </Typography>
                    </CardContent>
                </Card>

                {/* Yifang - Barista */}
                <Card sx={{ width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                    <img
                        src="/yifang.jpeg"  // Your SFU image in the public folder
                        alt="Yifang"
                        style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '8px' }}
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Barista - Yifang Taiwan Fruit Tea
                        </Typography>
                        <Typography variant="body2">
                            <strong>Transferable Skills:</strong>
                            <List sx={{ padding: 0 }}>
                                <ListItem sx={{ display: 'list-item' }}>Customer Communication: Engaged with customers effectively.</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Multi-tasking: Managed multiple orders simultaneously.</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Attention to Detail: Ensured accuracy in orders.</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Problem-Solving: Addressed customer issues quickly.</ListItem>
                            </List>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

export default About;
