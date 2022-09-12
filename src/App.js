import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Home/Login/Login';
import HeaderItems from './Pages/Home/Header/HeaderItems/HeaderItems';
import Register from './Pages/Home/Register/Register';

function App() {
  return (
    <div >
      <Header></Header>
      <HeaderItems></HeaderItems>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
