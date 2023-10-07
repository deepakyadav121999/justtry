import React, { useEffect, useState } from 'react'
import './wishlist.css'
import { Link } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { setDiscription } from '../../redux/actions/discriptionAction';
import { useDispatch} from 'react-redux'
import { ActionTypes } from '../../redux/constants/action-types';
const Wishlist = () => {
 const[wishlistData ,setwishlistData] = useState([])


  const dispatch1 = useDispatch(ActionTypes.SET_DISCRIPTION)
  const emtyStr =()=>{
    dispatch1(setDiscription(''))
   }


  useEffect(()=>{
    let b=  JSON.parse(localStorage.getItem('product2'))
    // b && setwishlistData(b)
    b= b.filter((item)=>
      item.selected===true
    )
    console.log(b)
    b&& setwishlistData(b)
  },[])

  // let wish =  wishlistData.map((item)=>{
  //     if(item.selected===true){
  //       return item;
  //     }
    
  //  })

  return (
    <div className='homepage-container'>
      
    { wishlistData && wishlistData.map((item,index)=>{
     return <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  key={index} onClick={emtyStr}>
     <div className='homepage-list'>
       <img src={item.image}  alt="" className='main-img'/>
     <p className='item-name'>{item.title}</p>
     <div className="price-container">
     <p className='item-price'>₹ {parseInt(item.price)}</p>
     <p className='item-onwords'>onwords</p>
     </div>
     <p className='free-delevery'>Free Delivery</p>
     <div className="item-rating">
        <div className="rating-icon">
        <p className='item-rating-rate'>{item.rating&& item.rating.rate}</p>
      <StarOutlinedIcon className='rating-logo'/>
        </div>
    
      <p>{item.rating&& item.rating.count} pices left</p>
     </div>
      </div>
      </Link>
    }) }
    
    </div>
  )
} 

export default Wishlist