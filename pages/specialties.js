import Head from 'next/head';
import Sidebar from '../components/Sidebar'; 
import YourComponent from '../components/YourComponent'; 

export default function Home() {
  return (
    <div className="wrapper">
            <div className="backgroundImage2" />

      <Head>
        <title>Личный кабинет</title>
      </Head>
      
      <Sidebar /> 
      
      <div className="content">
        <YourComponent />
      </div>
    </div>
  );
}

  