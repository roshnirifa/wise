// import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useToken from '../../../Hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import auth from '../firebaseInit';
import { BsGoogle } from 'react-icons/bs';
// import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [confirmPass, setConfirmPass] = useState('');
    // const [error, setError] = useState('');
    // const navigate = useNavigate();
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const handleNameBlur = event => {
    //     setName(event.target.value);

    // }
    // const handleEmailBlur = event => {
    //     setEmail(event.target.value);
    // }
    // const handlepassBlur = event => {
    //     setPass(event.target.value);
    // }
    // const handleConfirmPassBlur = event => {
    //     setConfirmPass(event.target.value);
    // }
    // if (user) {
    //     console.log("user", user);
    // }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (pass !== confirmPass) {
    //         setError(<p className='text-red-500 mb-4 text-center'> your password didn't match </p>
    //         )
    //         return;
    //     }
    //     if (pass.length < 6) {
    //         setError(<p className='text-red-500 mb-4 text-center'> password should be 6 character long </p>
    //         )

    //         return;
    //     }
    //     await createUserWithEmailAndPassword(email, pass, confirmPass);
    //     await updateProfile({ displayName: name });
    //     alert('Updated profile');
    //     navigate('/home')

    // }
    // const navigateSignUp = () => {
    //     navigate('/login');

    // }
    // if (loading) {
    //     return <Loading></Loading>
    // }



    // copy

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateeError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    const [token] = useToken(user || gUser);



    let signInError;
    if (token) {
        return (
            navigate(from, { replace: true })

        );
    }
    if (gError || error || updateeError) {
        signInError = <p className='text-red-500'>
            {
                error?.message
                || gError?.message
            } </p>
    }
    if (gLoading || loading || updating) {
        return <Loading></Loading>;
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // navigate('/home')
    };
    return (
        // <div className='login p-5'>
        //     <div className='mx-auto login-container my-4'>
        //         <h2 className='text-3xl text-center pt-8 mt-5 font-bold text-primary'> SignUp</h2>

        //         <form onSubmit={handleSubmit} className=' m-5'>
        //             <div className='text-center'>

        //                 <input onBlur={handleNameBlur} type="name" name="name" placeholder="Enter name" required class="input input-bordered w-full max-w-xs mb-5 " />

        //                 <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" required class="input input-bordered w-full max-w-xs mb-5" />

        //                 <input onBlur={handlepassBlur} type="password" name="password" placeholder="Password" required class="input input-bordered w-full max-w-xs mb-5" />

        //                 <input onBlur={handleConfirmPassBlur} type="password" name="confirm-password" placeholder="Confirm Password" required class="input input-bordered w-full max-w-xs" />
        //             </div>





        //             <p className='text-danger'>{error}</p>
        //             <div className='text-center'>
        //                 <button className='btn  w-full max-w-xs mt-5 text-xs'>Register</button>
        //             </div>


        //             <p className='mt-4 text-danger font-bold text-center text-sm ' >Already have an account? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Login</span></p>

        //             <SocialLogin></SocialLogin>


        //         </form>

        //     </div>

        // </div>

        <div className='flex justify-center items-center my-8 ' >
            <div className="login-container ">
                <div className="card-body mx-auto ">
                    <h2 className="card-title text-primary font-bold text-3xl mx-auto">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='m-5'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label ">

                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "name is requried"
                                }

                            })}
                                type="text"
                                placeholder="name"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500"> {errors.name.message}</span>}


                            </label>
                        </div>
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
                        <input className='btn  w-full max-w-xs text-xs' type="submit" value='Signup' />
                        <p className='mt-3 text-danger font-bold text-center  text-sm  '>Already have an account? <span className='text-primary'><Link to='/login '>Please Login</Link></span></p>
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

export default Register;