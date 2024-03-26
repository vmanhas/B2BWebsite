import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { Paper, Grid } from "@mui/material";
import Header from "./components/header";
import ProductCard from "./components/productCard";
import Signup from "./components/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./components/test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [allResults, setAllResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api");
      const responseData = await response.json();
      setProducts(responseData);
      setAllResults(responseData);
    };

    fetchData();
  }, []);

  function handleSearch(searchTerm) {
    var filteredResults = allResults.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredResults);
  }

  return (
    <div className="App-header">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header onSearch={handleSearch} />
                <Paper />
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </Grid>
                <Footer className="foo"></Footer>
              </div>
            }
          />
          <Route
           path="/test"
           element={
            <div>
              <Test/>
            </div>
           }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
