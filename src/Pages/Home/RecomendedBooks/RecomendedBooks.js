import React from 'react';
import UseRecommendedBooks from '../../UseRecommendedBooks/UseRecommendedBooks';

import './RecomendedBooks.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles



import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const RecomendedBooks = () => {
    const { recommendedBooks } = UseRecommendedBooks();
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
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="bookSwiper  ">

                    {
                        recommendedBooks.map(recommendedBook => <SwiperSlide className='bookslide mb-12'>

                            <img src={recommendedBook.img} alt="" />
                            <div className='text-center'>
                                <h3 className='text-center text-2xl text-secondary font-bold'>{recommendedBook.name}</h3>
                                <h3 className='text-center text-2xl text-primary font-bold'>{recommendedBook.price}</h3>

                                <div className='mt-2'>
                                    <button className='btn btn-secondary px-12'>Buy Now</button>
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
