import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import {filterByRating} from "../slices/ProductsSlice"

import { useDispatch } from 'react-redux';


export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  const dispatch = useDispatch()

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend" style={{color:"black"}}>Rating Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue)

            dispatch(filterByRating(newValue))
            
        }}
      />

    </Box>
  );
}
