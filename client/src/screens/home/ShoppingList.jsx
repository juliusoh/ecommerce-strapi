/** @format */

import React, { useEffect, useState } from 'react';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import { Product } from '../../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../state';

export default function ShoppingList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('all');
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  console.log(items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  async function getItems() {
    const items = await fetch('http://localhost:1337/api/items?populate=image', { method: 'GET' });
    const itemsJson = await items.json();
    console.log('🚀 ~ file: ShoppingList.jsx:22 ~ getItems ~ itemsJson:', itemsJson);
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter((item) => item.attributes.category === 'topRated');
  const newArrivals = items.filter((item) => item.attributes.category === 'newArrivals');
  const bestSellers = items.filter((item) => item.attributes.category === 'bestSellers');

  return (
    <Box width='80%' margin='80px auto'>
      <Typography variant='h3' textAlign='center'>
        OUR FEATURED PRODUCTS{' '}
      </Typography>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? 'block' : 'none' } }}
        sx={{
          m: '25px',
          '& .MuiTabs-indicator': {
            flexWrap: 'wrap'
          }
        }}
      >
        <Tab label='ALL' value='all' />
        <Tab label='NEW ARRIVALS' value='newArrivals' />
        <Tab label='BEST SELLERS' value='bestSellers' />
        <Tab label='TOP RATED' value='topRated' />
      </Tabs>
      <Box
        margin='0 auto'
        display='grid'
        gridTemplateColumns='repeat(auto-fill, 300px)'
        justifyContent='space-around'
        rowGap='20px'
        columnGap='1.33%'
      >
        {value === 'all' && items.map((item) => <Product item={item} key={item.id} />)}
        {value === 'newArrivals' && newArrivals.map((item) => <Product item={item} key={item.id} />)}
        {value === 'bestSellers' && bestSellers.map((item) => <Product item={item} key={item.id} />)}
        {value === 'topRated' && topRatedItems.map((item) => <Product item={item} key={item.id} />)}
      </Box>
    </Box>
  );
}
