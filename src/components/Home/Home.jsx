import React from 'react';
import './Home.css';
import HomeHeader from './HomeHeader/HomeHeader'
import HomeTiles from './HomeTiles/HomeTiles'

function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <HomeTiles />
    </div>
  );
}

export default Home;
