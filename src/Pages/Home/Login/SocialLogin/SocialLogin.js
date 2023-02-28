import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading/Loading';
import { BsGoogle } from "react-icons/bs";
import auth from '../../firebaseInit';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='text-center'>
            <div className='flex justify-center'>
                <div className='flex items-center w-2/4  '>
                    <div className='orDiv' ></div>
                    <p className='mb-1'>or</p>
                    <div className='orDiv'></div>
                </div>
            </div>
            <button className='btn  w-full max-w-xs text-xs mt-5' onClick={() => signInWithGoogle()} ><BsGoogle className='icon'></BsGoogle>Signin with google</button>
            {/* <div className='d-flex btn-group'>
                <button className='btn btn-danger mb-3 ' onClick={() => signInWithGoogle()} ><BsGoogle className='icon'></BsGoogle> Signin With Google</button>

            </div> */}

        </div>
    );
};

export default SocialLogin;