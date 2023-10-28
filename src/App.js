import React, { useEffect} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Homepage';

import Header from './Header'
import Footer from './Footer'
import ProductDiscription from './components/ProductDiscription';
import CartPage from './components/CartPage';
import LoginPage from './LoginPage';
import Signup from './Signup';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase'
import { ActionTypes } from './redux/constants/action-types';
import {setuser} from './redux/actions/userAction'
import { useSelector,useDispatch } from 'react-redux';
import PaymentPage from './components/PaymentPage'
import WomenEthnic from './components/WomenEthnic';
import CatogoryNotFoun from './CatogoryNotFoun';
import Men from './components/Men';
import Jwellery from './components/Jwellery';
import Bags from './components/Bags';
import Electronics from './components/Electronics';
import Search from './components/Search';
import DirectBuyNow from './components/DirectBuyNow';
import Address from './components/Address';
import DirectAddress from './components/DirectAddress';
import Wishlist from './components/wishlist/Wishlist';
import LoaderComponent from './styles/LoaderComponent';
import MoreAboutMeesho from './MoreAboutMeesho'

 
function App() {
 const user =useSelector((state)=>state.user.user);
 const dispatch = useDispatch(ActionTypes.SET_USER)

  // useEffect(()=>{
  //   onAuthStateChanged(auth,(userAuth)=>{
     
  //       if(userAuth){
   
  //         dispatch(setuser(true))
  //         }
  //         else{
  //          dispatch(setuser(false))
  //         }
      
    
  //   })
  //   // eslint-disable-next-line
  //    },[user])
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       {user?<Routes>
       
       <Route path='/' element={<Homepage/>}/>

        <Route path='/product/:id' element={<ProductDiscription/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/womanEthinic' element={<WomenEthnic/>}/>
        <Route path='/itemunawailable' element={<CatogoryNotFoun/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/jwellery' element={<Jwellery/>}/>
        <Route path='/bags' element={<Bags/>}/>
        <Route path='/electronics' element={< Electronics/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/directbuy' element={<DirectBuyNow/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/directaddress' element={<DirectAddress/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/loader' element={<LoaderComponent/>}/>
       </Routes>
       :<Routes>
        <Route path='/' element={<LoginPage/>}/> 
        <Route path='/cartpage' element={<LoginPage/>}/> 
        <Route path='/men' element={<LoginPage/>}/>
        <Route path='/womanEthinic' element={<LoginPage/>}/>
        <Route path='/jwellery' element={<LoginPage/>}/>
        <Route path='/bags' element={<LoginPage/>}/>
        <Route path='/electronics' element={<LoginPage/>}/>
        <Route path='/search' element={<LoginPage/>}/>
        <Route path='/directbuy' element={<LoginPage/>}/>
        <Route path='/address' element={<LoginPage/>}/>
        <Route path='/directaddress' element={<LoginPage/>}/>
        <Route path='/wishlist' element={<LoginPage/>}/>
        <Route path='/loader' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>

        
        </Routes>}

        <Routes><Route path='/login' element={<LoginPage/>}/></Routes>
 <MoreAboutMeesho/>
       <Footer/>

      </BrowserRouter>
      </div>
   
  );
  }


export default App;
