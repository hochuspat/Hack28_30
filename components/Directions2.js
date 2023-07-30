import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Cards1.module.css';

function CardDetails({ card, onBackClick, smallerCardsArray }) {
  return (
    <div className={styles.cardDetailsContainer}>
      <button className={styles.button} onClick={onBackClick}>
        <span className={styles.arrow}>&larr;</span> Назад
      </button>
      <div className={styles.largeCard}>
        <img src={card.image} alt={card.title} className={styles.largeCardImage} />
        <div className={styles.largeCardInfo}>
          <h2>{card.title}</h2>
          <p>{card.number}</p>
        </div>
      </div>
      <div className={styles.smallCardsContainer}>
        {smallerCardsArray.map((smallCard, index) => (
          <div key={index} className={styles.smallCard}>
            <img src={smallCard.image} alt={smallCard.title} />
            <h3>{smallCard.title}</h3>
            <span>{smallCard.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    // Fetch specialities data from the server
    fetch('http://nova-hub.ru:9999/moc/specialities_3')
      .then((response) => response.json())
      .then((data) => setSpecialities(data))
      .catch((error) => console.error('Error fetching specialities data:', error));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
  };

  if (selectedCard) {
    const smallerCardsArray = specialities.slice(0, 3);
    return (
      <CardDetails card={selectedCard} onBackClick={handleBackClick} smallerCardsArray={smallerCardsArray} />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>Избранные специальности</h3>
      </div>
      <div className={styles.cards}>
        {specialities.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(card)}
          >
            <div className={styles.image}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={styles.title}>
              <h3>{card.title}</h3>
            </div>
            <div className={styles.number}>
              <span>{card.number}</span>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
}
