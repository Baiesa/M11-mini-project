import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const deleteOrder = id => {
    axios.delete(`http://127.0.0.1:5000/orders/${id}`)
      .then(() => setOrders(orders.filter(order => order.id !== id)))
      .catch(error => console.error('Error deleting order:', error));
  };

  return (
    <div>
      <h1>Orders</h1>
      <Link to="/orders/new">Add New Order</Link>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customer_id} - {new Date(order.date).toLocaleDateString()}
            <Link to={`/orders/edit/${order.id}`}>Edit</Link>
            <button onClick={() => deleteOrder(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;