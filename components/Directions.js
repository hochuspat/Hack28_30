import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Cards.module.css';

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch('http://nova-hub.ru:9999/moc/specialities_3')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Направления высшего образования в России</h2>
      </div>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.image}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={styles.number}>
              <span>{card.number}</span>
            </div>
            <div className={styles.title}>
              <h3>{card.title}</h3>
            </div>
            <div className={styles.link}>
              <Link href={card.link}>
                <div>Смотреть специальности</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer2}>
        <button className={styles.button}>
          Смотреть все специальности <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
}
