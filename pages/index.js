
import Head from 'next/head'
import Header from '../components/Header'
import Directions from '../components/Directions'
import Institutions from '../components/Institutions'
import Navigation from '../components/Navigation'
import CardSlider from '../components/CardSlider';
export default function Home() {
  return (
<div className="wrapper">
      <div className="backgroundImage" />     
       <Head>
        <title>Твоя траектория поступления в ВУЗы России</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Navigation /> 
      <Header />
      <CardSlider/>
      <Directions />
      <Institutions />
    </div>
  )
}
