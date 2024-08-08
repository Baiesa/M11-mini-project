import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function OrderForm() {
  const [order, setOrder] = useState({ customer_id: '', date: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:5000/orders/${id}`)
        .then(response => setOrder(response.data))
        .catch(error => console.error('Error fetching order:', error));
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setOrder(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id ? `http://127.0.0.1:5000/orders/${id}` : 'http://127.0.0.1:5000/orders';
    axios[method](url, order)
      .then(() => navigate('/orders'))
      .catch(error => console.error('Error saving order:', error));
  };

  return (
    <div>
      <h1>{id ? 'Edit Order' : 'Add Order'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" name="customer_id" value={order.customer_id} onChange={handleChange} placeholder="Customer ID" required />
        <input type="date" name="date" value={order.date} onChange={handleChange} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default OrderForm;