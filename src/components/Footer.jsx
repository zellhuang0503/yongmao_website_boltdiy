import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-info">
          <p className="company-name">詠懋企業有限公司</p>
          <p>地址：434台中市龍井區龍西里龍門路120號</p>
          <p>電話：(04)2639-1847</p>
        </div>
        <div className="footer-links">
          <a href="/sitemap">網站地圖</a>
          <a href="/privacy">隱私權政策</a>
          <a href="/copyright">版權聲明</a>
        </div>
        <div className="footer-social">
          {/* 社群媒體連結圖示，例如 Facebook, LinkedIn */}
          {/* 範例：<a href="#"><i className="fab fa-facebook"></i></a> */}
        </div>
        <p className="copyright">© {new Date().getFullYear()} 詠懋企業有限公司. 版權所有.</p>
      </div>
    </footer>
  );
}

export default Footer;
