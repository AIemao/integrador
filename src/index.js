import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Accordion from './components/Accordion';
import Navibar from './components/Navibar';
import Carousel from './pages/loja/Carousel';
import Map from './pages/loja/Map'
import Footer from './components/Footer';
import './assets/styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navibar />
    <Carousel />
    <Map />
    <Accordion />
    <Footer />
  </React.StrictMode>
);

