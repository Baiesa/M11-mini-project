import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CustomerList />} />
        <Route path="/customers/new" element={<CustomerForm />} />
        <Route path="/customers/edit/:id" element={<CustomerForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/new" element={<ProductForm />} />
        <Route path="/products/edit/:id" element={<ProductForm />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/orders/new" element={<OrderForm />} />
        <Route path="/orders/edit/:id" element={<OrderForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;