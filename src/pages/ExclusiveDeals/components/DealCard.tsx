import { Card, Typography } from '@mui/material';
import { Deal } from '../types/deal';

export const DealCard = ({ deal }: { deal: Deal }) => {
  return (
    <Card sx={{ margin: '8px' }}>
      <Typography>{deal.companyName}</Typography>
      <Typography>{deal.discount}</Typography>
      <Typography>{deal.promoCode}</Typography>
    </Card>
  );
};
