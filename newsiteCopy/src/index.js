import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Header from './header/Header';
import Article from "./article/Article";
import Body from "./body/Body";
import Footer from "./footer/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Article />
    <Body />
    <Footer />
  </React.StrictMode>
);
