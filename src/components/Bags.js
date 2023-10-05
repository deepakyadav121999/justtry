import React, { useEffect} from 'react'
import '../Homepage.css'
import { useDispatch,useSelector } from 'react-redux'
import { setProduct } from '../redux/actions/productActions'
import { ActionTypes } from '../redux/constants/action-types'
import { Link } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import {setDiscription} from '../redux/actions/discriptionAction'
 
function Bags() {
    const dispatch1 = useDispatch(ActionTypes.SET_DISCRIPTION)
    const product = useSelector((state)=>state.products.listproducts)
    const dispatch = useDispatch(ActionTypes.SET_PRODUCTS)
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
  let bags =  product.filter((item)=>{
    return item.title.includes("Fjallraven")
   })
  return (
    <div className='homepage-container'>
      
    { bags && bags.map((item,index)=>{
     return <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  key={index} onClick={emtyStr}>
     <div className='homepage-list'>
       <img src={item.image}  alt="" className='main-img' />
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

export default Bags