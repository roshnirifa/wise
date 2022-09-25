import React from 'react';
import banner1 from "../../../img/banner1.png"
import banner2 from "../../../img/banner2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./bannerStyles.css"



const Banner = () => {
    return (
        // <div className='banner '>
        //     <div className='flex items-center'>
        //         <div className='text-white px-12'>
        //             <h1 className='font-bold text-xl mb-4'>Upto 20% off on Wise E-commerce Products</h1>
        //             <h1 className='text-6xl	mb-5'>CHOOSE YOUR BRAIN FOOD</h1>
        //             <p className='text-xl'>Cover up front of book and leave summary</p>
        //         </div>
        //         <div>
        //             <img className='banner-img pt-5 px-12' src={banner1} alt="" />
        //         </div>
        //     </div>
        //     <div className='flex items-center'>
        //         <div className='text-white px-12'>
        //             <h1 className='font-bold text-xl mb-4'>Upto 20% off on Wise E-commerce Products</h1>
        //             <h1 className='text-6xl	mb-5'>CHOOSE YOUR BRAIN FOOD</h1>
        //             <p className='text-xl'>Cover up front of book and leave summary</p>
        //         </div>
        //         <div>
        //             <img className='banner-img pt-5 px-12' src={banner2} alt="" />
        //         </div>
        //     </div>
        // </div>
        // <div>
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={false}

            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={false}


            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <div
                slot="container-start"
                className="parallax-bg"

                data-swiper-parallax="-23%">

            </div>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">

                    <div className='banner '>
                        <div className='flex items-center'>
                            <div className='text-white px-12'>
                                <h1 className='font-bold text-xl mb-4 font-serif '>Upto 20% off on Wise E-commerce Products</h1>
                                <h1 className='text-6xl	mb-5'>CHOOSE YOUR BRAIN FOOD</h1>
                                <p className='text-xl font-serif '>Cover up front of book and leave summary</p>
                            </div>
                            <div>
                                <img className='banner-img pt-5 px-12' src={banner1} alt="" />
                            </div>
                        </div>

                    </div>
                    <div>



                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">

                    <div className='banner2 '>
                        <div className='flex items-center'>
                            <div className=' px-12'>
                                <h1 className='font-bold text-xl mb-4 font-serif '>Upto 20% off on Wise E-commerce Products</h1>
                                <h1 className='text-6xl	mb-5 font-bold'>THINK AND GROW RICH</h1>
                                <p className='text-xl font-serif '>Cover up front of book and leave summary</p>
                            </div>
                            <div>
                                <img className='banner-img pt-5 px-12' src={banner2} alt="" />
                            </div>
                        </div>

                    </div>
                    <div>



                    </div>
                </div>
            </SwiperSlide>


        </Swiper>

    );
};

export default Banner;