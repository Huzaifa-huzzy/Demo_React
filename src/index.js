import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 and later uses this
import './index.css';  // Optional global styles
import App from './App'; // The main App component
import reportWebVitals from './reportWebVitals'; // For performance tracking (optional)
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Product from './Components/Pages/Products/Product';

// Create a root element to render the React app into
const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes = createBrowserRouter([
  { path: '/', element: <App />},
  { path: 'about', element: <About/>},
  { path: 'services', element: <Services/>},
  { path: 'products', element: <Product/>}
])

// Render the App component into the DOM
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// Measure performance of the app (optional)
reportWebVitals();
