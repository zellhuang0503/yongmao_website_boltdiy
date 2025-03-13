import React from 'react';
import './Navigation.css'; // 確保導入 CSS

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
        {/* Logo 放置區塊 */}
        <a href="/">
          <img src="/image/YM-logo-B-noBG.png" alt="公司 Logo" />
        </a>
      </div>
      <ul>
        <li><a href="/">首頁</a></li>
        <li><a href="/products">產品介紹</a></li>
        <li><a href="/services">服務項目</a></li>
        <li><a href="/contact">聯絡我們</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
