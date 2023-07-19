import { Deal } from '../types/deal';

import whistlebuoy from './logos/whistlebuoy.jpg';
import dumplingdrop from './logos/dumplingdrop.jpeg';
import arcteryx from './logos/arcteryx.jpg';

export const DealList: Deal[] = [
  {
    logo: whistlebuoy,
    companyName: 'Whistle Buoy',
    promoCode: 'Deal123',
    discount: '10% off beer',
    gaClassName: 'whistlebuoy',
    gaId: 'whistlebuoy',
  },
  {
    logo: dumplingdrop,
    companyName: 'Dumpling Drop',
    promoCode: 'Deal321',
    discount: '20% off',
    gaClassName: 'dumplingdrop',
    gaId: 'dumplingdrop',
  },
  {
    logo: arcteryx,
    companyName: 'Arcteryx',
    promoCode: 'Deal321',
    discount: '15% off',
    gaClassName: 'arcteryx',
    gaId: 'arcteryx',
  },
];
