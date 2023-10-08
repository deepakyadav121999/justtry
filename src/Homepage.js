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
  


  const callapi =async()=>{
    let url = await fetch("https://fakestoreapi.com/products")
    let res = await url.json();
   
  
    let x = JSON.parse(localStorage.getItem("product2"))
    

    if(x){
       setdata(x)
      dispatch(setProduct(x))
    }
       
      else{
        res.map((item) => item.selected=false)
        localStorage.setItem("product2",JSON.stringify(res))
        dispatch(setProduct(res))
        setdata(res)
       
      }
      
      
    
  
    

  
    
   
  }
  const emtyStr =()=>{
    dispatch1(setDiscription(''))
   }
  useEffect(()=>{
  callapi()
 // eslint-disable-next-line
  },[])


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
      
    { data && data.map((item,index)=>{
     return (
     <div className='homepage-list' key={index}>
    
       <div className="img-con">
        <div className="fav-icon" onClick={()=>{
         
          let olddata = JSON.parse(localStorage.getItem("product2"))
        
          let copyOfProductsData = [...olddata];
          copyOfProductsData.map((element,indx) => {
         
            if (index === indx) {
              return (element.selected = !element.selected);
            }
          });
      

  localStorage.setItem(
    "product2",
    JSON.stringify(copyOfProductsData)
  );
  setdata(copyOfProductsData)
 

         
         
        }}>
         {item.selected ?<FavoriteIcon style={{ color: "red" }}/>:<FavoriteBorderIcon/>}
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