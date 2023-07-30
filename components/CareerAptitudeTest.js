import React, { useState, useEffect } from 'react';
import styles from '../styles/Test.module.css';



const CareerAptitudeTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [result, setResult] = useState(null);
  const [careerDirections, setCareerDirections] = useState([]);
  const [specialtyCards, setSpecialtyCards] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch career directions data from the server
    fetch('http://nova-hub.ru:9999/moc/careerDirections')
      .then((response) => response.json())
      .then((data) => setCareerDirections(data))
      .catch((error) => console.error('Error fetching career directions data:', error));

    // Fetch specialty cards data from the server
    fetch('http://nova-hub.ru:9999/moc/specialtyCards')
      .then((response) => response.json())
      .then((data) => setSpecialtyCards(data))
      .catch((error) => console.error('Error fetching specialty cards data:', error));

    // Fetch questions data from the server
    fetch('http://nova-hub.ru:9999/moc/questions_2')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error fetching questions data:', error));
  }, []);
  
  const handleStartTest = () => {
    setIsTestStarted(true);
  };

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const resultIndex = calculateResult(answers);
      setResult(resultIndex);
    }
  };
  const calculateResult = (answers) => {
    let counts = {};
    for (let answer of answers) {
      counts[answer] = (counts[answer] || 0) + 1;
    }

    let maxCount = 0;
    let maxDirectionIndex = null;

    for (let i = 0; i < careerDirections.length; i++) {
      const direction = careerDirections[i].direction;
      if (counts[direction] > maxCount) {
        maxCount = counts[direction];
        maxDirectionIndex = i;
      }
    }

    return maxDirectionIndex;
  };

  const handleRepeatTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };
  
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.testContainer}>
          {!isTestStarted ? (
            <div className={styles.testIntro}>
              <h2>Тест на выбор предмета для сдачи на ЕГЭ</h2>
              <img
                src="https://mironov.ru/wp-content/uploads/2021/08/abiturient.jpg"
                alt="Abiturient"
                className={styles.ovalImage}
              />
              <button className={styles.nextButton1} onClick={handleStartTest}>
                Начать
              </button>
            </div>
          ) : result === null ? (
            <div className={styles.testContent}>
              <h2 className={styles.question}>{questions[currentQuestion].question}</h2>
              <div className={styles.options}>
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={`option${index}`}
                      name="answer"
                      value={option}
                      onChange={handleAnswerChange}
                      checked={answers[currentQuestion] === option}
                    />
                    <label htmlFor={`option${index}`}>{option}</label>
                  </div>
                ))}
              </div>
              <button onClick={handleNextQuestion} className={styles.nextButton1}>
                {currentQuestion < questions.length - 1 ? 'Следующий' : 'Завершить'}
              </button>
            </div>
          ) : (
            <div className={styles.resultContainer}>
              <h2>Ваше направление для выбора специальности:</h2>
              <h3>{careerDirections[result].direction}</h3>
              <p>{careerDirections[result].description}</p>
             
              <button onClick={handleRepeatTest} className={styles.repeatButton}>
                Пройти тест снова
              </button>
            </div>
          )}
        </div>
      </div>

  {result !== null && (
  <div className={styles.card1}>
    <div className={styles.specialtyCards}>
      {specialtyCards
        .filter((card) => careerDirections[result].specialties.includes(card.specialty))
        .map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h3>{card.specialty}</h3>
              <p>Средняя стоимость: {card.averageCost}</p>
              <p>Проходной балл: {card.passingScore}</p>
            </div>
            <div
              className={
                card.budgetType === 'бюджет' ? styles.budgetGreen : styles.budgetPurple
              }
            >
              {card.budgetType}
            </div>
          </div>
        ))}
    </div>
  </div>
)}
  </div>
);

};
export default CareerAptitudeTest;

