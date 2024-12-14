import React from 'react';
import './Product.css'; // Make sure to import the CSS file
import Header from '../../Header/Header';


const  Product = () => {
  return (
    <div>
      <Header/>
      <section className="main-section">
        <div className="categories">
          <h2>Categories</h2>
          <ul>
            <li><a href="/category1">Category 1</a></li>
            <li><a href="/category2">Category 2</a></li>
            <li><a href="/category3">Category 3</a></li>
            <li><a href="/category4">Category 4</a></li>
          </ul>
        </div>

        <div className="products">
          <h2>Featured Products</h2>
          <div className="product-card">
            <img src="/images/product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Product description goes here.</p>
            <button className="btn">View Details</button>
          </div>
          <div className="product-card">
            <img src="/images/product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Product description goes here.</p>
            <button className="btn">View Details</button>
          </div>
          {/* More products can go here */}
        </div>
      </section>
    </div>
  );
};

export default Product;
