import React, { useEffect, useState } from 'react';
import UseRecommendedBooks from '../../UseRecommendedBooks/UseRecommendedBooks';

import './RecomendedBooks.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles



import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import UseBooksOnSale from '../../UseBooksOnSale/UseBooksOnSale';
import { addToDb, getStoredCart } from '../../../utilitis/fakedb';
import { Link, useNavigate } from 'react-router-dom';



const RecomendedBooks = () => {
    const { recommendedBooks } = UseBooksOnSale();

    const [cart, setCart] = useState([]);
    const navigate = useNavigate()
    const handleCheckOut = (id) => {
        navigate(`/featureDetails/${id}`)
    }


    //jubair//
    // const navigate = useNavigate()
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = recommendedBooks.find(product => product.id === id);
            // console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
                console.log(addedProduct);

            }
        }
        setCart(savedCart);
    }, [recommendedBooks]);

    const handleAddtoClick = (recommendedBooks) => {



        const newCart = [...cart, recommendedBooks];
        setCart(newCart);

        // console.log(cart);

        addToDb(recommendedBooks.id)
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
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="bookSwiper  ">



                    {
                        recommendedBooks.map(recommendedBooks => <SwiperSlide className='bookslide mb-12'>

                            <img src={recommendedBooks.img} alt="" />
                            <div className='text-center'>
                                <h3 className='text-center text-2xl text-secondary font-bold'>{recommendedBooks.name}</h3>
                                <h3 className='text-center text-2xl text-primary font-bold'>${recommendedBooks.price}</h3>

                                <div className='mt-2'>
                                    <button
                                        onClick={() => handleAddtoClick(recommendedBooks)}

                                        className='btn btn-secondary px-12'><Link to="/cartcalculation">Buy Now</Link>
                                    </button>

                                    {/* <button onClick={() => handleCheckOut(recommendedBooks.id)} className='btn btn-info ml-5'>Details
                                    </button> */}

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