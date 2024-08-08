import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const deleteCustomer = id => {
    axios.delete(`http://127.0.0.1:5000/customers/${id}`)
      .then(() => setCustomers(customers.filter(customer => customer.id !== id)))
      .catch(error => console.error('Error deleting customer:', error));
  };

  return (
    <div>
      <h1>Customers</h1>
      <Link to="/customers/new">Add New Customer</Link>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.name} - {customer.email} - {customer.phone}
            <Link to={`/customers/edit/${customer.id}`}>Edit</Link>
            <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;