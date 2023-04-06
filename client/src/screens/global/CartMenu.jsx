/** @format */

import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { shades } from '../../theme';
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from '../../state';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function CartMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((acc, item) => acc + item.attributes.price * item.count, 0);

  const handleToggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <Drawer
      PaperProps={{
        sx: { width: '30%' }
      }}
      anchor='right'
      open={isCartOpen}
      onClose={handleToggleIsCartOpen}
    >
      <Box p='20px'>
        <FlexBox mb='15px'>
          <Typography variant='h3'>Shopping Bag ({cart.length})</Typography>
          <IconButton onClick={handleToggleIsCartOpen}>
            <CloseIcon />
          </IconButton>
        </FlexBox>
        <Divider />
        <List>
          {cart.map((item) => (
            <ListItem key={`${item.attributes.name}-${item.id}`}>
              <ListItemAvatar>
                <Avatar alt={item?.name} src={`http://localhost:1337${item?.attributes.image?.data.attributes.formats.medium.url}`} />
              </ListItemAvatar>
              <ListItemText primary={item.attributes.name} secondary={item.attributes.shortDescription} />
              <ListItemSecondaryAction>
                <Box display='flex' alignItems='center'>
                  <IconButton onClick={() => dispatch(decreaseCount({ id: item.id }))}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{item.count}</Typography>
                  <IconButton onClick={() => dispatch(increaseCount({ id: item.id }))}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Typography fontWeight='bold' color={shades.secondary[500]}>
                  ${item.attributes.price}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* ACTIONS */}
        <Box m='20px 0'>
          <FlexBox m='20px 0'>
            <Typography fontWeight='bold'>SUBTOTAL</Typography>
            <Typography fontWeight='bold'>${totalPrice}</Typography>
          </FlexBox>
          <Button
            sx={{ backgroundColor: shades.primary[400], color: 'white', borderRadius: 0, minWidth: '100%', padding: '20px 40px', m: '20px 0' }}
            onClick={() => {
              navigate('/checkout');
              dispatch(setIsCartOpen(false));
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
