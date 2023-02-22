import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Home/firebaseInit';
import Loading from '../Shared/Loading/Loading';
import ReviewDetails from './ReviewDetails';

const Review = ({ bookOnSale }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    const handlePlaceOrder = event => {
        navigate(`/recomandDetails/${bookOnSale.id}`)
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';


        const message = form.message.value;
        const id = bookOnSale.id

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
                    form.reset();


                }

            })

    }
    return (
        <div className='m-5 bg-info p-5 border-4  w-10/12 align-middle container mx-auto mt-10'>
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
            </div>
            <h1 className='text-4xl text-center mt-10 font-bold'>Others Review</h1>
            <ReviewDetails></ReviewDetails>
        </div>
    );
};

export default Review; 