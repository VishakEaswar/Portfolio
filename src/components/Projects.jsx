import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const sampleProjects = [
  {
    title: 'Portfolio Website',
    desc: 'A personal responsive portfolio built using React and Material UI.',
    link: 'https://yourportfolio.com',
    image: 'https://source.unsplash.com/featured/?portfolio,website',
  },
  {
    title: 'Task Tracker',
    desc: 'A task management app with CRUD and localStorage.',
    link: 'https://yourtaskapp.com',
    image: 'https://source.unsplash.com/featured/?productivity,tasks',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', mt: 8, px: 2, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Typography
        variant="h4"
        sx={{ color: '#2e8bc0', fontWeight: 600, textAlign: 'center', mb: 4 }}
      >
        🚀 Projects
      </Typography>

      <Grid container spacing={4}>
        {sampleProjects.map((project, idx) => (
          <Grid size={{xs:12,sm:6,md:4}} key={idx}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: 3,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    filter: 'brightness(0.95)',
                    transition: '0.3s',
                    '&:hover': { filter: 'brightness(0.8)' },
                  }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#2e8bc0', fontWeight: 600 }}>
                  {project.title}
                </Typography>
                <Typography sx={{ mt: 1.5, color: '#444' }}>
                  {project.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  size="small"
                  href={project.link}
                  target="_blank"
                  sx={{
                    textTransform: 'none',
                    color: 'white',
                    backgroundColor: '#2e8bc0',
                    fontWeight: 500,
                    px: 2,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#1c6ca1',
                    },
                  }}
                >
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {/* 
        <Grid size={{xs:12,sm:6,md:4}}>
          <Card
            sx={{
              height: '100%',
              borderRadius: 3,
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: 3,
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image="https://source.unsplash.com/featured/?arcade,game"
              alt="Game Preview"
              sx={{
                filter: 'brightness(0.95)',
                transition: '0.3s',
                '&:hover': { filter: 'brightness(0.8)' },
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: '#2e8bc0', fontWeight: 600 }}>
                🏁 Play Car Race Game
              </Typography>
              <Typography sx={{ mt: 1.5, color: '#444' }}>
                A mini car dodging game. Press Enter to start. Arrow keys to move.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/game')}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#2e8bc0',
                  fontWeight: 500,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#1c6ca1',
                  },
                }}
              >
                Play Game
              </Button>
            </CardActions>
          </Card>
        </Grid> */}
      </Grid>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
          Made with <span style={{ color: 'red' }}>❤️</span> by Vishak KV
        </Typography>
      </Box>
    </Box>
  );
};

export default Projects;



// import React from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const sampleProjects = [
//   {
//     title: 'Portfolio Website',
//     desc: 'A personal responsive portfolio built using React and Material UI.',
//     link: 'https://yourportfolio.com',
//   },
//   {
//     title: 'Task Tracker',
//     desc: 'A task management app with CRUD and localStorage.',
//     link: 'https://yourtaskapp.com',
//   },
// ];

// const Projects = () => {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ maxWidth: '1200px', mx: 'auto', mt: 8, px: 2 }}>
//       <Typography
//         variant="h4"
//         sx={{ color: '#2e8bc0', fontWeight: 600, textAlign: 'center', mb: 4 }}
//       >
//         🚀 Projects
//       </Typography>

//       <Grid container spacing={4}>
//         {sampleProjects.map((project, idx) => (
//           <Grid item xs={12} sm={6} md={4} key={idx}>
//             <Card sx={{ height: '100%', borderRadius: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                   {project.title}
//                 </Typography>
//                 <Typography sx={{ mt: 1.5, color: '#555' }}>
//                   {project.desc}
//                 </Typography>
//               </CardContent>
//               <CardActions sx={{ px: 2, pb: 2 }}>
//                 <Button
//                   size="small"
//                   href={project.link}
//                   target="_blank"
//                   sx={{
//                     textTransform: 'none',
//                     color: '#2e8bc0',
//                     '&:hover': { backgroundColor: '#e6f4fa' },
//                   }}
//                 >
//                   View Project
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}

//         {/* Game Card */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card sx={{ height: '100%', borderRadius: 3 }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ color: '#2e8bc0' }}>
//                 🏁 Play Car Race Game
//               </Typography>
//               <Typography sx={{ mt: 1.5, color: '#555' }}>
//                 A mini car dodging game. Press Enter to start. Arrow keys to move.
//               </Typography>
//             </CardContent>
//             <CardActions sx={{ px: 2, pb: 2 }}>
//               <Button
//                 variant="contained"
//                 onClick={() => navigate('/game')}
//                 sx={{
//                   textTransform: 'none',
//                   backgroundColor: '#2e8bc0',
//                   '&:hover': { backgroundColor: '#1c6ca1' },
//                 }}
//               >
//                 Play Game
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Footer */}
//       <Box sx={{ textAlign: 'center', mt: 6 }}>
//         <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
//           Made with <span style={{ color: 'red' }}>❤️</span> by Vishak KV
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Projects;
