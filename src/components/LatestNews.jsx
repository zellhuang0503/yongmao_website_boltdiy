import React from 'react';
import './LatestNews.css';

function LatestNews() {
  const newsItems = [
    { title: '最新技術突破：詠懋研發團隊成功開發新一代耐高溫彈性體材料', date: '2024-03-15' },
    { title: '產業洞察：彈性體材料在半導體產業的應用趨勢分析', date: '2024-03-10' },
    { title: '展會資訊：詠懋參展2025台北國際工業展，展位B-235，歡迎蒞臨參觀', date: '2024-03-01' },
  ];

  return (
    <section className="latest-news">
      <div className="container">
        <h2>最新消息</h2>
        <div className="news-list">
          {newsItems.map((news, index) => (
            <div key={index} className="news-item">
              <h3>{news.title}</h3>
              <p className="date">{news.date}</p>
              <a href="#" className="read-more">閱讀更多</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
