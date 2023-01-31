import React from 'react';


const Testimonial = (props) => {
    const { name, description, img } = props.testimonial;
    return (



        <div class="card w-96 bg-primary text-primary-content pb-5 ">
            <div class="card-body">
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-white " />
                    <input type="radio" name="rating-2" class="mask mask-star-2  bg-white" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2  bg-white" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2  bg-white" />
                    <input type="radio" name="rating-2" class="mask mask-star-2  bg-white" />
                </div>

                <p className='text-white font-bold  italic text-lg'>
                    {description}
                </p>

                <div className='flex items-center '>
                    <div class="avatar ">
                        <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    < div className='ml-5 text-white '>
                        <p className='font-bold text-lg'>{name}</p>
                        <p>Books Lover</p>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Testimonial;