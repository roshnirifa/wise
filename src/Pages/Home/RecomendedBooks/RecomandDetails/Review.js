
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseInit';
import './review.css'

import ReviewDetails from './ReviewDetails';

const Review = ({ bookOnSale }) => {
    const [user] = useAuthState(auth);
    // const navigate = useNavigate()
    // console.log(bookOnSale);


    const handlePlaceOrder = event => {
        // navigate(`/recomandBooks/${bookOnSale._id}`)
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';


        const message = form.message.value;
        const id = bookOnSale._id

        const order = {
            customer: name,
            email,

            message,
            id
        }
        console.log(order);


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('review placed successfully')
                    window.location.reload();



                }

            })

    }
    return (
        <div className='m-5 review-container p-5 border-4'>
            <h1 className='text-4xl font-bold text-center title pt-5'>Your Review</h1>
            <div className=''>
                <form onSubmit={handlePlaceOrder}>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered bg-slate-50" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered  bg-slate-50" />


                    </div>
                    <textarea name="message" type="text" className="textarea textarea-bordered h-24 w-full mt-10" placeholder="Your Message" required></textarea>

                    <input className='btn' type="submit" value="Place Your Review" />
                </form>
                <h1 className='text-4xl text-center mt-10 font-bold'>Others Review</h1>
                <ReviewDetails></ReviewDetails>
            </div>
        </div>
    );
};

export default Review; 