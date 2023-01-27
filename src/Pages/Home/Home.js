import React from 'react';
import Banner from './Banner/Banner';
import BooksOnsale from './BooksOnSale/BooksOnsale';


import HeaderItems from './Header/HeaderItems/HeaderItems';
import OurService from './OurService/OurService';
import RecomendedBooks from './RecomendedBooks/RecomendedBooks';

import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div >
            <HeaderItems></HeaderItems>
            <Banner></Banner>
            <RecomendedBooks></RecomendedBooks>
            <OurService></OurService>
            <BooksOnsale></BooksOnsale>
            <Testimonials></Testimonials>


        </div>
    );
};

export default Home;