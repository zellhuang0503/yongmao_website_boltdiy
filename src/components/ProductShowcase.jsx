import React from 'react';
import './ProductShowcase.css';

function ProductShowcase() {
  const productCategories = [
    { name: '精選案例展示', description: '展示各產業代表性客製化解決方案' },
    { name: '熱門產品介紹', description: '詠懋最受歡迎的彈性體產品系列' },
    { name: '創新技術應用', description: '展示最新研發成果與技術突破' },
  ];

  return (
    <section className="product-showcase">
      <div className="container">
        <h2>產品展示</h2>
        <div className="categories-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="category-item">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button className="view-more-button">查看更多案例</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
