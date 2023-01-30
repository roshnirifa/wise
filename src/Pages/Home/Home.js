import React from 'react';
import Banner from './Banner/Banner';
import BooksOnsale from './BooksOnSale/BooksOnsale';
import Cart from './BooksOnSale/Cart';
import CartCalculation from './CartCalculation/CartCalculation';
import CartTotal from './CartCalculation/CartTotal';


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
            <BooksOnsale></BooksOnsale>


        </div>
    );
};

export default Home;