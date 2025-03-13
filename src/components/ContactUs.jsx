import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="container">
        <h2>聯絡我們</h2>
        <div className="contact-info">
          <div className="info-item">
            <h3>台灣總部</h3>
            <p>地址：434台中市龍井區龍西里龍門路120號</p>
            <p>電話：(04)2639-1847</p>
          </div>
          <div className="info-item">
            <h3>業務聯絡</h3>
            <p>專線：(04)2639-1847</p>
            <p>Email: <a href="mailto:yongmao.a214@msa.hinet.net">yongmao.a214@msa.hinet.net</a></p>
          </div>
          <div className="info-item">
            <h3>客服專線</h3>
            <p>電話：(04)2639-1847</p>
          </div>
        </div>
        <div className="contact-form">
          <h3>需求表單</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">聯絡電話</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="company">公司名稱</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-group">
              <label htmlFor="需求描述">需求描述</label>
              <textarea id="需求描述" name="需求描述" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">提交需求</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
