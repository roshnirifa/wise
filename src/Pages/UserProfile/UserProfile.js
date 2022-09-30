import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Home/firebaseInit';

const UserProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSubmit = event => {
        event.preventDefault();
        const number = event.target.number.value;
        const city = event.target.city.value;
        const location = event.target.location.value;
        const linkedin = event.target.linkedin.value;
        let data = {
            name: user?.displayName,
            email: user?.email,

            city: city,
            number: number,
            location: location,
            linkedin: linkedin
        }
        console.log(data);

        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Profile Updated Done');
                event.target.reset();

            });

    }
    return (
        <div>
            <h1 className='text-center text-3xl  font-bold my-6'>Add Profile Information</h1>


            <div className='flex justify-center'>
                <img className='w-64 rounded-lg' src={user && user.photoURL} alt="" />
            </div>




            <form onSubmit={handleSubmit} className="px-48 mb-10">
                <label >Name:</label>
                <input type="text" disabled value={user?.displayName} class="input input-bordered w-full  mb-3 px-12" /> <br />
                <label >Email:</label>
                <input type="email" disabled value={user?.email} class="input input-bordered w-full mb-3" /> <br />
                <label >City:</label>
                <input type="text" placeholder="city" name='city' class="input input-bordered w-full mb-3" /> <br />
                <label >Location:</label>
                <input type="text" placeholder="location" name='location' class="input input-bordered w-full  mb-3" /> <br />
                <label >Linkedin:</label>
                <input type="text" placeholder="Linkedin" name='linkedin' class="input input-bordered w-full  mb-3" /> <br />
                <label >Number:</label>
                <input type="Number" placeholder="Number" class="input input-bordered w-full  mb-3" name='number' /> <br />
                <input className='btn btn-primary w-full ' type="submit" value='Update Profile' />
            </form>
        </div>



    );
};

export default UserProfile;
