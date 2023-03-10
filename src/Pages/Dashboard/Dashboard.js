import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../Home/firebaseInit';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">

                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/cartcalculation'>My Orders</Link>

                    </li>
                    {/* <li><Link to='/dashboard'>My Orders</Link></li> */}

                    {/* <li><Link to='/dashboard/userProfile'>My Profile</Link></li> */}

                    {admin && <li><Link to='/dashboard/userProfile'> My Profile</Link></li>}
                    {admin && <li><Link to='/dashboard/allUsers'>All Users</Link></li>}
                    {admin && <li><Link to='/dashboard/addBooks'>Add Product</Link></li>}
                    {admin && <li><Link to='/dashboard/manageBook'>Manage Books</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;