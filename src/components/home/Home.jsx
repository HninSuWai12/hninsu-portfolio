import React from 'react';
import "./home.css";
import Socila from './Socila';
import Data from './Data';
import ScrollDown from './ScrollDown';
const Home = () => {
  return (
    <section className="home section" id='home'>
        <div className="home-container container grid">
            <div className="home-content grid">
            <Socila/>
            <div className="home-img"></div>
            <Data/>
            </div>
            <ScrollDown/>

        </div>
    </section>
  )
}

export default Home
