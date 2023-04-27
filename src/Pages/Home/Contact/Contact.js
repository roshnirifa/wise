import React from 'react';
import './Contact.css'
import HeaderItems from '../Header/HeaderItems/HeaderItems';

const Contact = () => {
    return (
        <div>
            <HeaderItems></HeaderItems>

            <div className="flex justify-evenly bg-light contact container  mt-5 mb-5">

                <div className="contact-me pt-5">

                    <div>
                        <h1 className='text-4xl mt-5 text-cyan-900 font-bold'>Contact </h1>
                        <br />
                        <p><span className=' text-cyan-900 font-bold'> Address:</span> Sector#11, uttara Dhaka Gariv-E-Newaz Road</p>
                        <br />
                        <p><span className=' text-cyan-900 font-bold'>Email:</span> wiseshop@gmail.com</p>
                        <br />
                        <p><span className=' text-cyan-900 font-bold'>Phone:</span> +8801977778811</p>
                    </div>
                </div>
                <div action="" className='contact-form p-5'>

                    <div class="form-control p-2  ">
                        <input type="text" placeholder="Name" class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control  p-2  ">
                        <input type="text" placeholder="Email" class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control  p-2  ">
                        <input type="text" placeholder="Number" class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control  p-2  ">
                        <input type="text" placeholder="Address" class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control  p-2  ">
                        <textarea placeholder="Your Message" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    </div>


                    <div className='text-center'>
                        <button class="btn btn-wide">Submit</button>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Contact;