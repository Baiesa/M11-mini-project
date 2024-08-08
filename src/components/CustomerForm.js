import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function CustomerForm() {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:5000/customers/${id}`)
        .then(response => setCustomer(response.data))
        .catch(error => console.error('Error fetching customer:', error));
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setCustomer(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id ? `http://127.0.0.1:5000/customers/${id}` : 'http://127.0.0.1:5000/customers';
    axios[method](url, customer)
      .then(() => navigate('/'))
      .catch(error => console.error('Error saving customer:', error));
  };

  return (
    <div>
      <h1>{id ? 'Edit Customer' : 'Add Customer'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={customer.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="phone" value={customer.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CustomerForm;