import React, { useState } from 'react';
import styles from '../styles/Cards2.module.css';
import CreditCards from '../components/CreditCards'; 

const SpecialityCard = ({ speciality }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const handleCardClick = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div
      className={`${styles.card} ${isFavorite ? styles.favorite : ''} ${isExpanded ? styles.expanded : ''}`}
      onClick={handleCardClick}
    >
      <div className={styles.imageContainer}>
        <img src={speciality.image} alt={speciality.title} className={styles.image} />
      </div>
      <h3 className={styles.title}>{speciality.title}</h3>
      <p className={styles.minimumScore}>Проходной балл: {speciality.minimumScore}</p>
      <button className={styles.favoriteButton} onClick={handleFavoriteClick}>
        <span role="img" aria-label="favorite" className={styles.heartIcon}>
          {isFavorite ? '❤️' : '🤍'}
        </span>
      </button>
      {isExpanded && (
        <div className={styles.creditCardsContainer}>
          <CreditCards />
        </div>
      )}
    </div>
  );
};

export default SpecialityCard;
