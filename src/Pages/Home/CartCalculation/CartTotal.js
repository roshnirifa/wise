import React, { useEffect, useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { addToDb } from '../../../utilitis/fakedb';
import './CartTable.css';
import CheckOut from './CheckOut';






const CartTotal = ({ booksOnSaleData, handleRemoveItem, user }) => {
    const [avg, setAvg] = useState([]);
    useEffect(() => {
        setAvg(booksOnSaleData);
    }, [booksOnSaleData]);
    addToDb(avg);

    const Price = avg.map((item) => item.price * item.subQuantity).reduce((total, value) => total + value, 0)
    const totalPrice = Price + 50;




    return (
        <div className="">
            {avg?.map((cartItem, cartindex) => {
                return (
                    <div>
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="table w-10/12 align-middle container mx-auto mt-10 ">
                                            <tbody className="w-10/12 align-middle container mx-auto mt-10">
                                                <tr class="  bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <div className="avatar">
                                                            <div className="w-24 rounded">
                                                                <img
                                                                    src={cartItem.img}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {cartItem.name}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        {cartItem.price}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                                                            <button
                                                                onClick={() => {
                                                                    const _avg = avg.map((item, index) => {
                                                                        return cartindex === index
                                                                            ? {
                                                                                ...item,
                                                                                subQuantity:
                                                                                    item.subQuantity > 0
                                                                                        ? item.subQuantity - 1
                                                                                        : 0,
                                                                            }
                                                                            : item;
                                                                    });
                                                                    setAvg(_avg);
                                                                    // #update cart start
                                                                    const updatedElement = _avg[cartindex];
                                                                    fetch(
                                                                        `http://localhost:5000/cart/${updatedElement._id}`,
                                                                        {
                                                                            method: 'POST',
                                                                            headers: {
                                                                                'content-type': 'application/json',
                                                                            },
                                                                            body: JSON.stringify({
                                                                                img: updatedElement.img,
                                                                                price: updatedElement.price,
                                                                                name: updatedElement.name,
                                                                                subQuantity: updatedElement.subQuantity,
                                                                                email: updatedElement.email,
                                                                            }),
                                                                        },
                                                                    )
                                                                        .then((res) => res.json())
                                                                        .then((data) => {
                                                                            console.log('From 2', data);
                                                                        });
                                                                    // #update card end
                                                                }}
                                                                className="btn btn-info"
                                                            >
                                                                <AiOutlineMinus></AiOutlineMinus>
                                                            </button>
                                                            <div className="form-control btnInputOne text-center">
                                                                {cartItem.subQuantity}
                                                            </div>
                                                            <button
                                                                onClick={() => {
                                                                    const _avg = avg.map((item, index) => {
                                                                        return cartindex === index
                                                                            ? {
                                                                                ...item,
                                                                                subQuantity: item.subQuantity + 1,
                                                                            }
                                                                            : item;
                                                                    });
                                                                    setAvg(_avg);
                                                                    // #shahadat3669 start
                                                                    const updatedElement = _avg[cartindex];
                                                                    console.log(updatedElement);
                                                                    fetch(
                                                                        `http://localhost:5000/cart/${updatedElement._id}`,
                                                                        {
                                                                            method: 'POST',
                                                                            headers: {
                                                                                'content-type': 'application/json',
                                                                            },
                                                                            body: JSON.stringify({
                                                                                img: updatedElement.img,
                                                                                price: updatedElement.price,
                                                                                name: updatedElement.name,
                                                                                subQuantity: updatedElement.subQuantity,
                                                                                email: updatedElement.email,
                                                                            }),
                                                                        },
                                                                    )
                                                                        .then((res) => res.json())
                                                                        .then((data) => {
                                                                            console.log('From 2', data);
                                                                        });
                                                                    // #shahadat3669 end
                                                                }}
                                                                className="btn btn-info"
                                                            >
                                                                <BsPlusLg></BsPlusLg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>{cartItem.price * cartItem.subQuantity}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => handleRemoveItem(cartItem._id)}
                                                            className="btn btn-square"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-6 w-6"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M6 18L18 6M6 6l12 12"
                                                                />
                                                            </svg>
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
                );
            })}

            <div className="grid gap-10 grid-cols-2 table w-10/12 align-middle container mx-auto mt-10 ">


                <div className="border-b-2 rounded">
                    <h1 className="text-2xl font-bold text-center p-5">
                        CALCULATE TOTAL PRODUCTS
                    </h1>
                    <div className="border-2 grid grid-cols-2 ">
                        <div className="border-b-2">
                            <h1 className="ml-4 text-xl font-semi-bold p-3">Total Order</h1>
                        </div>
                        <div className="border-b-2">
                            {' '}
                            <h1 className="ml-4 text-xl font-semi-bold p-3">
                                {' '}
                                {avg
                                    .map((item) => item.price * item.subQuantity)
                                    .reduce((total, value) => total + value, 0)}
                            </h1>
                        </div>
                        <div className="border-b-2">
                            <h1 className="ml-4 text-xl font-semi-bold p-3">
                                Delivery Charge
                            </h1>
                        </div>

                        <div className="border-b-2">
                            <h1 className="ml-4 text-xl font-semi-bold p-3"> 50</h1>
                        </div>
                        <div className="border-b-2">
                            <h1 className="ml-4 text-xl font-semi-bold p-3">TOTAL AMOUNT</h1>
                        </div>

                        <div className="border-b-2">
                            <h1 className="ml-4 text-xl font-semi-bold p-3">
                                {' '}
                                {totalPrice}
                            </h1>
                        </div>
                    </div>

                    {/* <div className="p-5">
            <Link to="/payment"><button className="btn btn-primary w-1/2 ">
              Process to Checkout
            </button></Link>
            
          </div> */}

                </div>
                <CheckOut totalPrice={totalPrice} user={user}></CheckOut>

            </div>

        </div>
    );
};

export default CartTotal;
