import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swiper, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { addToDb, getStoredCart } from '../../../utilitis/fakedb';
import UseBooksOnSale from '../../UseBooksOnSale/UseBooksOnSale';
import FeatureCard from './FeatureCard';


const FeatureProduct = () => {
    const { booksOnSale } = UseBooksOnSale();

    const [cart, setCart] = useState([]);



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
        <div>

            <div>
                <h1 className='text-4xl font-bold text-center title pt-9'>Featured Product</h1>
                <p className=' text-center px-48 my-4' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>


            <div>


                {
                    booksOnSale.map(bookOnSale =>


                        <div id={bookOnSale.id} className="carousel-item relative w-full">

                            <div className="hero">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img alt='' src={bookOnSale.img} />
                                    <div>
                                        <h1 className="text-5xl font-bold">{bookOnSale.name}</h1>
                                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <h2>${bookOnSale.price}</h2>
                                        <button
                                            onClick={() => handleAddtoClick(bookOnSale)}

                                            className='btn btn-secondary px-12'><Link to="/cartcalculation">Buy Now</Link>
                                        </button>
                                        <button className="btn btn-info ml-5"><Link to={`/featureDetails/${bookOnSale.id}`}>Details</Link></button>

                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                }

            </div>


        </div>
    );
};

export default FeatureProduct;