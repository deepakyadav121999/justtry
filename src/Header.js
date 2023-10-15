import React, { useEffect, useState } from 'react'
import './styles/Header.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import {setSearch} from './redux/actions/searchAction'
import { ActionTypes } from './redux/constants/action-types';
import LogoutIcon from '@mui/icons-material/Logout';
import {  signOut } from "firebase/auth";
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import logo from './logo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { setLength } from './redux/actions/LengthAction';



function Header() {
 
 
 let lth = useSelector(state=>state.length.length)
 const[dname,setdname] = useState()
const [hid,sethide] = useState("non-hide")
const [profilelogout,setProfilelogout] =useState("hidden-logout")
const user =useSelector((state)=>state.user.user);
const dispatch1 = useDispatch(ActionTypes.SET_LENGTH)

const logoutMenu=()=>{
  if(profilelogout==="hidden-logout"){
    setProfilelogout('profile-logout')
}
  else{
  setProfilelogout('hidden-logout')
  }
}
const classChange=()=>{
sethide('hide')
}

const dispatch = useDispatch(ActionTypes.SET_SEARCH)

const headerInputChange=(e)=>{
       dispatch(setSearch(e.target.value.toLowerCase()))

}



const navigate = useNavigate();
 
const handleLogout = () => {               
    signOut(auth).then(() => {
    
        navigate("/");
        toast.success("Signed out successfully",{position:"top-center"})
    }).catch((error) => {
   
    });
    setProfilelogout("hidden-logout")
    sethide("non-hide")

}
useEffect(()=>{
  let oldlength =JSON.parse(localStorage.getItem('length'))
  dispatch1(setLength(oldlength))


  const api = () => {
    if (auth.currentUser) {
      setdname(auth.currentUser.displayName);
    }
  }
  api()

 
  let handle =()=>{
    setProfilelogout("hidden-logout")
    sethide("non-hide") 
  }
  document.addEventListener("mouseup",handle)
  document.addEventListener("mouseup",handle)

  // eslint-disable-next-line
},[])
 




  return (
    <>
  <div className="header-main-container">
    <div className='header-container'>
  <div className="icon">
<ListIcon onClick ={classChange}/>
  </div>
 
        <div className={hid}>
      
          <div className="profile">
          <p className='cros-btn' onClick={()=>sethide('non-hide')}>X</p>
          <img src={logo} alt="" className='sidebar-logo'/>
          </div>
           
          <Link to={'/womanEthinic'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
            <div className="sidebar-inside-div">
            <img src="https://images.meesho.com/images/android/women_ethnic_images_64.webp" alt="" />
            <p className='bottom-container-p'>Women Ethnic</p>
            </div>
            </Link>
         

      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
      <div className="sidebar-inside-div">
        <img src="https://images.meesho.com/images/android/women_western_wear_images_64.webp" alt="" />
        <p className='bottom-container-p'>Women Western</p>
        </div>
        </Link>
 

      <Link to={'/men'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}> 
      <div className="sidebar-inside-div">
      <img src="https://images.meesho.com/images/android/men_fashion_images_64.webp" alt="" />
      <p className='bottom-container-p'>Men</p>
      </div></Link>


      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
      <div className="sidebar-inside-div">
        <img src="https://images.meesho.com/images/android/kids_images_64.webp" alt="" />
        <p className='bottom-container-p'>Kids</p>
        </div></Link>


      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
      <div className="sidebar-inside-div">
        <img src="https://images.meesho.com/images/android/home_kitchen_images_64.webp" alt="" />
        <p className='bottom-container-p'>Home & Kitchen</p>
        </div>
        </Link>


      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
      <div className="sidebar-inside-div">
        <img src="https://images.meesho.com/images/android/beauty_health_images_64.webp" alt="" />
        <p className='bottom-container-p'>Beauty & Health</p>
        </div></Link>



      <Link to={'/jwellery'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
      <div className="sidebar-inside-div">
        <img src="https://images.meesho.com/images/android/jewellery_accessories_images_64.webp" alt="" />
        <p className='bottom-container-p'>Jwellery & Accessories</p>
        </div></Link>

      <Link to={'/bags'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
      <div className="sidebar-inside-div">
        <img src="https://images.meesho.com/images/android/bags_footwear_Images_64.webp" alt="" />
        <p className='bottom-container-p'>Bags & Footwear</p>
        </div></Link>


      <Link to={'/electronics'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
      <div className="sidebar-inside-div">
        <img src="https://images.meesho.com/images/android/electronics_us_images_64.webp" alt="" />
        <p className='bottom-container-p'>Electronics</p>
        </div></Link>
      {user ?<div className="logout-sidebar" onClick={handleLogout}>
        <p>Logout</p>
        <LogoutIcon/>
      </div>:
      <div className="logout-sidebar">
        <p>Login</p>
        <LockOpenRoundedIcon/>
      </div>}
        </div>

       <div className="left-header">
        <div>
        <Link to={'/'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='meesho-main-logo'><img src={logo} alt="" /></p></Link></div>
        
        <div className="ip-section">
          <SearchIcon />
          <Link to={'/search'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}> <input type="text" className ='header-input' placeholder='Try Saree,Kurti or Search by Product Code' onChange={headerInputChange}/></Link>
      
        </div>

       
       </div>



       <div className="right-header">
       <div className="favorate-section">
       <Link to={'/wishlist'}>   <FavoriteIcon  fontSize="large"  className='wislist-icon'/></Link>
        </div>
        <div className="profile-info-section" onClick={logoutMenu}>
          <PermIdentityIcon/>
        <p >Profile</p>
        </div>
        <div className={profilelogout}>
         {dname && <p>Welcome:{dname}</p>}
          <Link to={'/wishlist'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><div className='logo-logout'>
              <p>Wishlist</p>
              <FavoriteIcon/>
             </div></Link>
         {user?
          <div className="logo-logout1" onClick={handleLogout}>

            
            <div className='logo-logout'> 
              <p>Logout</p>
          <LogoutIcon/>
          </div>
         
          </div>:<div className="logo-logout">
           <p>Login</p>
           <LockOpenRoundedIcon/>
          </div>
         }
        
        </div>
        <Link to={'/cartpage'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
          <div className="cart-info-section">
                 <div className="cart-length">
                 <ShoppingCartOutlinedIcon/>
                 <p>{lth}</p>
                 </div>
           
          <p>Cart</p>
          </div>
          </Link>
       </div>
      </div>
      <div className='header-bottom-container'>
      <Link to={'/womanEthinic'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Women Ethnic</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Women Western</p></Link>
      <Link to={'/men'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}> <p className='bottom-container-p'>Men</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Kids</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Home & Kitchen</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Beauty & Health</p></Link>
      <Link to={'/jwellery'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Jwellery & Accessories</p></Link>
      <Link to={'/bags'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Bags & Footwear</p></Link>
      <Link to={'/electronics'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Electronics</p></Link>
        
      </div>



       <div className="bottom-container1">
         <Link to={'/men'} style={{textDecoration:"none"}}><div className="men-clothing common-btm">
             
             <img src="https://images.meesho.com/images/marketing/1689675132726_100.webp" alt="" />
             <p>Men Clothing</p>
         </div>
         </Link>

         <Link to={'/electronics'} style={{textDecoration:"none"}}><div className="accessories common-btm">
             <img src="https://images.meesho.com/images/marketing/1649689036546_100.webp" alt="" />
             <p>Accessories</p>
         </div>
         </Link>

         <Link to={'/electronics'} style={{textDecoration:"none"}}>
         <div className="electronics common-btm">
           
            <img src="https://images.meesho.com/images/marketing/1649689480606_100.webp" alt="" />
            <p>Electronics</p>
         </div>
         </Link>

         <Link to={'/womanEthinic'} style={{textDecoration:"none"}}>
         <div className="western-wear common-btm">
          
          <img src="https://images.meesho.com/images/marketing/1649690440106_100.webp" alt="" />
          <p>Western wear</p>
         </div>
         </Link>

         <Link to={'/itemunawailable'} style={{textDecoration:"none"}}>
         <div className="kids-toys common-btm">
          
            <img src="https://images.meesho.com/images/marketing/1649689217815_100.webp" alt="" />
            <p>Kids & Toys</p>
         </div>
         </Link>

         <Link to={'/jwellery'} style={{textDecoration:"none"}}>
         <div className="jewellery common-btm">
         
         <img src="https://images.meesho.com/images/marketing/1649689138272_100.webp" alt="" />
         <p>Jewellery</p>
         </div>
         </Link>

         <Link to={'/itemunawailable'} style={{textDecoration:"none"}}>
         <div className="kurti common-btm">
          <img src="https://images.meesho.com/images/marketing/1649688502928_100.webp" alt="" />
          <p>Kurtis</p>
         </div>
         </Link>


         <Link to={'/itemunawailable'} style={{textDecoration:"none"}}>
         <div className="saari common-btm">
          <img src="https://images.meesho.com/images/marketing/1628672353857_100.webp" alt="" />
          <p>Saree</p>
         </div>
         </Link>


         <Link to={'/itemunawailable'} style={{textDecoration:"none"}}>
         <div className="saari common-btm">
          <img src="https://images.meesho.com/images/marketing/1670479134713_100.webp" alt="" />
          <p>Home</p>
         </div>
         </Link>


         <Link to={'/itemunawailable'} style={{textDecoration:"none"}}>
         <div className="saari common-btm">
          <img src="https://images.meesho.com/images/marketing/1651505214223_100.webp" alt="" />
          <p>Beauty</p>
         </div>
         </Link>


         <Link to={'/itemunawailable'} style={{textDecoration:"none"}}>
         <div className="saari common-btm">
          <img src="https://images.meesho.com/images/marketing/1631536034339_100.webp" alt="" />
          <p>Footwere</p>
         </div>
         </Link>

         <Link to={'/itemunawailable'} style={{textDecoration:"none"}}>
         <div className="saari common-btm">
          <img src="https://images.meesho.com/images/marketing/1628672353857_100.webp" alt="" />
          <p>Saree</p>
         </div>
         </Link>

         <Link to={'/itemunawailable'} style={{textDecoration:"none"}}>
         <div className="saari common-btm">
          <img src="https://images.meesho.com/images/marketing/1628672353857_100.webp" alt="" />
          <p>Saree</p>
         </div>
         </Link>
         
       </div>
      </div>
      <ToastContainer/>
      </>
  )
}

export default Header
