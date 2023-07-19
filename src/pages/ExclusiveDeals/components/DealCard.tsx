import { Box, Button, Card, Typography } from '@mui/material';
import { Deal } from '../types/deal';
import { useState } from 'react';

export const DealCard = ({ deal }: { deal: Deal }) => {
  const [buttonText, setButtonText] = useState('Redeem');

  const handleShowPromoCode = () => {
    setButtonText(deal.promoCode);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 24px',
        margin: '8px',
        height: '120px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingRight: '8px' }}>
        <img src={deal.logo} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box>
          <Typography>{deal.companyName}</Typography>
          <Typography>{deal.discount}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button id={deal.gaId} className={deal.gaClassName} variant="contained" onClick={handleShowPromoCode}>
          {buttonText}
        </Button>
      </Box>
    </Card>
  );
};
