import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebaseInit';

const HeaderItems = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="navbar bg-base-100 container">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabindex="0">
                            <a class="justify-between">
                                Books
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>books 1</a></li>
                                <li><a>books 2</a></li>
                            </ul>
                        </li>

                        <li tabindex="0">
                            {/* <a class="justify-between">
                                Courses
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a> */}
                            {/* <ul class="p-2">
                                <li><a>Courses 1</a></li>
                                <li><a>Courses 2</a></li>
                            </ul> */}
                        </li>


                        {/* <li><a>Instructors</a></li> */}
                        {
                            user && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                        <li><a>Blogs</a></li>
                        <li>
                            <Link to='/contact'>Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li tabindex="0">
                        <a>
                            Books
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2">
                            <li><a>books 1</a></li>
                            <li><a>books 2</a></li>
                        </ul>
                    </li>

                    {/* <li tabindex="0">
                        <a>
                            Courses
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2">
                            <li><a>Courses 1</a></li>
                            <li><a>Courses 2</a></li>
                        </ul>
                    </li>

                    <li><a>Instructors</a></li> */}
                    {
                        user && <li><Link to='/dashboard'>Dashboard</Link></li>
                    }
                    <li><a>Blogs</a></li>

                    <li>
                        <Link to='/contact'>Contact
                        </Link>
                    </li>

                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Get in Touch</a>
            </div>
        </div>
    );
};

export default HeaderItems;