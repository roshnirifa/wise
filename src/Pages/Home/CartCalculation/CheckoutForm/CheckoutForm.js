import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseInit';

const CheckoutForm = () => {
    const [user] = useAuthState(auth);

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = {
            name: user?.displayName,
            email: user?.email,


        }
        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
        }
    }

    return (
        <div className='border p-3  mb-5 checkout-container p-5 '>
            <form onSubmit={handleSubmit}>

                <h1 className='text-2xl font-bold text-center p-5'> SHIPPING</h1>

                <div className='py-2'>
                    <label >Name:</label>
                    <input type="text" disabled value={user?.displayName} className="input input-bordered input-info w-full " />
                </div>


                <div className='py-2'>
                    <label >Email:</label>
                    <input type="text" disabled value={user?.email} className="input input-bordered input-info w-full " />
                </div>

                <div className='py-2'>
                    <label >Address:</label>
                    <input type="text" placeholder="Your Address" className="input input-bordered input-info w-full " />
                </div>

                <div className='py-2 mb-5'>
                    <label >Phone Number:</label>
                    <input type="text" placeholder="Your Phone Number" className="input input-bordered input-info w-full " />
                </div>


                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />



                <div className='text-center'>
                    <button type="submit" className=' btn btn-primary w-1/2 mt-12' disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
            {

                cardError && <p className='text-red-500'>
                    {cardError}
                </p>
            }
        </div>
    );
};

export default CheckoutForm;