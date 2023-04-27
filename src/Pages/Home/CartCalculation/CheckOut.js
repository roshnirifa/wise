import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseInit';

const CheckOut = ({ totalPrice }) => {
    const [user] = useAuthState(auth);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const address = form.address.value;
        const postcode = form.postcode.value;
        const currency = form.currency.value;
        const _id = "636c11a5457ad8aeff54ce42"
        const order = {

            totalPrice,

            service: _id,
            customer: name,
            email,
            phone,
            address,
            postcode,
            currency
        };

        console.log(order);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url);

            })

    };


    return (
        <div>
            <form onSubmit={handlePlaceOrder} className="flex items-center justify-between">

                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            className="input input-ghost w-full  input-bordered"
                        />
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="input input-ghost w-full  input-bordered"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Your Phone"
                            className="input input-ghost w-full  input-bordered"
                            required
                        />
                        <input
                            name="email"
                            type="text"
                            placeholder="Your email"
                            defaultValue={user?.email}
                            className="input input-ghost w-full  input-bordered"
                            disabled
                        />
                        <select
                            defaultValue="BDT"
                            name="currency"
                            className="select select-bordered max-w-xs"
                        >
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                        </select>

                        <input
                            type="text"
                            name="postcode"
                            placeholder="Your Postcode"
                            className="input input-ghost w-full  input-bordered"
                        />
                    </div>


                    <textarea
                        name="address"
                        className="textarea textarea-bordered h-24 w-full my-5"
                        placeholder="Your Address"
                        required
                    ></textarea>

                    <input className="btn w-full" type="submit" value="Pay" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;