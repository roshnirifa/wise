import React from 'react';
import UseTestimonial from '../../UseTestimonial/UseTestimonial';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const { testimonials } = UseTestimonial()
    return (
        <div className='px-12'>
            <div>
                <h1 className='text-4xl text-secondary font-bold  '>Testimonial</h1>
                <p className='w-1/2 service-description my-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='grid gap-4 grid-cols-3 '>

                {
                    testimonials.slice(0, 3).map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}

                    >

                    </Testimonial>)
                }

            </div>
        </div>
    );
};

export default Testimonials;