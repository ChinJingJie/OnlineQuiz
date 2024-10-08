import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Home({setBrandName , setMenuItems , setlLoginText}) {

  useEffect(() => {
    setMenuItems([]);
  }, [setMenuItems]);

  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default, // Set background color from the theme
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" color="primary">
        QuizCraze
      </Typography>
      <Typography variant="subtitle1" color="secondary">
        Have a Quiz, Win the Craze!
      </Typography>
    </Box>
  );
}

export default Home;
