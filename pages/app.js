import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import CareerAptitudeTest from '../components/CareerAptitudeTest';
import InteractiveCharts from '../components/InteractiveCharts';
import styles from '../styles/App.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage2} />

      <Head>
        <title>Личный кабинет</title>
      </Head>

      <Sidebar />

      <div className={styles.content}>
        <div className={styles.chartsContainer}>
          <InteractiveCharts />
        </div>
        <div className={styles.testsContainer}>
          <div className={styles.test}>
            <CareerAptitudeTest />
          </div>
        </div>
      </div>
    </div>
  );
}
