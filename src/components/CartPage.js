import React, {useEffect, useState} from 'react'
import '../styles/CartPage.css'
import{ActionTypes}from '../redux/constants/action-types'
import {SetCart} from '../redux/actions/cartAction'
import { useDispatch,useSelector } from 'react-redux'
import {setLength} from '../redux/actions/LengthAction'
import {setTotal} from '../redux/actions/totalAction'
import { Link } from 'react-router-dom'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

function CartPage() {
 const[reloading ,setreloading] =useState(false)
  const cart = useSelector((state)=>state.cart.cartdata)
  const dispatch = useDispatch(ActionTypes.SET_CART)
  let length =JSON.parse(localStorage.getItem('length'))
  const dispatch1 = useDispatch(ActionTypes.SET_LENGTH)
  let total =JSON.parse(localStorage.getItem('total'))

  const dispatch2 = useDispatch(ActionTypes.SET_TOTAL)
  const ttl = useSelector(state=>state.total.total)
  const [editclass,seteditclass] = useState("kuch-nahi");
  const[qtyBtn,setqtyBtn] =useState("display-none")
 const[itemquantity,setItemQuantity] = useState(1)


  useEffect(()=>{
    let b=  JSON.parse(localStorage.getItem('products'))
    b &&  dispatch(SetCart(b))
    dispatch1(setLength(length))
    dispatch2(setTotal(total))

    if(length===0){
      dispatch2(setTotal(0))

    }
     //eslint-disable-next-line
  },[reloading])

 


  const editBtn =()=>{
    if(editclass==="kuch-nahi")
    seteditclass("quantity-border")
    
  else
  seteditclass("kuch-nahi")
  

 if(qtyBtn ==="display-none")
    setqtyBtn("abc")
  
  else
setqtyBtn("display-none")
  
  }
  return (
<>
{ttl>0? <div className='cartpage-container'>
   <div className="container-left">
   { cart && cart.map((item,index)=>{return(
            <div className="left-container-item" key={index}>
              <div className="left-image-text-adjust">
                   <img src={item.image} alt="" />
              </div>
              <div className="left-image-text-adjust1">
                <div className='name-edit-btn'>
                <p>{item.title}</p>
                <p className='left-container-edit-btn' onClick={editBtn}>Edit</p>
                </div>
                 
                 <p> ₹{item.price}</p>
                 <p>All issue easy returns allowed</p>
                <div className="left-container-qty">
                  <p className={editclass}>Qty:{itemquantity}</p>
                  <div className={`edit-qty ${qtyBtn}`}>
                  <p onClick={()=>{
                      if(ttl>item.price){
                        dispatch2(setTotal(ttl-parseInt(item.price,10)))
                        setItemQuantity(itemquantity-1)
                           }
                
                    else{
                      setItemQuantity(1)
                 let x= cart
                 x.splice(index,1)
                 localStorage.setItem('products',JSON.stringify(x))
                 setreloading(!reloading)
                 let oldlength = JSON.parse(localStorage.getItem('length'))||0
                 localStorage.setItem('length',JSON.stringify(oldlength-1))
                 let oldtotal = JSON.parse(localStorage.getItem('total'))||0
                 localStorage.setItem('total',JSON.stringify(oldtotal-item.price))
                  }
               
                  }} className={qtyBtn}>-</p>
                    <p onClick={()=>{
                  dispatch2(setTotal(ttl+parseInt(item.price,10)))
                  setItemQuantity(itemquantity+1)
                    }}  className={qtyBtn}>+</p>
                    
                  </div>
                  <p></p>
                </div>
                <button onClick={()=>{
                    let x= cart
                    x.splice(index,1)
                    localStorage.setItem('products',JSON.stringify(x))
                    setreloading(!reloading)
                    let oldlength = JSON.parse(localStorage.getItem('length'))||0
                    localStorage.setItem('length',JSON.stringify(oldlength-1))
                    let oldtotal = JSON.parse(localStorage.getItem('total'))||0
                    localStorage.setItem('total',JSON.stringify(oldtotal-item.price))
                }}>X Remove</button>
                </div>
                
            </div>
             )})
   
            }
   </div>
  
   <div className="container-right">
        <p className='container-right-heading'>Price Details</p>
        <div className="total-product-price">
        <p>Total Product Price</p>
        <p>{parseInt(ttl,10)}</p>
        </div>
        <div className="total-discount">
        <p>Total Discounts</p>
        <p >10%</p>
        </div>
       <div className="order-total">
       <p>Order Total</p>
       <p>{parseInt((ttl-(ttl/100)*10),10)}</p>
       </div>
       <div className="discount">
       <p className='discount-ptag'>Yey! Your total discount is </p>
     <p>{parseInt((ttl/100)*10,10)}</p>
       </div>
      

       <p className='cart-right-smalltext'>Clicking on Continue will not deduct any money</p>
       <Link to={'/address'}><button className='continue-btn'>Continue</button></Link>
   </div>
  
</div>:<div className='emptybox-container'>
  <p>please add some products into cart</p>
  <ProductionQuantityLimitsIcon fontSize='large'/>
  </div>}
  
</>
  )
}

export default CartPage;