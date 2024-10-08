// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#007BFF', // vibrant blue (for buttons, headers, etc.)
    },
    background: {
        default: '#FAF9F6', // soft-off white for background
    },
    success: {
        main: '#28A745', // emerald green for success / correct answers
    },
    text: {
        primary: '#212529', // black for primary text
    },
    secondary: {
        main: '#8ED1FC', // soft cyan for secondary elements
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
        fontWeight: 'bold',
    },
    h5: {
        fontWeight: 'bold',
    },
    h6: {
        fontWeight: 'medium',
    },
    subtitle1: {
        fontWeight: 'medium',
    },
    body1: {
        fontWeight: 'regular',
    },
  },
});

export default theme;