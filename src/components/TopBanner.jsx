import React from 'react';
import './TopBanner.css';

function TopBanner() {
  return (
    <section className="top-banner">
      <div className="container">
        <h1>詠懋企業 - 彈性體加工領導品牌</h1>
        <p className="subtitle">專業客製化彈性體解決方案的首選夥伴</p>
        <p className="description">三十年專業經驗，為各產業提供高品質彈性體加工服務，從設計到製造一站式服務</p>
        <div className="buttons">
          <button className="primary-button">了解我們的服務</button>
          <button className="secondary-button">聯絡我們</button>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
