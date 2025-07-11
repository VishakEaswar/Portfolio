import React, { useState } from 'react';
import {
  Toolbar,
  Typography,
  Box,
  Paper,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'RESUME', path: '/resume' },
  ];

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          px: 3,
          py: 1.5,
          maxWidth: '95%',
          mx: 'auto',
          mt: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1c1c1e' }}>
            PORT<span style={{ color: '#2e8bc0' }}>FOLIO</span>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                onClick={() => setOpenDrawer(true)}
                sx={{ color: '#2e8bc0' }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <Box sx={{ width: 220 }} role="presentation">
                  <List>
                    {navLinks.map((item) => (
                      <ListItem
                        button
                        key={item.name}
                        component={Link}
                        to={item.path}
                        onClick={() => setOpenDrawer(false)}
                        
                      >
                        <ListItemText
                          primary={item.name}
                         sx={{
                    color: '#1c1c1e',
                    fontWeight: 500,
                    mx: 1,
                    '&:hover': { color: '#2e8bc0',fontWeight:'bold' },
                  }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              {navLinks.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: '#1c1c1e',
                    fontWeight: 500,
                    mx: 1,
                    '&:hover': { color: '#2e8bc0',fontWeight:'bold' },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Paper>
    </>
  );
};

export default Navbar;



// // Navbar.jsx
// import React from 'react';
// import { Toolbar, Typography, Box, Paper, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <Paper elevation={3} sx={{ backgroundColor: '#ffffff', borderRadius: '20px', px: 4, py: 1.5, maxWidth: '90%', mx: 'auto', mt: 2 }}>
//       <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
//         <Typography variant="h6" sx={{ fontWeight: 600, color: '#1c1c1e' }}>
//           PORT<span style={{ color: '#2e8bc0' }}>FOLIO</span>
//         </Typography>
//         <Box>
//           {[{ name: 'HOME', path: '/' }, { name: 'ABOUT', path: '/about' }, { name: 'PROJECTS', path: '/projects' }, { name: 'CONTACT', path: '/contact' }, { name: 'RESUME', path: '/resume' }].map((item) => (
//             <Button key={item.name} component={Link} to={item.path} sx={{ color: '#1c1c1e', fontWeight: 500, mx: 1, '&:hover': { color: '#2e8bc0' } }}>
//               {item.name}
//             </Button>
//           ))}
//         </Box>
//       </Toolbar>
//     </Paper>
//   );
// };

// export default Navbar;