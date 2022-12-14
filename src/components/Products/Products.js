import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';

const products = [
    {id:1, name:'shopes',price:"$5", },
    {id:2, name:'Nike',price:"$5", }
]

const Products = () => {


  return (
    <main >
    
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
