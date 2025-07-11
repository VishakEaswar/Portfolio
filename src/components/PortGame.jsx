import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Grid, Button } from '@mui/material';

// Base full solutions
const baseSolutions = {
  3: [
    [1,2,3],
    [3,1,2],
    [2,3,1],
  ],
  4: [
    [1,2,3,4],
    [3,4,1,2],
    [2,1,4,3],
    [4,3,2,1],
  ],
  6: [
    [1,2,3,4,5,6],
    [4,5,6,1,2,3],
    [2,3,1,5,6,4],
    [5,6,4,2,3,1],
    [3,1,2,6,4,5],
    [6,4,5,3,1,2],
  ],
  9: [
    [1,2,3,4,5,6,7,8,9],
    [4,5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8],
  ],
};

// Shuffle helper
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// Generate puzzle with blank cells
const generatePuzzle = (size, blanks = 0.5) => {
  const sol = baseSolutions[size].map(row => shuffle([...row]));
  shuffle(sol);
  const puzzle = sol.map(row => row.map(cell => Math.random() < blanks ? null : cell));
  return { puzzle, solution: sol };
};

const sizes = [3,4,6,9];

export default function PortGame() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(sizes[0]);
  const [board, setBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const sz = sizes[Math.min(level, sizes.length -1)];
    const { puzzle, solution } = generatePuzzle(sz, 0.5 - sz/30);
    setSize(sz);
    setBoard(puzzle);
    setSolution(solution);
    setMessage('');
  }, [level]);

  const handleChange = (r,c,val) => {
    const num = parseInt(val);
    if(val === '' || (num >=1 && num<= size)) {
      const nb = board.map((row,i) =>
        row.map((cell,j) => (i===r&&j===c ? (val===''?null:num):cell))
      );
      setBoard(nb);
    }
  };

  const validate = () => board.flat().every((v,i) => v === solution.flat()[i]);

  const handleCheck = () => {
    if(validate()) {
      setPoints(p => p + 10);
      setLives(l => Math.min(l + 3, 9));
      setMessage(`✅ Level ${level+1} Completed!`);
      setTimeout(() => setLevel(l => l+1), 1000);
    } else {
      setLives(l => {
        const nl = l -1;
        if(nl <=0) {
          setMessage('💥 Game Over. Restarting...');
          setTimeout(() => {
            setLevel(0); setPoints(0); setLives(3);
          }, 1500);
        } else {
          setMessage(`❌ Wrong! ${nl} lives left.`);
        }
        return nl;
      });
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx:'auto', mt:4, textAlign:'center' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        🧩 Mini-to-Full Sudoku
      </Typography>
      <Typography variant="body1" sx={{ mb:2 }}>
        Level {level+1} | Grid: {size}×{size} | ❤️ {lives} lives | ⭐ {points} pts
      </Typography>
      <Grid container spacing={0.5} sx={{ width:`${size*50}px`, mx:'auto' }}>
        {board.map((row,i) =>
          row.map((val,j) => (
            <Grid item key={`${i}-${j}`} xs={12/size}>
              <TextField
                value={val || ''}
                onChange={e => handleChange(i,j,e.target.value)}
                disabled={solution[i][j] === board[i][j] && board[i][j] !== null}
                inputProps={{
                  maxLength:1,
                  style:{textAlign:'center', fontSize:20}
                }}
                variant="outlined"
                size="small"
                sx={{ width:50, height:50 }}
              />
            </Grid>
          ))
        )}
      </Grid>
      <Button variant="contained" sx={{ mt:2 }} onClick={handleCheck}>
        Check
      </Button>
      {message && <Typography sx={{ mt:2, fontWeight:600 }}>{message}</Typography>}
    </Box>
  );
}



// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';

// const PortGame = () => {
//   const gameRef = useRef(null);
//   const gravity = 1.2;
//   const jumpStrength = -12;
//   const [birdY, setBirdY] = useState(150);
//   const [velocity, setVelocity] = useState(0);
//   const [pipes, setPipes] = useState([{ x: 300, height: 100 }]);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [score, setScore] = useState(0);

//   const gameWidth = 300;
//   const gameHeight = 400;
//   const pipeWidth = 50;
//   const gap = 100;

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       if (gameOver) resetGame();
//       else setGameStarted(true);
//     }

//     if (e.key === ' ' && gameStarted && !gameOver) {
//       setVelocity(jumpStrength);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   });

//   useEffect(() => {
//     if (!gameStarted || gameOver) return;

