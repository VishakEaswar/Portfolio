import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
  const resumeUrl = '/resume.pdf'; // Make sure this is inside the `public/` folder

  return (
    <Box sx={{ maxWidth: '1080px', mx: 'auto', mt: 8, px: 2 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography
          variant="h4"
          sx={{ color: '#2e8bc0', fontWeight: 600, textAlign: 'center', mb: 3 }}
        >
          📄 My Resume
        </Typography>

        {/* PDF Viewer */}
        <Box
          sx={{
            width: '100%',
            height: { xs: '100vh', sm: '100vh',md:'100vh' },
            mb: 3,
            border: '1px solid #ccc',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <iframe
            src={resumeUrl}
            title="Resume PDF"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          ></iframe>
        </Box>

        {/* Download Button */}
        <Grid container justifyContent="center">
          <Grid item xs={12} sm="auto">
            <Button
              variant="contained"
              href={resumeUrl}
              download="Vishak_KV_Resume.pdf"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: '#2e8bc0',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#1c6ca1' },
              }}
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Resume




// import React, { useState } from 'react';
// import { Box, Typography, Paper, Button } from '@mui/material';
// import { Document, Page, pdfjs } from 'react-pdf';
// import DownloadIcon from '@mui/icons-material/Download';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const Resume = () => {
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <Box sx={{ maxWidth: '900px', mx: 'auto', mt: 8, px: 2 }}>
    
//       <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
//         <Typography variant="h4" sx={{ color: '#2e8bc0', fontWeight: 600, mb: 3 }}>
//           📄 My Resume
//         </Typography>

//         {/* PDF Viewer */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             border: '1px solid #ccc',
//             borderRadius: 2,
//             overflow: 'hidden',
//             mb: 3,
//             background: '#f9f9f9',
//           }}
//         >
//           <Document
//             file="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
//             onLoadSuccess={onDocumentLoadSuccess}
//             onLoadError={(err) => console.error('PDF load error:', err.message)}
//           >
//             {Array.from(new Array(numPages), (_, index) => (
//               <Page key={index + 1} pageNumber={index + 1} width={800} />
//             ))}
//           </Document>
//         </Box>

//         <Button
//           variant="contained"
//           href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
//           download="My_Resume.pdf"
//           startIcon={<DownloadIcon />}
//           sx={{
//             backgroundColor: '#2e8bc0',
//             textTransform: 'none',
//             '&:hover': {
//               backgroundColor: '#1c6ca1',
//             },
//           }}
//         >
//           Download Resume
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default Resume;
