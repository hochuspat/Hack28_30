
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter(); 
  const handleLoginButtonClick = () => {
    router.push('/login'); 
  };

  return (
    <div className={styles.header}>
      <div className={styles.new}>
        <span>NEW</span>
      </div>
      <div className={styles.link}>
        <Link href="/app">
          <div>Поступил? Переходи в приложение для студентов →</div>
        </Link>
      </div>
      <div className={styles.title}>
        <h1>Твоя траектория поступления в ВУЗы России</h1>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleLoginButtonClick}>
          Найти специальность мечты! <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
}


