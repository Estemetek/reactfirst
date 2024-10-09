/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import FilterProductTable from './components/FilterProductTable.jsx';
import ProductTable from './components/ProductTable.jsx';
import SearchBar from './components/SearchBar.jsx';

const products = [
  {id: 1, name: 'Tennis', price: 49.9, type: 1, stock: 100},
  {id: 2, name: 'Badminton', price: 99.9, type: 1, stock: 21},
  {id: 3, name: 'Basketball', price: 29.9, type: 1, stock: 0},

  {id: 4, name: 'Ipod Touch', price: 99.9, type: 2, stock: 100},
  {id: 5, name: 'Iphone 5', price: 399.9, type: 2, stock: 0},
  {id: 6, name: 'Nexus 7', price: 199.9, type: 2, stock: 120},
];

const headers = [
  "Sporting Goods", "Electronics"
];

function App() {
 const [query, setQuery] = useState("");
 const [stockChecked, setStockChecked] = useState(false);

 const filteredProducts = products.filter(
  // case 1
  product => product.name.toLowerCase().includes(query.toLowerCase())
  // case 2
  && (stockChecked ? product.stock > 0 : true)
);

  return (
    <div>
      <FilterProductTable>
        <SearchBar query={query} setQuery={setQuery} stockChecked={stockChecked} setStockChecked={setStockChecked} />
        <ProductTable headers={headers} products={filteredProducts}/>
      </FilterProductTable>
    </div>
  );
}

export default App