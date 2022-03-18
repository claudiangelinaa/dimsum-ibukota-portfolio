import React from 'react'
import './support/stylesheet.css'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  )
}