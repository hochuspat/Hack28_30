import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import Slider from 'react-slick';

const CardSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const cardData = [
    {
      imageUrl: '/3.svg',
      title: 'Выбери профессию',
      description: 'Пройди один из тестов и узнай какая профессия тебе подходит',
    },
    {
      imageUrl: '/4.svg',
      title: 'Выбери профиль обучения',
      description: 'Выбери профиль обучения, который позволит получить профессию',
    },
    {
      imageUrl: '/5.svg',
      title: 'Выбери специальность',
      description: 'Выбери специальность, к которой относится профиль обучения3',
    },
    {
      imageUrl: '/6.svg',
      title: 'Выбери ВУЗ',
      description: 'Выбери вуз, в который хочешь поступить',
    },

  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
  };

  return (
<div style={{ width: '100%', height: '100%', marginTop: '56px', position: 'relative', fontFamily: 'ABeeZee',
 }}>
<ImageComponent style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, fontFamily: 'ABeeZee',
 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, fontFamily: 'ABeeZee',
 }}>
      <Slider {...sliderSettings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <div
              style={{
                marginTop: '230px',
                width: '334px',
                height: '383px',
                flexShrink: 0,
                borderRadius: '30px',
                border: '1px solid rgba(0, 0, 0, 0.80)',
                background: '#FFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '24px',
              }}
            >
              <div style={{ width: '150px', height: '150px', flexShrink: 0 }}>
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
              <div
                style={{
                  color: '#000',
                  fontFamily: 'ABeeZee',    
                  fontSize: '20px',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  marginTop: '16px',
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'ABeeZee',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  width: '274px',
                  marginTop: '8px',
                }}
              >
                {card.description}
              </div>
              <button
                  style={{
                    width: '100%',
                    height: '14%',
                    fontFamily: 'ABeeZee',

                    padding: '11px 110px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    flexShrink: 0,
                    borderRadius: '10px',
                    background: '#4E3DD1',
                    border: 'none',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Начать
                </button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default CardSlider;