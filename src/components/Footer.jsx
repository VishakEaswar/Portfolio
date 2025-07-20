import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{
    width: '100%',
    py: 2,
    mt: 6,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    borderTop: '1px solid #e0e0e0',
  }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Vishak Easwar. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
