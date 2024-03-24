import React from 'react';
import {Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

function ProductCard({ product }) {
    return (
      <Grid item xs={12} sm={6} md={2}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  
  export default ProductCard;
