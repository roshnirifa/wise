import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../../utilitis/fakedb';
import UseBooksOnSale from '../../UseBooksOnSale/UseBooksOnSale';
import Cart from '../BooksOnSale/Cart';
import HeaderItems from '../Header/HeaderItems/HeaderItems';
import CartTable from './CartTable';
import '../CartCalculation/CartCalcultaion.css';
import { AiTwotoneThunderbolt, AiFillLike, MdNavigateNext } from "react-icons/ai";



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
            <HeaderItems></HeaderItems>
            <div>
                <div className="hero" style={{ backgroundImage: `url("https://bookland.dexignzone.com/xhtml/images/background/bg3.jpg")`, color: "red" }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-white text-center ">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold p-20">CART</h1>

                            <div className='py-2'>
                                <button className="btn btn-primary">Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-10/12 align-middle container mx-auto mt-10 ">

                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Close</th>
                        </tr>
                    </thead>

                </table>
            </div>
            <div >

                {
                    initialCart.map(product => <CartTable
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}

                    ></CartTable>)
                }
                {
                    initialCart.length === 0 && <h1>No Items for buy. Please <Link to="/home">Shop More</Link ></h1>
                }
            </div>

            <h1>this is cartcalculation {cart.length}</h1>


        </div>
    );
};

export default CartCalculation;