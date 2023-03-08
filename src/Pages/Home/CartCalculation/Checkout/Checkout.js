import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51MjExdBidVZOWdMSUOoKInrVq1HZE86QegBCzknkK5BRE0FweNl4H9AHgFajYrIwfic8CdHmk3XYq9ZYf79FY45U00sWDO1oTo');
const Checkout = () => {
    return (
        <div className='mx-auto w-1/2 my-12'>
            <h1 className='text-2xl font-bold text-center p-5'> SHIPPING</h1>
            <div className='p-5 px-0'>
                <input type="text" placeholder="Your Address" className="input input-bordered input-info w-full " />
            </div>
            <div className='p-5 px-0'>
                <input type="text" placeholder="Your Phone Number" className="input input-bordered input-info w-full " />
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>


        </div>
    );
};

export default Checkout;