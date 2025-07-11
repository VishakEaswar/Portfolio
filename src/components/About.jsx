import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Grid,
  Link,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

import { GitHub, LinkedIn, Facebook, Instagram } from '@mui/icons-material';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiFirebase
} from 'react-icons/si';


const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        px: 2,
        py: 4,
        mt:2
      }}
    >
      <Box sx={{ maxWidth: '1100px', mx: 'auto' }}>
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#fff' }}>
          <Typography variant="h4" sx={{ color: '#2e8bc0', mb: 4, fontWeight: 600, textAlign: 'center' }}>
            About Me
          </Typography>

          {/* Introduction */}
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
                🧑‍💻 Introduction
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1" sx={{ color: '#1c1c1e', lineHeight: 1.8 }}>
                I'm <strong>Vishak KV</strong>, a React Frontend Developer passionate about building dynamic, responsive user interfaces.
                I hold a Bachelor's degree in <strong>Electrical and Electronics Engineering (EEE)</strong> from Anna University.
                <br /><br />
                I worked at <strong>Swastika Digital Systems</strong> as a <strong>Testing and Development Engineer</strong>, gaining hands-on experience
                with ESP32, ESP8266, and firmware development.
                <br /><br />
                I completed a <strong>Frontend Development course</strong> at Karka Software Academy, mastering React, Material UI, and deployment tools.
                I’m open to job opportunities and <strong>willing to relocate</strong> for growth-focused roles.
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* What I Do */}
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
                👨‍💻 What I Do
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                - Build reusable components and responsive layouts using React and MUI. <br />
                - Integrate APIs and manage dynamic data using state management. <br />
                - Create real-world apps including dashboards, admin panels, and service platforms.
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Tech Stack */}
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
                🔧 Tech Stack
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0, lineHeight: 2 }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <SiReact color="#61DBFB" size={18} /> React.js
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <SiJavascript color="#f7df1e" size={18} /> JavaScript (ES6+)
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <SiHtml5 color="#e34c26" size={18} /> HTML5
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <SiCss3 color="#264de4" size={18} /> CSS3
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0, lineHeight: 2 }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      Material UI
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <SiBootstrap color="#7910f2" size={18} /> Bootstrap
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <SiFirebase color="#FFA611" size={18} /> Firebase (Learning)
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          <Divider sx={{ my: 4 }} />

          {/* Career Timeline */}
          <Typography variant="h6" sx={{ color: '#2e8bc0', mb: 3, }}>
            🗓 Career Timeline
          </Typography>
          <Box sx={{ display: 'flex', }}>
            <Timeline position="alternate">

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ textAlign: '' }}>
                  <Typography fontWeight={600}>2024</Typography>
                  <Typography>Frontend Development Course</Typography>
                  <Typography variant="body2">Karka Software Academy</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ textAlign: '' }}>
                  <Typography fontWeight={600}>2018 - 2024</Typography>
                  <Typography>Testing & Development Engineer</Typography>
                  <Typography variant="body2">Swastika Digital Systems</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ textAlign: '' }}>
                  <Typography fontWeight={600}>2015 - 2018</Typography>
                  <Typography>Bachelor Degree - EEE</Typography>
                  <Typography variant="body2">St. Xavier's Catholic College of Engineering </Typography>
                </TimelineContent>
              </TimelineItem>

               <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  
                </TimelineSeparator>
                <TimelineContent sx={{ textAlign: '' }}>
                  <Typography fontWeight={600}>2012 - 2015</Typography>
                  <Typography>Diploma - EEE</Typography>
                  <Typography variant="body2">Sun Inistitute Of Technology</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Personal Details */}
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
                📇 Personal Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                <strong>Name:</strong> Vishak KV <br />
                <strong>Email:</strong>{' '}
                <Link href="mailto:vishakkv.dev@gmail.com" sx={{ color: '#2e8bc0' }}>
                  vishakeaswer@gmail.com
                </Link><br />
                <strong>Phone:</strong>{' '}
                {/* <Link href="tel:+919876543210" sx={{ color: '#2e8bc0' }}> */}
                  +91 9500754102 <br />
                {/* </Link><br /> */}
                <strong>Location:</strong> Kottar, Nagercoil,<br /> Kaniyakumari, TamilNadu.
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Link href="https://github.com/vishakkv" target="_blank" sx={{ display: 'inline-flex', alignItems: 'center', color: '#2e8bc0' }}>
                    <GitHub sx={{ mr: 0.5 }} /> GitHub
                </Link>
                <Link href="https://linkedin.com/in/vishakkv" target="_blank" sx={{ display: 'inline-flex', alignItems: 'center', color: '#2e8bc0' }}>
                    <LinkedIn sx={{ mr: 0.5 }} /> LinkedIn
                </Link>
                <Link href="https://instagram.com/your_instagram" target="_blank" sx={{ display: 'inline-flex', alignItems: 'center', color: '#2e8bc0' }}>
                    <Instagram sx={{ mr: 0.5 }} /> Instagram
                </Link>
                <Link href="https://facebook.com/your_facebook" target="_blank" sx={{ display: 'inline-flex', alignItems: 'center', color: '#2e8bc0' }}>
                    <Facebook sx={{ mr: 0.5 }} /> Facebook
                </Link>
                </Box>

            </Grid>
          </Grid>
        </Paper>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
            Made with <span style={{ color: 'red' }}>❤️</span> by Vishak KV
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;




