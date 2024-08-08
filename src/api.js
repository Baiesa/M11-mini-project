import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const getCustomers = () => axios.get(`${API_URL}/customers`);
export const createCustomer = (data) => axios.post(`${API_URL}/customers`, data);
export const getCustomer = (id) => axios.get(`${API_URL}/customers/${id}`);
export const updateCustomer = (id, data) => axios.put(`${API_URL}/customers/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/customers/${id}`);

export const getProducts = () => axios.get(`${API_URL}/products`);
export const createProduct = (data) => axios.post(`${API_URL}/products`, data);
export const getProduct = (id) => axios.get(`${API_URL}/products/${id}`);
export const updateProduct = (id, data) => axios.put(`${API_URL}/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);

export const getOrders = () => axios.get(`${API_URL}/orders`);
export const createOrder = (data) => axios.post(`${API_URL}/orders`, data);
export const getOrder = (id) => axios.get(`${API_URL}/orders/${id}`);
export const updateOrder = (id, data) => axios.put(`${API_URL}/orders/${id}`, data);
export const deleteOrder = (id) => axios.delete(`${API_URL}/orders/${id}`);