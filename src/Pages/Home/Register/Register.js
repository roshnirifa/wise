import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../firebaseInit';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleNameBlur = event => {
        setName(event.target.value);

    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlepassBlur = event => {
        setPass(event.target.value);
    }
    const handleConfirmPassBlur = event => {
        setConfirmPass(event.target.value);
    }
    if (user) {
        console.log("user", user);
    }




    const handleSubmit = async (e) => {
        e.preventDefault();

        if (pass !== confirmPass) {
            setError(<p className='text-red-500 mb-4'> your password didn't match </p>
            )
            return;
        }
        if (pass.length < 6) {
            setError(<p className='text-red-500 mb-4'> password should be 6 character long </p>
            )

            return;
        }
        await createUserWithEmailAndPassword(email, pass, confirmPass);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')

    }
    const navigateSignUp = () => {
        navigate('/login');

    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='login p-5'>
            <div className='mx-auto login-container my-4'>
                <h2 className='text-3xl text-center pt-8 mt-5 font-bold text-primary'>Please SignUp!!!!!</h2>

                <form onSubmit={handleSubmit} className=' m-5'>
                    <div className='text-center'>

                        <input onBlur={handleNameBlur} type="name" name="name" placeholder="Enter name" required class="input input-bordered w-full max-w-xs mb-5 " />

                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" required class="input input-bordered w-full max-w-xs mb-5" />

                        <input onBlur={handlepassBlur} type="password" name="password" placeholder="Password" required class="input input-bordered w-full max-w-xs mb-5" />

                        <input onBlur={handleConfirmPassBlur} type="password" name="confirm-password" placeholder="Confirm Password" required class="input input-bordered w-full max-w-xs" />
                    </div>





                    <p className='text-danger'>{error}</p>
                    <div className='text-center'>
                        <button className='btn  w-full max-w-xs mt-5 text-xs'>Register</button>
                    </div>


                    <p className='mt-4 text-danger font-bold text-center text-sm ' >Already have an account? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Login</span></p>

                    <SocialLogin></SocialLogin>


                </form>

            </div>

        </div>
    );
};

export default Register;