// import React from 'react';
// import {
//   Box,
//   Typography,
//   Paper,
//   Divider,
//   Grid,
//   Link,
// } from '@mui/material';
// import {
//   Timeline,
//   TimelineItem,
//   TimelineSeparator,
//   TimelineConnector,
//   TimelineContent,
//   TimelineDot,
// } from '@mui/lab';
// import { GitHub, LinkedIn } from '@mui/icons-material';

// const About = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         backgroundColor: '#f9f9f9',
//         px: 2,
//         py: 4,
//       }}
//     >
//       <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
//         <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#fff' }}>
//           <Typography variant="h4" sx={{ color: '#2e8bc0', mb: 3, fontWeight: 600 }}>
//             About Me
//           </Typography>

//           {/* Introduction */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 🧑‍💻 Introduction
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Typography variant="body1" sx={{ color: '#1c1c1e', lineHeight: 1.8 }}>
//                 I'm <strong>Vishak KV</strong>, a React Frontend Developer passionate about building dynamic, responsive user interfaces.
//                 I hold a Bachelor's degree in <strong>Electrical and Electronics Engineering (EEE)</strong> from Anna University.
//                 <br /><br />
//                 I worked at <strong>Swastika Digital Systems</strong> as a <strong>Testing and Development Engineer</strong>, gaining hands-on experience
//                 with ESP32, ESP8266, and firmware development.
//                 <br /><br />
//                 I completed a <strong>Frontend Development course</strong> at Karka Software Academy, mastering React, Material UI, and deployment tools.
//                 I’m open to job opportunities and <strong>willing to relocate</strong> for growth-focused roles.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           {/* What I Do */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 👨‍💻 What I Do
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Typography variant="body1" sx={{ lineHeight: 2 }}>
//                 - Build reusable components and responsive layouts using React and MUI. <br />
//                 - Integrate APIs and manage dynamic data using state management. <br />
//                 - Focus on performance, accessibility, and SEO. <br />
//                 - Create real-world apps including dashboards, admin panels, and service platforms.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           {/* Tech Stack */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={5}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 🔧 Tech Stack
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Grid container spacing={5}>
//                 <Grid item xs={6}>
//                   <ul style={{ margin: 0, paddingLeft: '20px' }}>
//                     <li>React.js</li>
//                     <li>JavaScript (ES6+)</li>
//                     <li>HTML5 & CSS3</li>
//                     <li>Material UI</li>
//                   </ul>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <ul style={{ margin: 0, paddingLeft: '20px' }}>
//                     <li>Bootstrap</li>
//                     <li>Firebase</li>
//                     <li>Git & GitHub</li>
//                     <li>Framer Motion</li>
//                   </ul>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           {/* Career Timeline */}
//           <Typography variant="h6" sx={{ color: '#2e8bc0', mb: 2 }}>
//             🗓 Career Timeline
//           </Typography>
//           <Timeline position="alternate">
//             <TimelineItem>
//               <TimelineSeparator>
//                 <TimelineDot color="primary" />
//                 <TimelineConnector />
//               </TimelineSeparator>
//               <TimelineContent>
//                 <Typography fontWeight={600}>2024</Typography>
//                 <Typography>Frontend Development Course - Karka Software Academy</Typography>
//               </TimelineContent>
//             </TimelineItem>

