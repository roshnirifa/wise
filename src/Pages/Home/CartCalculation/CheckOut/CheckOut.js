import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseInit';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './CheckOut.css'



const stripePromise = loadStripe('pk_test_51MjExdBidVZOWdMSUOoKInrVq1HZE86QegBCzknkK5BRE0FweNl4H9AHgFajYrIwfic8CdHmk3XYq9ZYf79FY45U00sWDO1oTo');

// 


const Checkout = () => {
    const [user] = useAuthState(auth);
    const [avg, setAvg] = useState([])
    const [booksOnSaleData, setbooksOnSaleData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setbooksOnSaleData(data))
    }, [user])


    useEffect(() => {
        setAvg(booksOnSaleData)
    }, [booksOnSaleData])
    // console.log(avg);
    return (
        <div className='grid gap-10 grid-cols-2 p-10 '>
            <div className='checkout-container  p-5'>
                <h1 className='text-xl font-semi-bold ' >Total Amount</h1>
                <p className='text-3xl font-bold '>$ {
                    avg.map(item => item.price * item.subQuantity + 50).reduce((total, value) => total + value, 0)
                }
                </p>

                <div>
                    <table className="table w-10/12 align-middle container mx-auto mt-10 ">

                        <thead class="w-10/12 bg-no-repeat align-middle container mx-auto mt-10  bg-gray-200 border-b">
                            <tr>

                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Product { }
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

                            </tr>

                        </thead>
                        {
                            avg.map(product => (
                                <tbody key={product._id}>
                                    <tr>
                                        <td><img style={{ height: "80px" }} src={product.img} alt="" /></td>
                                        <td>{product.name}</td>

                                        <td>{product.price}</td>

                                        <td className='text-center' >{product.subQuantity}
                                        </td>
                                        <td>
                                            ${product.price * product.subQuantity}
                                        </td>



                                    </tr>

                                </tbody>


                            ))
                        }

                    </table>
                </div>
            </div>

            <Elements stripe={stripePromise}>
                <CheckoutForm avg={avg} />
            </Elements>


        </div>

    );
};

export default Checkout;