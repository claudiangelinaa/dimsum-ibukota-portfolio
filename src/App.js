import React from 'react'
import './support/stylesheet.css'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';

// redux
import {applyMiddleware, createStore} from 'redux'
import { Provider } from "react-redux";
import allReducer from "./redux/Reducers/allReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import Forbidden from './pages/Forbidden';

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forbidden" element={<Forbidden />} />
      </Routes>
    </Provider>
  )
}