import React, { useState, useEffect } from 'react';
import styles from '../styles/News.module.css'; 
const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [admissionDates, setAdmissionDates] = useState([]);

  useEffect(() => {
    // Fetch news data from the server
    fetch('http://nova-hub.ru:9999/moc/newsData')
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error('Error fetching news data:', error));

    // Fetch admission dates data from the server
    fetch('http://nova-hub.ru:9999/moc/admissionDates')
      .then((response) => response.json())
      .then((data) => setAdmissionDates(data))
      .catch((error) => console.error('Error fetching admission dates data:', error));
  }, []);

  return (
    <div className={styles.container}> 
      <div className={styles['news-container']}> 
        <h2>Новости</h2>
        {newsData.map((newsItem) => (
          <div className={styles.card} key={newsItem.id}> 
            <h3>{newsItem.title}</h3>
            <p>{newsItem.date}</p>
            <p>{newsItem.content}</p>
          </div>
        ))}
      </div>
      <div className={styles['calendar-container']}> 
        <h2>Важные даты поступления</h2>
        <div className={styles.calendar}> 
          {admissionDates.map((dateItem) => (
            <div className={styles['calendar-date']} key={dateItem.id}> 
              <div className={styles['date-circle']}></div> 
              <h3>{dateItem.title}</h3>
              <p>{dateItem.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