//     const gameLoop = setInterval(() => {
//       setBirdY((y) => y + velocity);
//       setVelocity((v) => v + gravity);

//       setPipes((prevPipes) => {
//         let updatedPipes = prevPipes.map((pipe) => ({ ...pipe, x: pipe.x - 4 }));
//         if (updatedPipes[0].x < -pipeWidth) {
//           updatedPipes.shift();
//           updatedPipes.push({
//             x: gameWidth,
//             height: Math.floor(Math.random() * 150) + 50,
//           });
//           setScore((s) => s + 1);
//         }
//         return updatedPipes;
//       });

//       if (
//         birdY > gameHeight ||
//         pipes.some(
//           (pipe) =>
//             pipe.x < 60 &&
//             pipe.x + pipeWidth > 20 &&
//             (birdY < pipe.height || birdY > pipe.height + gap)
//         )
//       ) {
//         setGameOver(true);
//         setGameStarted(false);
//         clearInterval(gameLoop);
//       }
//     }, 30);

//     return () => clearInterval(gameLoop);
//   }, [birdY, velocity, pipes, gameStarted, gameOver]);

//   const resetGame = () => {
//     setGameOver(false);
//     setGameStarted(false);
//     setBirdY(150);
//     setVelocity(0);
//     setPipes([{ x: 300, height: 100 }]);
//     setScore(0);
//   };

//   return (
//     <Box sx={{ textAlign: 'center', mt: 4 }}>
//       <Typography variant="h5" sx={{ color: '#2e8bc0', fontWeight: 600, mb: 2 }}>
//         🐦 Flappy Bird Clone
//       </Typography>

//       <Box
//         ref={gameRef}
//         sx={{
//           position: 'relative',
//           width: `${gameWidth}px`,
//           height: `${gameHeight}px`,
//           backgroundColor: '#d0f0fc',
//           border: '2px solid #2e8bc0',
//           mx: 'auto',
//           borderRadius: 2,
//           overflow: 'hidden',
//         }}
//       >
//         <motion.div
//           animate={{ top: birdY }}
//           transition={{ type: 'spring', stiffness: 200 }}
//           style={{
//             position: 'absolute',
//             left: 30,
//             width: '30px',
//             height: '30px',
//             backgroundColor: '#fdd835',
//             borderRadius: '50%',
//             top: birdY,
//             boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//           }}
//         />

//         {pipes.map((pipe, idx) => (
//           <React.Fragment key={idx}>
//             <Box
//               sx={{
//                 position: 'absolute',
//                 left: pipe.x,
//                 top: 0,
//                 width: pipeWidth,
//                 height: pipe.height,
//                 backgroundColor: '#4caf50',
//                 borderRadius: '0 0 10px 10px',
//               }}
//             />
//             <Box
//               sx={{
//                 position: 'absolute',
//                 left: pipe.x,
//                 top: pipe.height + gap,
//                 width: pipeWidth,
//                 height: gameHeight - pipe.height - gap,
//                 backgroundColor: '#4caf50',
//                 borderRadius: '10px 10px 0 0',
//               }}
//             />
//           </React.Fragment>
//         ))}

//         {!gameStarted && !gameOver && (
//           <Typography
//             sx={{
//               position: 'absolute',
//               top: '45%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               background: 'rgba(255,255,255,0.85)',
//               px: 2,
//               py: 1,
//               borderRadius: 1,
//               fontWeight: 600,
//             }}
//           >
//             Press <strong>Enter</strong> to Start, <strong>Space</strong> to Jump
//           </Typography>
//         )}

//         {gameOver && (
//           <Typography
//             sx={{
//               position: 'absolute',
//               top: '45%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               color: 'red',
//               fontWeight: 600,
//               background: 'rgba(255,255,255,0.85)',
//               px: 2,
//               py: 1,
//               borderRadius: 1,
//             }}
//           >
//             💥 Game Over! Press <strong>Enter</strong> to Play Again
//           </Typography>
//         )}
//       </Box>

//       <Box
//         sx={{
//           mt: 2,
//           display: 'flex',
//           justifyContent: 'center',
//           gap: 4,
//         }}
//       >
//         <Typography variant="body1">💯 Score: {score}</Typography>
//       </Box>

//       <Button
//         onClick={resetGame}
//         variant="contained"
//         sx={{
//           mt: 2,
//           textTransform: 'none',
//           backgroundColor: '#2e8bc0',
//           '&:hover': { backgroundColor: '#1c6ca1' },
//         }}
//       >
//         Reset
//       </Button>
//     </Box>
//   );
// };

// export default PortGame;
