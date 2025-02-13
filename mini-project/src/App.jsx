import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Ensure you have a Footer component

// Define a dark theme with white text
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // White text for Navbar and Tabs
    },
    secondary: {
      main: '#00ff00', // Green secondary color (optional)
    },
    background: {
      default: '#000000', // Black background for the entire page
      paper: '#222222', // Dark gray for cards, modals, etc.
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#cccccc', // Light gray text
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures background and text color are applied globally */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer /> {/* Ensures the footer is styled properly */}
    </ThemeProvider>
  );
}

export default App;
