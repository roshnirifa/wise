import React from 'react';

const FirstSlot = ({ bookOnSale }) => {
    return (
        <div>
            <div className='w-10/12 align-middle container mx-auto mt-10'>

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




            </div>
        </div>
    );
};

export default FirstSlot; <h1>This is first slot</h1>