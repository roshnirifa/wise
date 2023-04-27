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





// import Test from './Pages/Home/CartCalculation/Test';

import BooksDetails from './Pages/BooksOnSaleDetails/BooksDetails';
import Footer from './Pages/Footer/Footer';
import RequireAuth from './Pages/Home/Login/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import RequireAdmin from './Pages/Home/Login/RequireAdmin/RequireAdmin';
import AddBooks from './Pages/Dashboard/AddBooks/AddBooks';
import ManageBook from './Pages/Dashboard/ManageBook/ManageBook';
import RecomandDetails from './Pages/Home/RecomendedBooks/RecomandDetails/RecomandDetails';
import PaymentSuccess from './Pages/Home/CartCalculation/PaymentSuccess';
import PaymentFailed from './Pages/Home/CartCalculation/PaymentFailed';
import Contact from './Pages/Home/Contact/Contact';

// import CheckoutForm from './Pages/Home/CartCalculation/CheckoutForm/CheckoutForm';
// import Checkout from './Pages/Home/CartCalculation/CheckOut/CheckOut';


function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/userProfile' element={<UserProfile></UserProfile>}></Route>

        <Route path='/payment/success' element={<PaymentSuccess></PaymentSuccess>}></Route>
        <Route path='/payment/fail' element={<PaymentFailed></PaymentFailed>}></Route>



        <Route path='/cartcalculation' element={
          <RequireAuth>
            <CartCalculation></CartCalculation>
          </RequireAuth>
        }>

        </Route>

        <Route path='/booksOnSaleDetails/:id' element={
          <RequireAuth>
            <BooksDetails></BooksDetails>
          </RequireAuth>
        }></Route>

        <Route path='/recomandDetails/:id' element={
          <RequireAuth>
            <RecomandDetails></RecomandDetails>
          </RequireAuth>
        }>

        </Route>


        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>

          {/* <Route index element={<CartCalculation></CartCalculation>}></Route> */}
          <Route path='userProfile' element={<UserProfile></UserProfile>}></Route>

          <Route path='cartcalculation' element={<CartCalculation></CartCalculation>}></Route>
          <Route path='paymentDetails' element={<PaymentSuccess></PaymentSuccess>}></Route>

          <Route path='allUsers' element={<RequireAdmin>
            <AllUsers></AllUsers>
          </RequireAdmin>}></Route>

          <Route path='addBooks' element={<RequireAdmin>
            <AddBooks></AddBooks>
          </RequireAdmin>}></Route>

          <Route path='manageBook' element={<RequireAdmin>
            <ManageBook></ManageBook>
          </RequireAdmin>}></Route>

        </Route>


        {/* <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route> */}





        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
