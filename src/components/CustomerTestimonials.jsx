import React from 'react';
import './CustomerTestimonials.css';

function CustomerTestimonials() {
  const testimonials = [
    {
      author: '機械製造公司 - 王經理',
      content: '詠懋企業的彈性體零件大幅提升了我們機械設備的耐用性，降低了維護成本，非常值得信賴。'
    },
    {
      author: '運動器材品牌 - 李研發',
      content: '與詠懋合作開發的輕量化彈性體材料，讓我們的產品在市場上更具競爭力，運動員反應極佳。'
    },
    {
      author: '食品加工廠 - 陳廠長',
      content: '詠懋提供的食品級彈性體解決方案完全符合安全標準，讓我們在生產食品時更加安心。'
    },
  ];

  return (
    <section className="customer-testimonials">
      <div className="container">
        <h2>客戶見證</h2>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <blockquote className="quote">{testimonial.content}</blockquote>
              <p className="author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerTestimonials;
