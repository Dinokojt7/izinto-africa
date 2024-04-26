import React from 'react';
import GetApp from './Download';
import About from './About';
import Hero from './Hero';
import Intro from './Intro';
import Platform from './Platform';
import Tabs from './Tabs';
import Newsroom from './Newsroom';
import Footers from './Footers';
import Credits from './Credits';

function Home () {
    return (
        <div>
            <Hero />
            <Intro />
            <About />
            <GetApp />
            <Platform />
            <Tabs />
            <Newsroom />
            <Footers />
            <Credits />
        </div>
    )
}

export default Home;