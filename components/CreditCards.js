import React, { useState, useEffect } from 'react';
import styles from '../styles/CreditCardsStyles.module.css'; 

const CreditCards = () => {
  const [creditCardsData, setCreditCardsData] = useState([]);

  useEffect(() => {
    // Fetch credit card data from the server
    fetch('http://nova-hub.ru:9999/moc/creditCardsData')
      .then((response) => response.json())
      .then((data) => setCreditCardsData(data))
      .catch((error) => console.error('Error fetching credit card data:', error));
  }, []);
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cards}>
        {creditCardsData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.image}>
              <img src={card.imageSrc} alt={card.title} />
            </div>
            <div className={styles.description}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <p>Это кредит на оплату обучения в вузе</p>
              <button className={styles["apply-button"]}>Отправить заявку</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCards;