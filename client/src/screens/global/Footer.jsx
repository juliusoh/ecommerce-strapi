/** @format */

import React from 'react';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';

export default function Footer() {
  const { palette } = useTheme();
  return (
    <Box mt='70px' p='40px 0' sx={{ backgroundColor: palette.neutral.light }}>
      <Box width='80%' margin='auto' display='flex' justifyContent='space-between' flexWrap='wrap' rowGap='30px' columnGap='clamp(20px, 30px, 40px)'>
        <Box width='clamp(20%, 30%, 40%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px' colors={shades.secondary[500]}>
            ECOMMERCE{' '}
          </Typography>
          <div>Sample text</div>
        </Box>

        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px' colors={shades.secondary[500]}>
            About Us
          </Typography>
          <Typography mb='30px'>Careers</Typography>
          <Typography mb='30px'>Our Stores</Typography>
          <Typography mb='30px'>Terms & Conditions</Typography>
          <Typography mb='30px'>Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px' colors={shades.secondary[500]}>
            Customer Care
          </Typography>
          <Typography mb='30px'>Help Center</Typography>
          <Typography mb='30px'>Track your Order</Typography>
          <Typography mb='30px'>Corporate & Bulk Purchasing</Typography>
          <Typography mb='30px'>Returns and Refunds</Typography>
        </Box>
        <Box
          width='cl
        amp(20%, 25%, 30%)'
        >
          <Typography variant='h4' fontWeight='bold' mb='30px' colors={shades.secondary[500]}>
            Contact Us
          </Typography>
          <Typography mb='30px'>50 Irvine Blvd, Irvine, California, CA 92921</Typography>
          <Typography mb='30px'>Email: juliusoh@gmail.com</Typography>
          <Typography mb='30px'>(714)723-4408</Typography>
        </Box>
      </Box>
    </Box>
  );
}
