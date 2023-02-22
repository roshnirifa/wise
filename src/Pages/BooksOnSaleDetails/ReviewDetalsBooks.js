import React from 'react';
import { useParams } from 'react-router-dom';
import RecomandReviewHook from '../../Hooks/RecomandReviewHook';

const ReviewDetailsBooks = () => {
    const { id } = useParams();
    const [service] = RecomandReviewHook(id);
    console.log(service);
    return (
        <div>

            <div className='m-5 bg-info p-5 border-4 w-10/12 align-middle container mx-auto mt-10  grid gap-2 grid-cols-2'>

                {
                    service.map(review =>

                        <div className="  shadow-xl border-4 bg-gray-50  align-middle container mx-auto mt-5 ">

                            <div className='p-5'>
                                <h2 >Name: {review.customer}</h2>
                                <p>Email: {review.email}</p>
                                <h1 className="card-title mt-5">{review.message}</h1>

                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default ReviewDetailsBooks;