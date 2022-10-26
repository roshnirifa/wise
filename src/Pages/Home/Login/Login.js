import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebaseInit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const location = useLocation();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlepassBlur = event => {
        setPass(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(email, pass)

    }


    const navigateSignUp = () => {
        navigate('/register');
    }


    const resetPassword = async () => {

        if (email) {
            await sendPasswordResetEmail(email);
            toast(' email sent');
        }
        else {
            toast('please enter your email address');
        }


    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='login p-5'>
            <div className='mx-auto login-container '>
                <div>
                    <h2 className=' text-3xl text-center pt-8 mt-5 text-primary font-bold '> Login</h2>
                </div>
                <form onSubmit={handleSubmit} className='m-5'>

                    <div className='text-center'>
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" required class="input input-bordered w-full max-w-xs mb-5 " />

                        <input onBlur={handlepassBlur} type="password" placeholder="Password" required class="input input-bordered w-full max-w-xs" />
                    </div>


                    <p className='text-danger'>{error?.message}</p>
                    {
                        loading && <Loading></Loading>
                    }

                    <div className='text-center mt-5'>
                        <button className='btn  w-full max-w-xs text-xs'>Login</button>
                    </div>
                    <div className='text-center'>
                        <p className='mt-4  font-bold text-sm'>New to Wise E-Commerce? <span className='text-primary text-sm' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Register</span></p>


                        <p className='mt-4 font-bold mb-5 text-sm'>Forget Password? <span className='text-primary text-sm' onClick={resetPassword} style={{ cursor: 'pointer' }}>Reset Password</span></p>
                    </div>

                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Login;