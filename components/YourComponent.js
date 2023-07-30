import React, { useEffect, useState } from 'react';
import styles from '../styles/YourComponent.module.css';
import SpecialityCard from '../components/SpecialityCard';

const subjects = [
  ['Русский язык', 'Математика', 'Иностранный язык'],
  ['Биология', 'География', 'Химия'],
  ['Обществознание', 'Информатика', 'Литература'],
  ['Физика'],
];

const YourComponent = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [isButtonGray, setIsButtonGray] = useState(false);
  const [showInputForm, setShowInputForm] = useState(false);
  const [pointsData, setPointsData] = useState({});
  const [showSpecialities, setShowSpecialities] = useState(false);
  const [filteredSpecialities, setFilteredSpecialities] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [specialities, setSpecialities] = useState([]); // Define the specialities array

  const calculateTotalScore = () => {
    return Object.values(pointsData).reduce((total, score) => {
      const parsedScore = parseInt(score, 10);
      return isNaN(parsedScore) ? total : total + parsedScore;
    }, 0);
  };

  useEffect(() => {
    // Fetch specialities data from the server
    fetch('http://nova-hub.ru:9999/moc/specialities_4')
      .then((response) => response.json())
      .then((data) => setSpecialities(data))
      .catch((error) => console.error('Error fetching specialities data:', error));
  }, []);
    const handleSubjectClick = (subject) => {
      if (selectedSubjects.includes(subject)) {
        setSelectedSubjects((prevSelected) => prevSelected.filter((s) => s !== subject));
      } else {
        if (selectedSubjects.length < 3) {
          setSelectedSubjects((prevSelected) => [...prevSelected, subject]);
        }
      }
    };
  
    const handleButtonClick = () => {
      if (selectedSubjects.length === 3) {
        setIsButtonGray(true);
        setShowInputForm(true);
      }
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPointsData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmitForm = (e) => {
      e.preventDefault();
  
      const calculatedTotalScore = calculateTotalScore();
      setTotalScore(calculatedTotalScore);
  
      const filteredSpecialities = specialities.filter((speciality) => {
        const hasRequiredSubjects = speciality.requiredSubjects.every((subject) =>
          selectedSubjects.includes(subject)
        );
        return hasRequiredSubjects && speciality.minimumScore <= calculatedTotalScore;
      });
  
      if (!isNaN(calculatedTotalScore)) {
        setShowSpecialities(true);
        setFilteredSpecialities(filteredSpecialities); 
      }
      setShowInputForm(false); 
    setShowSpecialities(true); 
    };
  
    return (
        <div className={styles.container}>
          {!showSpecialities && (
            <div>
              <div className={styles.heading}>Выберите предметы для сдачи ЕГЭ</div>
    
              {!showInputForm && (
                <div className={styles.subjectsContainer}>
                  {subjects.map((row, rowIndex) => (
                    <div className={styles.row} key={rowIndex}>
                      {row.map((subject, colIndex) => (
                        <button
                          key={colIndex}
                          className={`${styles.button} ${
                            selectedSubjects.includes(subject) ? styles.selectedButton : ''
                          }`}
                          onClick={() => handleSubjectClick(subject)}
                          disabled={
                            isButtonGray ||
                            (selectedSubjects.length === 3 && !selectedSubjects.includes(subject))
                          }
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  ))}
                  <button
                    className={`${styles.nextButton} ${isButtonGray ? styles.disabled : ''}`}
                    onClick={handleButtonClick}
                    disabled={selectedSubjects.length < 3}
                  >
                    Далее<span className={styles.arrow}>→</span>
                  </button>
                </div>
              )}
    
              {showInputForm && selectedSubjects.length === 3 && (
                <div className={styles.inputFormContainer}>
                  <form onSubmit={handleSubmitForm} className={styles.inputForm}>
                    {selectedSubjects.map((subject) => (
                      <div key={subject} className={styles.selectedSubjectContainer}>
                        <label htmlFor={subject} className={styles.subjectLabel}>
                          {subject}:
                        </label>
                        <input
                          type="number"
                          id={subject}
                          name={subject}
                          className={styles.pointsInput}
                          required
                          onChange={handleInputChange}
                          value={pointsData[subject] || ''}
                        />
                      </div>
                    ))}
                    <button type="submit" className={styles.nextButton1}>
                      Далее<span className={styles.arrow}>→</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}
    

    {showSpecialities && (
        <div className={styles.cards}>
          <h2>Специальности на которые Вы сможете пройти:</h2>
          {filteredSpecialities.map((speciality, index) => (
            <SpecialityCard key={index} speciality={speciality} />
          ))}
        </div>
      )}
    </div>
  );
};

export default YourComponent;