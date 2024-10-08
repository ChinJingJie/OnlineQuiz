import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{
        p: 2,
        textAlign: 'center',
        bgcolor: theme.palette.primary.main,
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="subtitle1" color="white">
        © {new Date().getFullYear()} QuizCraze. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
