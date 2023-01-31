import React from 'react';
import { useState } from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/FeatureDetailsHook';
import HeaderItems from '../Home/Header/HeaderItems/HeaderItems';
import UseBooksOnSale from '../UseBooksOnSale/UseBooksOnSale';
import Card from './Card';
import './FeatureDetails.css'
import Review from './Review';


const FeatureDetails = () => {
    const { id } = useParams();
    const [service] = useServiceDetail(id);

    const { booksOnSale } = UseBooksOnSale();
    console.log(booksOnSale);

    const [active, setActive] = useState("FirstCard")
    return (
        <div>
            <HeaderItems></HeaderItems>
            {
                service.map(bookOnSale =>
                    <div>
                        <div className="w-10/12 align-middle container mx-auto mt-10  ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={bookOnSale.img} alt="" className="banerImg" />
                                <div>
                                    <h1 className="text-4xl ml-5 font-bold">{bookOnSale.name}</h1>

                                    <div className="rating rating-md m-5 ">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <h3 className='text-2xl font-semibold pl-3'>3.0</h3>
                                        <div className='flex'>
                                            <AiFillFacebook className='Allicon  mainIcon'></AiFillFacebook>
                                            <AiFillTwitterSquare className='Allicon '></AiFillTwitterSquare>
                                            <AiOutlineWhatsApp className='Allicon  '></AiOutlineWhatsApp>
                                            <AiOutlineMail className='Allicon  '></AiOutlineMail>
                                        </div>
                                    </div>
                                    <div className='flex ml-8 gap-20 font-xl'>
                                        <h1>Written by</h1>
                                        <h1>Publisher</h1>
                                        <h1>Year</h1>
                                    </div>
                                    <div className='flex font-4xl '>
                                        <h1 className='ml-4 font-bold text-xl'>{bookOnSale.writter}</h1>
                                        <h1 className='ml-4 font-bold text-xl'>{bookOnSale.Publisher}</h1>
                                        <h1 className='ml-4 font-bold text-xl'>{bookOnSale.Year}</h1>
                                    </div>

                                    <p className="py-6 m-4">{bookOnSale.description}</p>
                                    <div className='flex'>
                                        <h1 className='ml-5 text-4xl font-bold'>${bookOnSale.price}</h1>
                                        <button className="btn btn-primary ml-10">Add To Cart</button>


                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="btn-group w-10/12 align-middle container mx-auto mt-10 ">
                            <button
                                onClick={() => setActive("FirstCard")}
                                className="btn btn-active">Product Details</button>

                            <button
                                onClick={() => setActive("SecundCard")}
                                className="btn">Customer Review</button>
                        </div>
                        <div className='w-10/12 align-middle container mx-auto mt-10 '>
                            {active === "FirstCard" && <Card bookOnSale={bookOnSale} booksOnSale={booksOnSale}></Card>}
                            {active === "SecundCard" && <Review bookOnSale={bookOnSale}></Review>}
                        </div>
                        <div>

                        </div>
                    </div>



                )
            }

        </div>
    );
};

export default FeatureDetails;