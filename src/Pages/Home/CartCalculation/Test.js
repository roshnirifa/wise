import React, { useEffect, useState } from 'react';

import auth from '../firebaseInit';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from '@tanstack/react-query';

const Test = () => {

    // const url = `http://localhost:5000/cart?email=${user?.email}`;
    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['cart', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    // console.log(bookings);
    // console.log(url);





    return (
        <div>

        </div>
    );
};

export default Test;  