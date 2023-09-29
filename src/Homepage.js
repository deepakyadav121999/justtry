import React, { useEffect} from 'react'
import './Homepage.css'
import { useDispatch,useSelector } from 'react-redux'
import { setProduct } from './redux/actions/productActions'
import { ActionTypes } from './redux/constants/action-types'
import { Link } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import {setDiscription} from './redux/actions/discriptionAction'
import BannerComponent from './components/Banner/BannerComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoaderComponent from './styles/LoaderComponent';
import { useState } from 'react'
function Homepage() {
     const dispatch1 = useDispatch(ActionTypes.SET_DISCRIPTION)
   const product = useSelector((state)=>state.products.listproducts)
   const dispatch = useDispatch(ActionTypes.SET_PRODUCTS)
   const [wislistbg,setwishlistbg] = useState(false)
  const callapi =async()=>{
    let url = await fetch("https://fakestoreapi.com/products")
    let res = await url.json();
   
    
    dispatch(setProduct(res))
    
   
  }
  console.log(product)
  useEffect(()=>{
  callapi()
 // eslint-disable-next-line
  },[])
 const emtyStr =()=>{
  dispatch1(setDiscription(''))
 }
 const setwishlistTrue =()=>{
  setwishlistbg(true)

 }
 const setwishlistfalse =()=>{
 setwishlistbg(false)
 }
  return (
  <>
  <div className="banners">
  <BannerComponent/>
  </div>
  
  <div className="main-container">
      {/* <div className="sidebar">
        <div className="sidebar-option">
        <p>sort by price</p>
        <input type="radio" value="sortbyprice" name='price'/>
        </div>
        
        <div className="sidebar-option">
        <p>High to Low</p>
        <input type="radio" value="higtolow" name='price'/>
        </div>

        <div className="sidebar-option">
        <p>Low to High</p>
        <input type="radio" value="low to high" name='price'/>
        </div>
        
       
      </div> */}
    <div className='homepage-container'>
      
    { product && product.map((item,index)=>{
     return (
     <div className='homepage-list'>
    
       <div className="img-con">
       <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  key={index} onClick={emtyStr} > <img src={item.image}  alt="" className='main-img'/></Link>
 
       </div>
     
       <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  key={index} onClick={emtyStr}><p className='item-name'>{item.title}</p></Link>
       <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  key={index} onClick={emtyStr}><div className="price-container">
     <p className='item-price'>₹ {parseInt(item.price)}</p>
     <p className='item-onwords'>onwords</p>
     </div>
     </Link>
     <p className='free-delevery'>Free Delivery</p>
     <div className="item-rating">
        <div className="rating-icon">
        <p className='item-rating-rate'>{item.rating&& item.rating.rate}</p>
      <StarOutlinedIcon className='rating-logo'/>
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