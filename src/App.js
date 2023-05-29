import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nevbar from './Component/Nevbar';
import * as React from 'react';
//import ProductCard from './Component/ProductCard';
// const LazyProductcard=React.lazy(()=>import('./Component/ProductCard'));
function App() {
  return (
    <div className="App">
      <Nevbar/>
    </div>
  );
}

export default App;