//             <TimelineItem>
//               <TimelineSeparator>
//                 <TimelineDot color="primary" />
//                 <TimelineConnector />
//               </TimelineSeparator>
//               <TimelineContent>
//                 <Typography fontWeight={600}>2022 - 2023</Typography>
//                 <Typography>Testing & Development Engineer - Swastika Digital Systems</Typography>
//               </TimelineContent>
//             </TimelineItem>

//             <TimelineItem>
//               <TimelineSeparator>
//                 <TimelineDot color="primary" />
//               </TimelineSeparator>
//               <TimelineContent>
//                 <Typography fontWeight={600}>2018 - 2022</Typography>
//                 <Typography>BE - EEE, Anna University</Typography>
//               </TimelineContent>
//             </TimelineItem>
//           </Timeline>

//           <Divider sx={{ my: 4 }} />

//           {/* Personal Details */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 📇 Personal Details
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Typography variant="body1" sx={{ lineHeight: 2 }}>
//                 <strong>Name:</strong> Vishak KV <br />
//                 <strong>Email:</strong>{' '}
//                 <Link href="mailto:vishakkv.dev@gmail.com" sx={{ color: '#2e8bc0' }}>
//                   vishakkv.dev@gmail.com
//                 </Link><br />
//                 <strong>Phone:</strong>{' '}
//                 <Link href="tel:+919876543210" sx={{ color: '#2e8bc0' }}>
//                   +91 98765 43210
//                 </Link><br />
//                 <strong>Location:</strong> Tamil Nadu, India
//               </Typography>
//               <Box sx={{ mt: 2 }}>
//                 <Link href="https://github.com/vishakkv" target="_blank" sx={{ mr: 3, display: 'inline-flex', alignItems: 'center', color: '#2e8bc0' }}>
//                   <GitHub sx={{ mr: 0.5 }} /> GitHub
//                 </Link>
//                 <Link href="https://linkedin.com/in/vishakkv" target="_blank" sx={{ display: 'inline-flex', alignItems: 'center', color: '#2e8bc0' }}>
//                   <LinkedIn sx={{ mr: 0.5 }} /> LinkedIn
//                 </Link>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Footer */}
//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
//             Made with <span style={{ color: 'red' }}>❤️</span> by Vishak KV
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default About;




// import React from 'react';
// import { Box, Typography, Paper, Divider, Grid } from '@mui/material';

// const About = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         backgroundColor: '#f9f9f9',
//         px: 2,
//         py: 4,
//         mt: 2,
//       }}
//     >
//       {/* Main Content */}
//       <Box sx={{ maxWidth: '1440px', mx: 'auto', width: '100%' }}>
//         <Paper elevation={2} sx={{ p: 4, backgroundColor: '#ffffff' }}>
//           <Typography variant="h4" sx={{ color: '#2e8bc0', mb: 4 }}>
//             About Me
//           </Typography>

