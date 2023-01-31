import React from 'react';

import './FeatureDetails.css'

const Card = ({ bookOnSale }) => {


    return (
        <div className='grid gap-10 grid-cols-2 mb-12'>

            <div className='border-2 grid grid-cols-2 border-b-2 rounded'>


                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Book Title</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>{bookOnSale.name}</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Author</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>{bookOnSale.writter}</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Ediiton Language</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>English</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Book Format</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Paperback</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Date Published</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>{bookOnSale.Year}</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Pages</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>456</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Lesson</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>7</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Topic</h1></div>
                <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>323</h1></div>

            </div>

            <div className='border-2 rounded bg-slate-200'>
                <h1 className='text-2xl font-bold text-center p-5'>Your Review </h1>
                <div className='grid grid-cols-2 gap-3'>

                    <div className='p-5'>
                        <input type="text" placeholder="Author" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className='p-5'>
                        <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>
                <div className='p-5'>
                    <textarea placeholder="Bio" className="textarea border-solid border-2 border-indigo-600 textarea-lg w-full  h-50" >Type Here</textarea>
                </div>
                <div className='p-10'>
                    <button className="btn btn-primary ml-10">Submit</button>

                </div>
            </div>
        </div>


    );
};

export default Card;

