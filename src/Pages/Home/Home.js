import React from 'react';
import Banner from './Banner/Banner';

import HeaderItems from './Header/HeaderItems/HeaderItems';
import OurService from './OurService/OurService';
import RecomendedBooks from './RecomendedBooks/RecomendedBooks';


const Home = () => {
    return (
        <div>
            <HeaderItems></HeaderItems>
            <Banner></Banner>
            <RecomendedBooks></RecomendedBooks>
            <OurService></OurService>

        </div>
    );
};

export default Home;