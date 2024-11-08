import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Helper function to get the token
const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  return { headers: { Authorization: `Bearer ${token}` } };
};

// Authentication
export const signup = (userData) => axios.post(`${API_URL}/signup`, userData);
export const signin = (credentials) => axios.post(`${API_URL}/signin`, credentials);

// Product Management
export const getProducts = () => axios.get(`${API_URL}/products`);
export const addProduct = (productData) => axios.post(`${API_URL}/addproduct`, productData, getAuthHeaders());
export const updateProduct = (productId, updateData) => axios.put(`${API_URL}/updateproduct/${productId}`, updateData, getAuthHeaders());
export const deleteProduct = (productId) => axios.delete(`${API_URL}/deleteproduct/${productId}`, getAuthHeaders());

// Cart Management
export const addToCart = (itemData) => axios.post(`${API_URL}/cart/add`, itemData, getAuthHeaders());
export const updateCart = (itemData) => axios.put(`${API_URL}/cart/update`, itemData, getAuthHeaders());
export const deleteFromCart = (productId) => axios.delete(`${API_URL}/cart/delete`, { data: { productId }, ...getAuthHeaders() });
export const getCart = () => axios.get(`${API_URL}/cart`, getAuthHeaders());

// Order Management
export const placeOrder = (orderData) => axios.post(`${API_URL}/placeorder`, orderData, getAuthHeaders());
export const getAllOrders = () => axios.get(`${API_URL}/getallorders`, getAuthHeaders());
export const getOrdersByCustomerId = (customerId) => axios.get(`${API_URL}/orders/customer/${customerId}`, getAuthHeaders());
