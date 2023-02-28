import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebaseInit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
// import SocialLogin from './SocialLogin/SocialLogin';
import './Login.css'
import useToken from '../../../Hooks/useToken';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';


const Login = () => {
    // const navigate = useNavigate();
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const location = useLocation();


    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useSignInWithEmailAndPassword(auth);

    // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    // let from = location.state?.from?.pathname || "/";

    // const handleEmailBlur = event => {
    //     setEmail(event.target.value);
    // }
    // const handlepassBlur = event => {
    //     setPass(event.target.value);
    // }

    // if (user) {
    //     navigate(from, { replace: true });
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     signInWithEmailAndPassword(email, pass)

    // }


    // const navigateSignUp = () => {
    //     navigate('/register');
    // }


    // const resetPassword = async () => {

    //     if (email) {
    //         await sendPasswordResetEmail(email);
    //         toast(' email sent');
    //     }
    //     else {
    //         toast('please enter your email address');
    //     }


    // }
    // if (loading) {
    //     return <Loading></Loading>
    // }

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(gUser || user);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // const handleEmailBlur = event => {
    //     setEmail(event.target.value);
    // }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    };
    const resetPassword = async () => {

        if ({ email }) {
            await sendPasswordResetEmail(email);
            toast(' email sent');
        }
        else {
            toast('please enter your email address');
        }


    }


    let signInError;
    if (token) {
        return (
            navigate(from, { replace: true })

        );
    }

    // useEffect(() => {
    //     if (token) {
    //         navigate(from, { replace: true })
    //     }
    // }, [token, from, navigate])


    if (gError || error) {
        signInError = <p className='text-red-500'>
            {
                error?.message
                || gError?.message
            } </p>
    }
    if (gLoading || loading) {
        return <Loading></Loading>;
    }





    return (
        // <div className='login p-5'>
        //     <div className='mx-auto login-container '>
        //         <div>
        //             <h2 className=' text-3xl text-center pt-8 mt-5 text-primary font-bold '> Login</h2>
        //         </div>
        //         <form onSubmit={handleSubmit} className='m-5'>

        //             <div className='text-center'>
        //                 <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" required class="input input-bordered w-full max-w-xs mb-5 " />

        //                 <input onBlur={handlepassBlur} type="password" placeholder="Password" required class="input input-bordered w-full max-w-xs" />
        //             </div>


        //             <p className='text-danger'>{error?.message}</p>
        //             {
        //                 loading && <Loading></Loading>
        //             }

        //             <div className='text-center mt-5'>
        //                 <button className='btn  w-full max-w-xs text-xs'>Login</button>
        //             </div>
        //             <div className='text-center'>
        //                 <p className='mt-4  font-bold text-sm'>New to Wise E-Commerce? <span className='text-primary text-sm' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Register</span></p>


        //                 <p className='mt-4 font-bold mb-5 text-sm'>Forget Password? <span className='text-primary text-sm' onClick={resetPassword} style={{ cursor: 'pointer' }}>Reset Password</span></p>
        //             </div>

        //             <SocialLogin></SocialLogin>
        //             <ToastContainer />
        //         </form>
        //     </div>
        // </div>
        <div className='flex justify-center items-center my-8' >
            <div className="login-container">
                <div className="card-body mx-auto ">
                    <h2 className="card-title text-primary font-bold text-3xl mx-auto">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='m-5'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">

                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "email is requried"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                                }
                            })}
                                type="email"
                                name='email'
                                placeholder="email"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500"> {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500"> {errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">

                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is requried"
                                },

                                minLength: {
                                    value: 6,
                                    message: 'must be 6 characters longer' // JS only: <p>error message</p> TS only support string
                                }

                            })}
                                type="password"
                                placeholder="password"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500"> {errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500"> {errors.password.message}</span>}

                            </label>
                        </div>
                        {
                            signInError
                        }
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Login' />
                        <p className='mt-3 text-danger font-bold  text-center text-sm '>New to Wise E-commerce? <span className='text-primary'><Link to='/register'>Create New Account</Link></span></p>
                        <p className='mt-3 text-danger font-bold  text-center text-sm'>Forget Password? <span className='text-primary text-sm' onClick={resetPassword} style={{ cursor: 'pointer' }}>Reset Password</span></p>
                    </form>


                    <div class="divider">OR</div>
                    <div className='mx-5'>
                        <button onClick={() => signInWithGoogle()} class="btn btn-outline  w-full max-w-xs text-xs btn-accent"><BsGoogle className='icon'></BsGoogle>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;