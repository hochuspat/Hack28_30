import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import styles from '../styles/LoginForm.module.css';


const validUsers = [
  { login: '1', password: '1' },
  { login: 'user2', password: 'password2' },
];

export default function Home() {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginData, setLoginData] = useState({ login: '', password: '' });

  const handleLoginButtonClick = () => {
    console.log('Login data:', loginData);
  
    const isValidUser = validUsers.some(
      (user) => user.login === loginData.login && user.password === loginData.password
    );
  
    console.log('isValidUser:', isValidUser);
  
    if (isValidUser) {
      setLoginStatus(true);
      router.push('/calculator');
    } else {
      alert('Invalid login or password. Please try again.');
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="wrapper">
      <div className="backgroundImage2" />
      <Head>
        <title>Вход</title>
      </Head>
      <Navigation />
      <h1
        style={{
          color: '#000',
          textAlign: 'center',
          fontFamily: 'ABeeZee', 
          fontSize: '48px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        Вход
      </h1>
      <div className={styles.loginFormContainer}>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="login">Логин:</label>
            <input
              type="text"
              id="login"
              name="login"
              value={loginData.login}
              className={styles.inputField}
              style={{
                width: '422px',
                height: '57px',
                flexShrink: 0,
                borderRadius: '20px',
                background: '#DDD',
              }}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              className={styles.inputField}
              style={{
                width: '422px',
                height: '57px',
                flexShrink: 0,
                borderRadius: '20px',
                background: '#DDD',
              }}
              onChange={handleChange}
            />
          </div>
          <button type="button" className={styles.submitButton} onClick={handleLoginButtonClick}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
