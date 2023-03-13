import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './CartTable.css'






const CartTotal = ({ booksOnSaleData, handleRemoveItem }) => {

    const [avg, setAvg] = useState([])
    console.log(avg);


    useEffect(() => {
        setAvg(booksOnSaleData)
    }, [booksOnSaleData])
    console.log(avg);
    return (
        <div className="">

            {
                avg?.map((cartItem, cartindex) => {
                    return (

                        <div>
                            <div class="flex flex-col"> <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="table w-10/12 align-middle container mx-auto mt-10 ">

                                            <tbody className='w-10/12 align-middle container mx-auto mt-10'>

                                                <tr class="  bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <div className="avatar">
                                                            <div className="w-24 rounded">
                                                                <img src={cartItem.img} alt="" />
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {cartItem.name}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        $  {cartItem.price}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">

                                                            <button onClick={() => {
                                                                const _avg = avg.map((item, index) => {
                                                                    return cartindex === index ? { ...item, subQuantity: item.subQuantity > 0 ? item.subQuantity - 1 : 0 } : item
                                                                })
                                                                setAvg(_avg)
                                                            }} className="btn btn-info"><AiOutlineMinus></AiOutlineMinus></button>
                                                            <div className='form-control btnInputOne text-center'>{cartItem.subQuantity}</div>
                                                            <button onClick={() => {
                                                                const _avg = avg.map((item, index) => {
                                                                    return cartindex === index ? { ...item, subQuantity: item.subQuantity + 1 } : item
                                                                })
                                                                setAvg(_avg)
                                                            }} className="btn btn-info"><BsPlusLg></BsPlusLg></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        ${cartItem.price * cartItem.subQuantity}
                                                    </td>
                                                    <td>
                                                        <button onClick={() => handleRemoveItem(cartItem._id)} className="btn btn-square">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }





            <div className='mx-auto table w-10/12 my-12'>
                <div className='border-b-2 rounded '>
                    <h1 className='text-2xl font-bold text-center p-5'>CALCULATE TOTAL PRODUCTS</h1>
                    <div className='border-2 grid grid-cols-2 '>


                        <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Total Order</h1></div>
                        <div className='border-b-2'> <h1 className='ml-4 text-xl font-semi-bold p-3'>
                            $  {
                                avg.map(item => item.price * item.subQuantity).reduce((total, value) => total + value, 0)
                            }

                        </h1></div>
                        <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>Delivery Charge</h1></div>

                        <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>$50</h1></div>
                        <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>TOTAL AMOUNT</h1></div>

                        <div className='border-b-2'><h1 className='ml-4 text-xl font-semi-bold p-3'>$ {
                            avg.map(item => item.price * item.subQuantity + 50).reduce((total, value) => total + value, -100)
                        }</h1></div>


                    </div>
                    <div className='p-5 text-center'>
                        <button class="btn btn-primary w-1/2"><Link to="/checkout">Place Order</Link></button>

                    </div>


                </div>
            </div>




        </div>
        // </div>

    );
};

export default CartTotal; 