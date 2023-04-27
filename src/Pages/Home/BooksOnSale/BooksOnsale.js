import React from 'react';
import UseBooksOnSale from '../../UseBooksOnSale/UseBooksOnSale';
import { Swiper, SwiperSlide } from "swiper/react";
import './BooksOnSale.css'
import { TbCurrencyTaka } from "react-icons/tb";

// Import Swiper styles

import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseInit';

const BooksOnsale = () => {
    const { booksOnSale } = UseBooksOnSale();
    const [user] = useAuthState(auth);
    // console.log(user);
    const navigate = useNavigate()
    const handleCheckOut = (id) => {
        navigate(`/booksOnSaleDetails/${id}`)
    }

    const handleAddtoClick = (bookOnSale) => {


        console.log(bookOnSale);


        const img = bookOnSale.img
        const name = bookOnSale.name;
        const price = bookOnSale.price;
        const subQuantity = bookOnSale.subQuantity;
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

        <section>

            <div className='container mx-auto px-5 '>
                <div>
                    <h1 className='text-4xl font-bold text-center title pt-9'>Books On Sale</h1>

                </div>
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
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="bookSwiper  ">

                    {
                        booksOnSale.map(bookOnSale => <SwiperSlide className='bookslide mb-12'>

                            <img src={bookOnSale.img} alt="" />
                            <div className='text-center'>
                                <h3 className='text-center text-2xl text-secondary font-bold'>{bookOnSale.name}</h3>

                                <div className='flex justify-center'>

                                    <h3 className=' flex justify-center items-center  text-xl text-primary font-bold mr-5'>  <TbCurrencyTaka />{bookOnSale.price}</h3>


                                    <h3 className='  text-xl previousPrice font-bold'><del className='flex justify-center items-center'> <TbCurrencyTaka />{bookOnSale.previousPrice}</del>
                                    </h3>

                                </div>

                                <div className='mt-2'>
                                    <button
                                        onClick={() => handleAddtoClick(bookOnSale)}

                                        className='btn btn-secondary px-12'><Link to="/cartcalculation">Buy Now</Link>
                                    </button>
                                    <button onClick={() => handleCheckOut(bookOnSale.id)} className='btn btn-info ml-5'>Details</button>
                                </div>


                            </div>


                        </SwiperSlide>)
                    }
                </Swiper>

            </div>

        </section >
    );
};

export default BooksOnsale;