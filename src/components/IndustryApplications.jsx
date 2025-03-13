import React from 'react';
import './IndustryApplications.css';

function IndustryApplications() {
  const industries = [
    { name: '機械製造業', description: '提供高耐磨、耐壓彈性體零組件，延長機械壽命' },
    { name: '運動器材業', description: '輕量化、高彈性材料應用，提升運動表現' },
    { name: '食品製造業', description: '符合食品級安全標準的彈性體解決方案' },
    { name: '半導體製造業', description: '與志聖工業合作，提供高純度、防靜電彈性體零件' },
    { name: '航太配件', description: '符合航太級標準的高性能彈性體部件' },
    { name: '樂器配件', description: '精密彈性體零件，提升音質與演奏體驗' },
  ];

  return (
    <section className="industry-applications">
      <div className="container">
        <h2>多元產業應用，滿足各領域需求</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-item">
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryApplications;
