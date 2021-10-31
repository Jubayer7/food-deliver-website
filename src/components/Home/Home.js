import React from 'react';
import Banner from '../Banner/Banner';
import Dishes from '../Dishes/Dishes';
import Header from '../Header/Header';
import Work from '../Login/Work/Work';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dishes></Dishes>
            <Work></Work>
        </div>
    );
};

export default Home;