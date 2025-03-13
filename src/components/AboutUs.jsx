import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <h2>關於詠懋企業</h2>
        <p>詠懋企業成立於1990年，專注於彈性體材料的研發與加工，擁有豐富的產業經驗與技術實力。</p>
        <p>我們通過SGS品質認證，嚴格把關每一個生產環節，確保產品質量符合國際標準。</p>
        <p><strong>核心價值：創新、品質、服務、環保、專業</strong></p>
        <div className="highlights">
          <div className="highlight-item">
            <h3>SGS國際認證品質保證</h3>
            <p>嚴格的品質控制，確保產品符合國際標準。</p>
          </div>
          <div className="highlight-item">
            <h3>專業研發團隊</h3>
            <p>經驗豐富的研發團隊，不斷創新技術。</p>
          </div>
          <div className="highlight-item">
            <h3>先進生產設備</h3>
            <p>引進先進生產設備，提高生產效率與品質。</p>
          </div>
          <div className="highlight-item">
            <h3>完善售後服務</h3>
            <p>提供全面的售後服務，解決客戶的後顧之憂。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
