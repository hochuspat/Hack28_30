
import Head from 'next/head';
import Directions from '../components/Directions1';
import Sidebar from '../components/Sidebar'; 

export default function Home() {
  return (
    <div className="wrapper">
            <div className="backgroundImage2" />

      <Head>
        <title>Личный кабинет</title>
      </Head>
      
      <Sidebar /> 
      
      <div className="content">
        {/* Здесь будет ваш основной контент */}
        <Directions />
      </div>
    </div>
  );
}
