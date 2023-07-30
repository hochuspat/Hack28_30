import Head from 'next/head';
import News from '../components/News';
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
        <News />
      </div>
    </div>
  );
}
