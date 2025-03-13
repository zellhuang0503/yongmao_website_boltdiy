import React from 'react';
import './CustomSolutions.css';

function CustomSolutions() {
  const solutions = [
    { name: '表面粗度調控', description: '精確控制表面紋理，滿足特殊摩擦係數需求' },
    { name: '耐高溫彈性體', description: '開發溫度範圍-40°C至300°C的特殊彈性材料' },
    { name: '出油改善技術', description: '解決傳統彈性體出油問題，延長產品使用壽命' },
    { name: '異材質結合技術', description: '創新接合工藝，實現彈性體與金屬、塑料等異質材料的牢固結合' },
    { name: '表面處理/抗沾黏', description: '特殊表面處理技術，提供抗沾黏、易清潔表面' },
  ];

  return (
    <section className="custom-solutions">
      <div className="container">
        <h2>客製化彈性體解決方案，應對各種技術挑戰</h2>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-item">
              <h3>{solution.name}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomSolutions;
