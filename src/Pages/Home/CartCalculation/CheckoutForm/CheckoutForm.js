import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseInit';



const CheckoutForm = ({ avg }) => {
    console.log(avg);
    const { price } = avg;

    const [user] = useAuthState(auth);

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');




    useEffect(() => {
        // Create PaymentIntent as soon as the page loads

        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            body: JSON.stringify({ price }),
            headers: {
                'Content-Type': 'application/json',

            },

        })
            .then((res) => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);


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
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            setSuccess('');
        }

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError.message);

        }
        else {
            setCardError('');
            console.log(paymentIntent);
            setSuccess("Congrats! Your Payment is Completed")
        }


    }





    return (
        <div className='border p-3  mb-5 checkout-container p-5 '>
            <form onSubmit={handleSubmit}>

                <div>
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

                    <button type="submit" className=' btn btn-primary w-1/2 mt-12' disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
            {

                cardError && <p className='text-red-500'>
                    {cardError}
                </p>
            }
            {

                success && <p className='text-green-500'>
                    {success}
                </p>
            }
        </div>
    );
};

export default CheckoutForm;