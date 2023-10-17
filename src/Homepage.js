import React, { useEffect} from 'react'
import './Homepage.css'
import { useDispatch} from 'react-redux'
import { setProduct } from './redux/actions/productActions'
import { ActionTypes } from './redux/constants/action-types'
import { Link } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import {setDiscription} from './redux/actions/discriptionAction'
import BannerComponent from './components/Banner/BannerComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react'
function Homepage() {
    const[data ,setdata] = useState([]);
     const dispatch1 = useDispatch(ActionTypes.SET_DISCRIPTION)
   
   const dispatch = useDispatch(ActionTypes.SET_PRODUCTS)
   const [wishlist, setWishlist] = useState([]);
  


  const callapi =async()=>{
    let url = await fetch("https://fakestoreapi.com/products")
    let res = await url.json();
 setdata(res)
 dispatch(setProduct(res))
 localStorage.setItem('product2', JSON.stringify(res));
      
  }

  const toggleFavorite = (productId) => {
    const copyOfWishlist = [...wishlist];

    if (!copyOfWishlist.includes(productId)) {
      copyOfWishlist.push(productId); 
    } else {
      const indexToRemove = copyOfWishlist.indexOf(productId);
      copyOfWishlist.splice(indexToRemove, 1); 
    }
  
    
    setWishlist(copyOfWishlist);
   
    localStorage.setItem('wishlist', JSON.stringify(copyOfWishlist));
  };

  
  
  const emtyStr =()=>{
    dispatch1(setDiscription(''))
   }



  useEffect(()=>{
  callapi()
  const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
 // eslint-disable-next-line

  },[]) 


  return (
  <>
  <div className="banners">
  <BannerComponent/>
  </div>
  
  <div className="main-container">
    
    <div className='homepage-container'>
      
    { data && data.map((item,index)=>{
     return (
     <div className='homepage-list' key={index}>
    
       <div className="img-con">
        <div className="fav-icon" onClick={()=>toggleFavorite(item.id)}>
        {wishlist.includes(item.id) ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
        </div>
       <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  onClick={emtyStr} > <img src={item.image}  alt="" className='main-img'/></Link>
 
       </div>
     
       <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  onClick={emtyStr}><p className='item-name'>{item.title}</p></Link>
       <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  onClick={emtyStr}><div className="price-container">
     <p className='item-price'>₹ {parseInt(item.price)}</p>
     <p className='item-onwords'>onwords</p>
     </div>
     </Link>
     <p className='free-delevery'>Free Delivery</p>
     <div className="item-rating">
        <div className="rating-icon">
        <p className='item-rating-rate'>{item.rating&& item.rating.rate}</p>
      <StarOutlinedIcon className='rating-logo'fontSize='small'/>
        </div>
    
      <p>{item.rating&& item.rating.count} pices left</p>
     </div>
      </div>)
    
    }) }
    
    </div> 
    </div>
    </>
  )
}
 
export default Homepage