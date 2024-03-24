import React, { useEffect, useState } from 'react';

import {Paper, Toolbar, Typography, Grid} from '@mui/material';

import SearchBar from './components/searchBar';
import ProductCard from './components/productCard';

function App() {
  const [products, setProducts] = useState([]);
  const [allResults, setAllResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api');
      const responseData = await response.json();
      setProducts(responseData);
      setAllResults(responseData);
    };

    fetchData();
  }, []);

  function handleSearch(searchTerm) {
    var filteredResults = allResults.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredResults);
  };

  return (
    <div className='App-header'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Autonify Platform - B2B solution for Robotics automation needs!
        </Typography>
      </Toolbar>
      <SearchBar onSearch={handleSearch}/>
      <Paper/>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
}

export default App;
