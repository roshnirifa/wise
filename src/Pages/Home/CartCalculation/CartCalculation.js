import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart, removeFromDb } from '../../../utilitis/fakedb';
import UseBooksOnSale from '../../UseBooksOnSale/UseBooksOnSale';
import Cart from '../BooksOnSale/Cart';
import HeaderItems from '../Header/HeaderItems/HeaderItems';

import '../CartCalculation/CartCalcultaion.css';
import { AiTwotoneThunderbolt, AiFillLike, MdNavigateNext, AiOutlineMinus } from "react-icons/ai";
import { useEffect } from 'react';
import CartTotal from './CartTotal';
import { BsPlusLg } from 'react-icons/bs';


const CartCalculation = () => {
    const { initialCart } = UseBooksOnSale();

    const [cart, setCart] = useState(initialCart)
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        console.log(remaining);
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div>

            <div>

                <HeaderItems></HeaderItems>


                <div>
                    <div className="hero" style={{ backgroundImage: `url("https://bookland.dexignzone.com/xhtml/images/background/bg3.jpg")`, color: "red" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="text-white text-center ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold p-20">CART</h1>

                                <div className='py-2'>
                                    <button className="btn btn-primary w-1/2"><Link to="/">Home</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <table className="table w-10/12 align-middle container mx-auto mt-10 ">

                        <thead class="w-10/12 bg-no-repeat align-middle container mx-auto mt-10  bg-gray-200 border-b">
                            <tr>

                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Product
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Product Name
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Price
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Quantity
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    total
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    remove
                                </th>
                            </tr>

                        </thead>

                    </table>
                </div>
                <CartTotal initialCart={initialCart} handleRemoveItem={handleRemoveItem}></CartTotal>

            </div>
        </div>
    );
};

export default CartCalculation;


