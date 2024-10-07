import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default, // Set background color from the theme
        minHeight: '100vh', // Full height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2), // Padding from the theme
      }}
    >
      <Typography variant="h1" color="primary">
        QuizCraze
      </Typography>
      <Typography variant="body1" color="secondary">
        Have a Quiz, Win the Craze!
      </Typography>
    </Box>
  );
}

export default App;
