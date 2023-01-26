import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const UseTestimonial = () => {
    const [testimonials, setTestimonial] = useState([]);


    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])




    return { testimonials }
};

export default UseTestimonial;