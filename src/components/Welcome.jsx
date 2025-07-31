import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          mt: 6,
          px: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' },
              color: '#2e8bc0',
            }}
          >
            Wel<span style={{ color: '#1c1c1e' }}>come_ I'm Vis</span>hak K v_
          </Typography>

          <Typography variant="h5" sx={{ mt: 2, color: '#2e8bc0', fontWeight: 400 }}>
            I'm React.js Developer
          </Typography>

          <Typography sx={{ mt: 3, fontSize: '1.2rem', color: '#444', lineHeight: 1.6 }}>
            Hi!😊 I'm a passionate frontend developer who loves turning ideas into interactive,
            responsive, and visually appealing web applications. I specialize in building smooth
            user experiences using React.js and modern web technologies.
          </Typography>

          <Typography sx={{ mt: 2, fontSize: '1.2rem', color: '#444', lineHeight: 1.6 }}>
            I enjoy crafting reusable components, optimizing performance, and writing clean,
            maintainable code. Whether it’s building from scratch or improving existing systems,
            I bring dedication and a pixel-perfect approach to every project I work on.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: '1rem',
              color: '#2e8bc0',
              fontStyle: 'italic',
              fontWeight: 500,
            }}
          >
            "Creating with code isn't just my profession — it's my passion."
          </Typography>

          {/* Buttons */}
          <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {[
              { label: 'View Projects', to: '/projects', filled: true },
              { label: 'About Me', to: '/about', outline: true },
              { label: 'View Resume', to: '/resume', light: true },
            ].map(({ label, to, filled, outline, light }) => (
              <Button
                key={label}
                onClick={() => navigate(to)}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: '20px',
                  textTransform: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease-in-out',
                  ...(filled && {
                    backgroundColor: '#2e8bc0',
                    color: '#fff',
                    boxShadow: '0px 4px 12px rgba(46, 139, 192, 0.3)',
                    '&:hover': {
                      backgroundColor: '#1c6ca1',
                      boxShadow: '0px 6px 16px rgba(28, 108, 161, 0.4)',
                    },
                  }),
                  ...(outline && {
                    backgroundColor: '#fff',
                    color: '#2e8bc0',
                    border: '2px solid #2e8bc0',
                    '&:hover': {
                      backgroundColor: '#e6f4fa',
                    },
                  }),
                  ...(light && {
                    backgroundColor: '#f4f4f4',
                    color: '#2e8bc0',
                    border: '1px solid #ccc',
                    '&:hover': {
                      backgroundColor: '#e0f0f8',
                    },
                  }),
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </motion.div>

        {/* Right Visual Box */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            flex: 1,
            width: '100%',
            maxWidth: 480,
            height: 300,
            borderRadius: 20,
            background: '#ffffff',
            boxShadow: '0 0 40px rgba(46, 139, 192, 0.2)',
          }}
        /> */}
      </Box>

      {/* Footer */}
      <Box sx={{ width: '100%', mt: 6 }}>
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
            Made with <span style={{ color: 'red' }}>❤️</span> by Vishak KV
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;




// // Welcome.jsx
// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const Welcome = () => {
//   const navigate = useNavigate();
//   return (
//     <Box sx={{ maxWidth: '1200px', mx: 'auto', mt: 6, px: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
//       <motion.div initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} style={{ flex: 1 }}>
//         <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' }, color: '#2e8bc0' }}>
//           Wel<span style={{ color: '#1c1c1e' }}>come</span>
//         </Typography>
//         <Typography variant="h5" sx={{ mt: 2, color: '#2e8bc0', fontWeight: 400 }}>
//           React Frontend Developer
//         </Typography>
//         <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//             {[
//                 { label: 'View Projects', to: '/projects', filled: true },
//                 { label: 'About Me', to: '/about', outline: true },
//                 { label: 'View Resume', to: '/resume', light: true },
//             ].map(({ label, to, filled, outline, light }) => (
//                 <Button
//                 key={label}
//                 onClick={() => navigate(to)}
//                 sx={{
//                     px: 3,
//                     py: 1,
//                     borderRadius: '20px',
//                     textTransform: 'none',
//                     fontWeight: 600,
//                     transition: 'all 0.3s ease-in-out',
//                     ...(filled && {
//                     backgroundColor: '#2e8bc0',
//                     color: '#fff',
//                     boxShadow: '0px 4px 12px rgba(46, 139, 192, 0.3)',
//                     '&:hover': {
//                         backgroundColor: '#1c6ca1',
//                         boxShadow: '0px 6px 16px rgba(28, 108, 161, 0.4)',
//                     },
//                     }),
//                     ...(outline && {
//                     backgroundColor: '#fff',
//                     color: '#2e8bc0',
//                     border: '2px solid #2e8bc0',
//                     '&:hover': {
//                         backgroundColor: '#e6f4fa',
//                     },
//                     }),
//                     ...(light && {
//                     backgroundColor: '#f4f4f4',
//                     color: '#2e8bc0',
//                     border: '1px solid #ccc',
//                     '&:hover': {
//                         backgroundColor: '#e0f0f8',
//                     },
//                     }),
//                 }}
//                 >
//                 {label}
//                 </Button>
//             ))}
//             </Box>

//       </motion.div>
//       {/* <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} style={{ flex: 1, width: '100%', maxWidth: 480, height: 300, borderRadius: 20, background: '#ffffff', boxShadow: '0 0 40px rgba(46, 139, 192, 0.2)' }} /> */}
//     </Box>
//   );
// };

// export default Welcome;