//           {/* Introduction */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 🧑‍💻 Introduction
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Typography variant="body1" sx={{ color: '#1c1c1e', lineHeight: 1.8 ,textAlign:'center'}}>
//                 I'm <strong>Vishak KV</strong>, a React Frontend Developer with a strong passion for crafting intuitive and dynamic user interfaces.
//                 I hold a Bachelor's degree in <strong>Electrical and Electronics Engineering (EEE)</strong> from Anna University.
//                 <br /><br />
//                 I worked at <strong>Swastika Digital Systems</strong> as a <strong>Testing and Development Engineer</strong>, where I gained experience
//                 in firmware development and hardware programming with ESP32 and ESP8266 microcontrollers.
//                 <br /><br />
//                 I completed a <strong>Frontend Development course at Karka Software Academy</strong>, where I learned to build modern, responsive UIs
//                 using React, JavaScript, Material UI, and other tools. I'm also familiar with project deployment and Git version control.
//                 <br /><br />
//                 I am open to exciting job opportunities and <strong>willing to relocate</strong> for the right role that helps me grow and contribute meaningfully.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           {/* What I Do */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 👨‍💻 What I Do
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Typography variant="body1" sx={{ color: '#1c1c1e', lineHeight: 1.8 }}>
//                 - Develop reusable components and responsive layouts with React & MUI. <br />
//                 - Integrate APIs and handle dynamic data efficiently using state management. <br />
//                 - Focus on performance optimization, accessibility, and SEO-friendly code. <br />
//                 - Build real-world applications including dashboards, service platforms, and admin panels.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           {/* Tech Stack */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 🔧 Tech Stack
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <ol style={{ paddingLeft: '20px', margin: 0, color: '#1c1c1e', lineHeight: 2 }}>
//                 <Grid container spacing={10}>
//                   <Grid item xs={12} sm={6}>
//                     <li>React.js</li>
//                     <li>JavaScript (ES6+)</li>
//                     <li>HTML5 & CSS3</li>
//                     <li>Material UI</li>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <li>Bootstrap</li>
//                     <li>Firebase</li>
//                     <li>Git & GitHub</li>
//                     <li>Framer Motion</li>
//                   </Grid>
//                 </Grid>
//               </ol>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           {/* Work Philosophy */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 🎯 Work Philosophy
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8} sx={{ textAlign: 'center' }}>
//               <Typography variant="body1" sx={{ color: '#1c1c1e', lineHeight: 1.8 }}>
//                 I believe that great UI/UX design starts with empathy for the user. I value teamwork, clean code,
//                 continuous learning, and building products that solve real problems. My development approach is practical,
//                 iterative, and focused on delivering value.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           {/* Outside of Code */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 🌱 Outside of Code
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Typography variant="body1" sx={{ color: '#1c1c1e', lineHeight: 1.8 }}>
//                 When I’m not coding, I enjoy exploring new tech tools, designing UI mockups, listening to podcasts,
//                 and spending time with nature. I’m also enthusiastic about electronics and DIY IoT projects.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           {/* Personal Details */}
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 📇 Personal Details
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Typography variant="body1" sx={{ color: '#1c1c1e', lineHeight: 2 }}>
//                 <strong>Name:</strong> Vishak KV <br />
//                 <strong>Email:</strong>{' '}
//                 <a href="mailto:vishakkv.dev@gmail.com" style={{ color: '#2e8bc0', textDecoration: 'none' }}>
//                   vishakkv.dev@gmail.com
//                 </a>
//                 <br />
//                 <strong>Phone:</strong>{' '}
//                 <a href="tel:+919876543210" style={{ color: '#2e8bc0', textDecoration: 'none' }}>
//                   +91 98765 43210
//                 </a>
//                 <br />
//                 <strong>Location:</strong> Tamil Nadu, India
//               </Typography>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>

//       {/* Footer */}
//       <Box sx={{ textAlign: 'center', mt: 6 }}>
//         <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
//           Made with <span style={{ color: 'red' }}>❤️</span> by Vishak KV
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default About;
