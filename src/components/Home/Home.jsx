import React from 'react';
import './Home.css';
import HomeHeader from '../HomeHeader/HomeHeader'
import HomeTiles from '../HomeTiles/HomeTiles'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <HomeTiles />
      <Footer />
    </div>
  );
}

export default Home;
