import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  IconButton,
  Link,
} from '@mui/material';
import { Email, LinkedIn, Instagram, Phone, Chat } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ open: false, success: true, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nv7da2j',    // Replace with your actual service ID
        'template_1jnxf9v',   // Replace with your actual template ID
        form.current,
        '-Tac636q3K_ot4ebX'     // Replace with your actual public key
      )
      .then(
        () => {
          setAlert({ open: true, success: true, message: 'Message sent successfully!' });
          form.current.reset();
        },
        () => {
          setAlert({ open: true, success: false, message: 'Failed to send message. Try again.' });
        }
      );
  };

  return (
    <Box sx={{ maxWidth: '700px', mx: 'auto', mt: 2, px: 2, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h4"
          sx={{ color: '#2e8bc0', fontWeight: 600, mb: 3, textAlign: 'center' }}
        >
          📬 Contact Me
        </Typography>

        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={2} sx={{display:'flex',justifyContent:'center'}}>
            <Grid size={{ xs: 12, sm: 12 ,md:10 }}>
              <TextField
                label="Name"
                name="user_name"
                fullWidth
                required
                variant="standard"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12 ,md:10 }}>
              <TextField
                label="Email"
                name="user_email"
                fullWidth
                required
                variant="standard"
              />
            </Grid>
            <Grid size={{ xs: 12 , sm: 12 ,md:10 }}>
              <TextField
                label="Phone"
                name="user_phone"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12 ,md:12}}>
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
                variant="filled"
              />
            </Grid>
            <Grid size={{ xs: 12 }} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  px: 4,
                  fontWeight: 600,
                  backgroundColor: '#2e8bc0',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#1c6ca1' },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Social Links */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#2e8bc0', mb: 1 }}>
            Or reach me at:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              component={Link}
              href="mailto:vishakeaswer@gmail.com"
              target="_blank"
              sx={{ color: '#d44638' }}
            >
              <Email />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              sx={{ color: '#0a66c2' }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component={Link}
              href="https://instagram.com/yourhandle"
              target="_blank"
              sx={{ color: '#e1306c' }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              component={Link}
              href="tel:+919876543210"
              sx={{ color: '#4caf50' }}
            >
              <Phone />
            </IconButton>
            <IconButton
              component={Link}
              href="sms:+919876543210"
              sx={{ color: '#ff9800' }}
            >
              <Chat />
            </IconButton>
          </Box>
        </Box>
      </Paper>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
          Made with <span style={{ color: 'red' }}>❤️</span> by Vishak KV
        </Typography>
      </Box>

      {/* Snackbar Notification */}
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;



// import React from 'react';
// import {
//   Box,
//   Typography,
//   Paper,
//   TextField,
//   Button,
//   Grid,
//   IconButton,
//   Link,
// } from '@mui/material';
// import { Email, LinkedIn, Instagram, Phone } from '@mui/icons-material';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import ChatIcon from '@mui/icons-material/Chat';

// const Contact = () => {
//   return (
//     <Box sx={{ maxWidth: '700px', mx: 'auto', mt: 8, px: 2, mb: 6 }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
//         <Typography
//           variant="h4"
//           sx={{
//             color: '#2e8bc0',
//             fontWeight: 600,
//             mb: 3,
//             textAlign: 'center',
//           }}
//         >
//           📬 Contact Me
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid size={{ xs: 12, sm: 6 ,md:8}}>
//             <TextField id="nameField" label="Name" fullWidth variant="outlined" />
//           </Grid>
//           <Grid size={{ xs: 12, sm: 6 ,md:8}}>
//             <TextField id="emailField" label="Email" fullWidth variant="outlined" />
//           </Grid>
//           <Grid size={{ xs: 12, sm: 6 ,md:12}}>
//             <TextField id="phoneField" label="Phone" fullWidth variant="outlined" />
//           </Grid>
//           <Grid size={{ xs: 12}}>
//             <TextField
//                 id="messageField"
//                 label="Message"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 variant="outlined"
//                 />
//           </Grid>
//         </Grid>

//         <Box textAlign="center">
//          <Button
//             variant="contained"
//             sx={{
//                 mt: 3,
//                 backgroundColor: '#2e8bc0',
//                 textTransform: 'none',
//                 px: 4,
//                 fontWeight: 600,
//                 '&:hover': { backgroundColor: '#1c6ca1' },
//             }}
//             onClick={() => {
//                 const name = document.getElementById('nameField').value;
//                 const email = document.getElementById('emailField').value;
//                 const phone = document.getElementById('phoneField').value;
//                 const message = document.getElementById('messageField').value;

//                 const mailtoLink = `mailto:youremail@example.com?subject=Message from ${name}&body=From: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;

//                 window.location.href = mailtoLink;
//             }}
//             >
//             Send Message
//             </Button>

//         </Box>

//         {/* Contact Icons */}
//         <Box sx={{ mt: 4, textAlign: 'center' }}>
//           <Typography variant="h6" sx={{ color: '#2e8bc0', mb: 1 }}>
//             Or reach me at:
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//             <IconButton
//               component={Link}
//               href="mailto:youremail@example.com"
//               target="_blank"
//               sx={{ color: '#d44638' }}
//             >
//               <Email />
//             </IconButton>
//             <IconButton
//               component={Link}
//               href="https://linkedin.com/in/yourprofile"
//               target="_blank"
//               sx={{ color: '#0a66c2' }}
//             >
//               <LinkedIn />
//             </IconButton>
//             <IconButton
//               component={Link}
//               href="https://instagram.com/yourhandle"
//               target="_blank"
//               sx={{ color: '#e1306c' }}
//             >
//               <Instagram />
//             </IconButton>
//             {/* Phone call */}
//                 <IconButton
//                     component={Link}
//                     href="tel:+919876543210"
//                     sx={{ color: '#4caf50' }}
//                 >
//                     <Phone />
//                 </IconButton>

//                 {/* SMS Message */}
//                 <IconButton
//                     component={Link}
//                     href="sms:+919876543210"
//                     sx={{ color: '#ff9800' }}
//                 >
//                     <ChatIcon /> {/* Or use a message icon like ChatIcon */}
//                 </IconButton>
//           </Box>
//         </Box>
//       </Paper>

//       {/* Footer */}
//       <Box sx={{ textAlign: 'center', mt: 4 }}>
//         <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
//           Made with <span style={{ color: 'red' }}>❤️</span> by Vishak KV
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Contact;
