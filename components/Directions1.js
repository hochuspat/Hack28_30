import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Cards1.module.css';
import creditCardsStyles from '../styles/CreditCardsStyles.module.css';
function CreditCard({ card }) {
  return (
    <div className={styles.creditCard}>
      <img src={card.imageSrc} alt={card.title} />
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
}

function CardDetails({ card, onBackClick, smallerCardsArray, creditCardsData }) {
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
      <div className={creditCardsStyles.cardsWrapper}> 
        <div className={creditCardsStyles.cards}> 
          {creditCardsData.map((card, index) => (
            <div key={index} className={creditCardsStyles.card}> 
              <div className={creditCardsStyles.image}> 
                <img src={card.imageSrc} alt={card.title} />
              </div>
              <div className={creditCardsStyles.description}> 
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <p>Это кредит на оплату обучения в вузе</p>
                <button className={creditCardsStyles['apply-button']}>Отправить заявку</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [specialities, setSpecialities] = useState([]);
  const [creditCardsData, setCreditCardsData] = useState([]);
  const [universities, setUniversities] = useState([]); // Define the universities array

  useEffect(() => {
    // Fetch specialities data from the server
    fetch('http://nova-hub.ru:9999/moc/specialities_3')
      .then((response) => response.json())
      .then((data) => setSpecialities(data))
      .catch((error) => console.error('Error fetching specialities data:', error));

    // Fetch credit cards data from the server
    fetch('http://nova-hub.ru:9999/moc/creditCardsData')
      .then((response) => response.json())
      .then((data) => setCreditCardsData(data))
      .catch((error) => console.error('Error fetching credit cards data:', error));

    // Fetch universities data from the server
    fetch('http://nova-hub.ru:9999/moc/universities_2')
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error('Error fetching universities data:', error));
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
      <CardDetails
        card={selectedCard}
        onBackClick={handleBackClick}
        smallerCardsArray={smallerCardsArray}
        creditCardsData={creditCardsData}
      />
    );
  }  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Добро пожаловать, Юзер</h2>
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
            <div className={styles.link}>
              <Link href={card.link}>
                <div>Смотреть специальности</div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.heading}>
        <h3>Избранные Вузы</h3>
      </div>
      <div className={styles.cards}>
        {universities.map((card, index) => (
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
            <div className={styles.link}>
              <Link href={card.link}>
                <div>Посетить университет</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}