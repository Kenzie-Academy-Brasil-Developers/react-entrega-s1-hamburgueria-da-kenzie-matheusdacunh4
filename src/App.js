import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => {
        setFilteredProducts(data);
        setProducts(data);
      });
  }, []);

  const showProducts = (e) => {
    e.target[0].value.length > 0
      ? setFilteredProducts(
          products.filter(
            (item) =>
              item.name === e.target[0].value ||
              item.category === e.target[0].value
          )
        )
      : setFilteredProducts(products);
  };

  const handleClick = (productId) => {
    const product = products.find((item) => item.id === productId);
    if (currentSale.every((item) => item.id !== product.id)) {
      setCurrentSale([...currentSale, product]);
    }
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} />
      <div className="main">
      <ProductsList
        handleClick={handleClick}
        products={products}
        filteredProducts={filteredProducts}
      />
      <Cart currentSale={currentSale} />
      </div>
    </div>
  );
}

export default App;
