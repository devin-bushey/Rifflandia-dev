import { Box, Container, Card, Typography } from '@mui/material';
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
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            borderRadius: '10px',
          }}
        >
          <img style={{ width: '300px' }} src={TITLE} alt="Rifflandia Title" />

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
