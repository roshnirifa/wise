import React, { useEffect, useState } from 'react';
import './RecomendedBooks.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { TbCurrencyTaka } from "react-icons/tb";

// Import Swiper styles

import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import UseBooksOnSale from '../../UseBooksOnSale/UseBooksOnSale';

import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseInit';




const RecomendedBooks = () => {
    const { recommendedBooks } = UseBooksOnSale();
    const [user] = useAuthState(auth);

    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/recomandDetails/${id}`)

    }





    const handleBuyNow = (recommendedBooks) => {


        // console.log(recommendedBooks);


        const img = recommendedBooks.img
        const name = recommendedBooks.name;
        const price = recommendedBooks.price;
        const subQuantity = recommendedBooks.subQuantity;
        const email = user?.email;

        const booking = {
            img: img,
            price: price,
            name: name,
            subQuantity: subQuantity,
            email: email
        }

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })



    }



    return (
        <section className='recomendedBooks py-4'>


            <div>
                <h1 className='text-4xl font-bold text-center title pt-9'>Recomended For You</h1>
                <p className=' text-center px-48 my-4' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>

            <div className='container mx-auto px-5 mb-12'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={false}
                    // modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="bookSwiper  ">

                    {
                        recommendedBooks.map(recommendedBooks => <SwiperSlide className='bookslide mb-12'>

                            <img src={recommendedBooks.img} alt="" />
                            <div className='text-center'>
                                <h3 className='text-center text-2xl text-secondary font-bold'>{recommendedBooks.name}</h3>

                                <h3 className=' flex text-2xl text-primary font-bold justify-center items-center'>
                                    <TbCurrencyTaka />{recommendedBooks.price}


                                </h3>


                                <div className='mt-2'>
                                    <button
                                        onClick={() => handleBuyNow(recommendedBooks)}

                                        className='btn btn-secondary px-12'><Link to="/cartcalculation">Buy Now</Link>
                                    </button>
                                    <button onClick={() => handleDetails(recommendedBooks._id)} className='btn btn-info ml-5'>Details</button>
                                </div>


                            </div>


                        </SwiperSlide>)
                    }

                </Swiper>

            </div>


        </section>
    );
};

export default RecomendedBooks;