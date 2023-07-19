import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '120px' }}>
        <Typography variant="h1">Rifflandia Demo</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '120px' }}>
        <Button variant="contained" onClick={() => navigate('/contest')} sx={{ margin: '8px' }}>
          Contest Page
        </Button>
        <Button variant="contained" onClick={() => navigate('/deals')} sx={{ margin: '8px' }}>
          Exclusive Deals Page
        </Button>
      </Box>
    </>
  );
};
