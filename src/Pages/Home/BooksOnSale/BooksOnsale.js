import React from 'react';
import UseBooksOnSale from '../../UseBooksOnSale/UseBooksOnSale';
import { Swiper, SwiperSlide } from "swiper/react";
import './BooksOnSale.css'

// Import Swiper styles



import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { useState } from 'react';
import CartCalculation from '../CartCalculation/CartCalculation';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../../utilitis/fakedb';
import { useEffect } from 'react';



const BooksOnsale = () => {
    const { booksOnSale } = UseBooksOnSale();

    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

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
            const addedProduct = booksOnSale.find(product => product.id === id);
            // console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
                console.log(addedProduct);

            }
        }
        setCart(savedCart);
    }, [booksOnSale]);

    const handleAddtoClick = (bookOnSale) => {



        const newCart = [...cart, bookOnSale];
        setCart(newCart);

        // console.log(cart);

        addToDb(bookOnSale.id)
    }

    //jubairClose//

    return (

        <section className=' '>
            <div className='cart'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/cartcalculation">
                        <button>review</button>
                    </Link>
                </Cart>
            </div>



            <div className='container mx-auto px-5 '>
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

                                    <h3 className='text-center text-xl text-primary font-bold mr-5'>${bookOnSale.price}</h3>
                                    <h3 className='text-center text-xl previousPrice font-bold'><del>{bookOnSale.previousPrice}</del></h3>

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

        </section>
    );
};

export default BooksOnsale;