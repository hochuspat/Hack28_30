import React, { useState } from 'react';
import styles from '../styles/Test.module.css';

const SubjectChoiceTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: 'Какой вид искусства вам нравится больше всего?',
      options: ['Живопись', 'Музыка', 'Театр', 'Литература', 'Танцы'],
    },
    {
      question: 'Какое мероприятие вы предпочитаете?',
      options: ['Концерт', 'Выставка', 'Премьера спектакля', 'Книжный вечер', 'Танцевальный бал'],
    },
    {
      question: 'Какие путешествия вам более интересны?',
      options: ['Городские туры', 'Походы в горы', 'Поездки на море', 'Путешествия за границу', 'Путешествия по стране'],
    },
  ];

  const subjects = [
    {
      subject: 'Искусство и культура',
      description: 'Изучение искусства, истории и культуры различных народов и эпох. Работа в музеях, галереях и культурных учреждениях.',
      image: 'art.jpg', 
    },
    {
      subject: 'Музыка и пение',
      description: 'Изучение музыкальной теории, игры на инструментах и пения. Карьера музыканта, певца или музыкального продюсера.',
      image: 'music.jpg', 
    },
    {
      subject: 'Театр и актерское искусство',
      description: 'Обучение актерскому мастерству и театральному искусству. Работа на театральной сцене или в киноиндустрии.',
      image: 'theater.jpg', 
    },
    {
      subject: 'Литература и писательство',
      description: 'Изучение литературных произведений и техник писательского мастерства. Карьера писателя, редактора или литературного критика.',
      image: 'literature.jpg', 
    },
    {
      subject: 'Танцы и хореография',
      description: 'Обучение хореографии и танцевальному искусству. Работа танцора, хореографа или инструктора по танцам.',
      image: 'dance.jpg', 
    },
  ];

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
    let maxSubjectIndex = null;

    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i].subject;
      if (counts[subject] > maxCount) {
        maxCount = counts[subject];
        maxSubjectIndex = i;
      }
    }

    return maxSubjectIndex;
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
              <h2>Тест на выбор предмета для изучения</h2>
              <img
                src="https://mironov.ru/wp-content/uploads/2021/08/abiturient.jpg"
                alt="Abiturient"
                className={styles.ovalImage}
              />
              <button className={styles.nextButton1} onClick={handleStartTest}>
                Начать
              </button>
            </div>
          ) : (
            <div className={styles.testContent}>
              {result === null ? (
                <div>
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
                  <h2>Ваш предмет для изучения:</h2>
                  <div className={styles.resultImage}>
                    <img src={subjects[result].image} alt={subjects[result].subject} />
                  </div>
                  <p>{subjects[result].description}</p>
                  <button onClick={handleRepeatTest} className={styles.repeatButton}>
                    Пройти тест снова
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectChoiceTest;
