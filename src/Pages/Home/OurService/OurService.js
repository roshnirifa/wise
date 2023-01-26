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



            <div className='flex justify-between	mt-20'>
                <h1 className='text-4xl text-secondary font-bold ml-24 pt-8 '>Books On Sale</h1>


                <div lassName='  '>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max mr-24 mt-3">
                        <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-primary rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 40 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;