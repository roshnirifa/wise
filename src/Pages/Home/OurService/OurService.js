import React from 'react';
import { AiTwotoneThunderbolt, AiFillLike } from "react-icons/ai";
import { BsShieldCheck, BsFillStarFill } from "react-icons/bs";
import "./OurService.css"

const OurService = () => {
    return (
        <div className='container mx-auto px-5 my-12'>
            <div className='grid gap-4 grid-cols-4 '>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <div className='icon p-5 rounded-lg '>
                            <AiTwotoneThunderbolt />
                        </div>
                    </div>

                    <h1 className='text-2xl text-secondary font-bold my-3'>Quick Delivery
                    </h1>
                    <div>
                        <p className='service-description px-12' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <div className='icon p-5 rounded-lg '>
                            <BsShieldCheck />
                        </div>
                    </div>

                    <h1 className='text-2xl text-secondary font-bold my-3'>Secure Payment

                    </h1>
                    <div>
                        <p className='service-description px-12' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <div className='icon p-5 rounded-lg '>
                            <AiFillLike />
                        </div>
                    </div>

                    <h1 className='text-2xl text-secondary font-bold my-3'>Best Quality

                    </h1>
                    <div>
                        <p className='service-description px-12' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <div className='icon p-5 rounded-lg '>
                            <BsFillStarFill />
                        </div>
                    </div>

                    <h1 className='text-2xl text-secondary font-bold my-3'>Return Guarantee
                    </h1>
                    <div>
                        <p className='service-description px-12' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>



            </div>




        </div>
    );
};

export default OurService;