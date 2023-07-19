import { Box, Container, Typography } from '@mui/material';
import TITLE from '../../assets/title.svg';
import './ExclusiveDeals.css';
import { DealList } from './data/DealList';
import { DealCard } from './components/DealCard';
import { Deal } from './types/deal';

export const ExclusiveDeals = () => {
  return (
    <Container className="deals-background">
      <div className="sidebar-login sidebar-svg-park"></div>
      <div className="sidebar-login sidebar-svg-electric"></div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '600px' }}>
          <Box
            sx={{
              marginTop: '24px',
              marginBottom: '24px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img style={{ maxWidth: '300px' }} src={TITLE} alt="Rifflandia Title" />
          </Box>

          <Box
            sx={{
              marginTop: '24px',
              marginBottom: '24px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography>Exclusive Deals</Typography>
          </Box>

          {DealList.map((d: Deal, index: number) => {
            return <DealCard key={index} deal={d} />;
          })}
        </Box>
      </Box>
    </Container>
  );
};
