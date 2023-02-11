import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseInit';
import UseBooksOnSale from '../../UseBooksOnSale/UseBooksOnSale';
import { removeFromDb } from '../../../utilitis/fakedb';

const Header = () => {

    const { initialCart } = UseBooksOnSale();
    const [user] = useAuthState(auth);

    const [cart, setCart] = useState(initialCart)
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        console.log(remaining);
        setCart(remaining);
        removeFromDb(id)
    }



    // console.log(user);
    const handleSignOut = () => {
        signOut(auth)

    }
    return (
        <div>
            <div class="navbar bg-base-100 container">
                <div class="navbar-start">
                    <a href="/home">  <img src={logo} alt="" className='ml-8' /></a>


                </div>
                <div class="navbar-center">
                    <div class="form-control  ">
                        <input type="text" placeholder="Search" class="input input-bordered px-20" />
                    </div>
                </div>
                <div class="navbar-end">

                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle mr-5">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span class="badge badge-sm indicator-item">{initialCart.length}</span>
                            </div>
                        </label>

                        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow ">
                            <div class="card-body">
                                <span class="font-bold text-lg">
                                    {initialCart.length}</span>
                                {/* <span class="text-info">Subtotal: $999</span> */}
                                <div class="card-actions">
                                    <button class="btn btn-primary w-11/12"><Link to="/cartcalculation">Cart</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown dropdown-end">

                        {/* {
                           
                            user ? <Link onClick={handleSignOut} as={Link} to="/products" >Signout</Link>
                                :
                                <Link to='/login'>Login</Link>
                        }
                        <p> {user && user.displayName}</p> */}
                        {
                            user ? <div>
                                <label tabindex="0" class="btn btn-ghost btn-circle avatar">


                                    <div class="w-10 rounded-full">
                                        <img src={user.photoURL} alt="" />


                                    </div>


                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li> <Link to='/userProfile'> {user && user.displayName}<span class="badge">New</span></Link> </li>
                                    <li><a>My Order</a></li>
                                    <li><a>wishlist</a></li>
                                    <li onClick={handleSignOut}><a>Logout</a></li>
                                </ul>
                            </div>


                                :
                                <button className='btn  w-full max-w-xs'>  <Link to='/login'>Login</Link></button>
                        }



                    </div>

                </div>

            </div >
            <hr />
        </div>
    );
};

export default Header;