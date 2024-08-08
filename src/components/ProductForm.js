import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductForm() {
  const [product, setProduct] = useState({ name: '', price: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:5000/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id ? `http://127.0.0.1:5000/products/${id}` : 'http://127.0.0.1:5000/products';
    axios[method](url, product)
      .then(() => navigate('/products'))
      .catch(error => console.error('Error saving product:', error));
  };

  return (
    <div>
      <h1>{id ? 'Edit Product' : 'Add Product'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Product Price" required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ProductForm;