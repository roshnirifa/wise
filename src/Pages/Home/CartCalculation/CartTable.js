import React, { useState } from 'react';
import { addToDb, removeFromDb, getStoredCart } from '../../../utilitis/fakedb';
import { BsShieldCheck, BsPlusLg, TiMinus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import './CartTable.css'
import { useEffect } from 'react';

const CartTable = ({ product, handleRemoveItem, handleClick }) => {
    const { id, name, price, img, length } = product
    console.log(product);


    const [quantity, setQuantity] = useState(1)
    addToDb(quantity);


    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);

        }
        removeFromDb(quantity);
        getStoredCart(quantity)

    };
    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1);

        }
        addToDb(quantity);
        getStoredCart(quantity)


    };



    const countPrice = quantity * price;




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-10/12 align-middle container mx-auto mt-10 ">


                    <tbody>

                        <tr>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img alt='' src={img} />
                                    </div>
                                </div>
                            </td>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td>
                                <div className="btn-group btn-group-vertical lg:btn-group-horizontal">

                                    <button onClick={handleIncrement} className="btn btn-info"><BsPlusLg></BsPlusLg></button>
                                    <div className='form-control btnInputOne text-center'>{quantity}</div>
                                    <button onClick={handleDecrement} className="btn btn-info"><AiOutlineMinus></AiOutlineMinus></button>
                                </div>
                            </td>
                            <td>
                                {countPrice}
                            </td>
                            <td>

                                <button onClick={() => handleRemoveItem(id)} className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </td>
                        </tr>


                    </tbody>
                </table>
                <div>
                    <h1>total</h1>
                </div>
            </div>

        </div>
    );
};

export default CartTable; 