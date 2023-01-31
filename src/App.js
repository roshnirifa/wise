import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Home/Login/Login';

import Register from './Pages/Home/Register/Register';
import UserProfile from './Pages/UserProfile/UserProfile';
import { ToastContainer } from 'react-toastify';
import CartCalculation from './Pages/Home/CartCalculation/CartCalculation';
import Cart from './Pages/Home/BooksOnSale/Cart';

import FeatureDetails from './Pages/FeatureDetails/FeatureDetails';
import RequireAuth from './Pages/Home/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Home/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/userProfile' element={<UserProfile></UserProfile>}></Route>





        <Route path='/cartcalculation' element={
          <RequireAuth>
            <CartCalculation></CartCalculation>
          </RequireAuth>
        }>

        </Route>

        <Route path='/featureDetails/:id' element={
          <RequireAuth>
            <FeatureDetails></FeatureDetails>
          </RequireAuth>
        }>

        </Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
