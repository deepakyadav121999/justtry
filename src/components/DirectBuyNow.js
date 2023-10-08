import React, { useState } from 'react'
import '../styles/PaymentPage.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setLength } from '../redux/actions/LengthAction';
import { setTotal } from '../redux/actions/totalAction';
import { ActionTypes } from '../redux/constants/action-types';
import { SetCart } from '../redux/actions/cartAction';
import { toast } from 'react-toastify';

 


function DirectBuyNow(){
  const[debit,setdebit] = useState("debit-none")

 const[debitNo,setdebitNo] = useState("")
 const [cvv,setcvv] = useState("")

  const ttl = JSON.parse(localStorage.getItem('total'))
  const lth = JSON.parse(localStorage.getItem('length'))
  const crt = JSON.parse(localStorage.getItem('products'))

  const total = useSelector(state=>state.total.total)
  const dispatch1 = useDispatch(ActionTypes.SET_TOTAL)
  const dispatch2 = useDispatch(ActionTypes.SET_LENGTH)
  const dispatch3 = useDispatch(ActionTypes.SET_PRODUCTS)


  const[cod,setcod] = useState(false)
  const paymentBtn =()=>{
    
    alert("Order has Been Palced redirecting you to main page"
    )
          localStorage.setItem('total',JSON.stringify(0))
          localStorage.setItem('length',JSON.stringify(0))
          localStorage.setItem('products',JSON.stringify(0))
          dispatch1(setTotal(ttl))
          dispatch2(setLength(lth))
          dispatch3(SetCart(crt))
      
       
        
  }

  const paymentMode =(e)=>{
 if(e.target.value==="upi"){
  // setupi("upi-css")
  setdebit("debit-none")
  setcod(false)
 }
else if(e.target.value==="atm"){
  setdebit("debit-css")
  // setupi("upi-none")
  setcod(false)
}
else if(e.target.value==="cod"){
  setcod(true)
    setdebit("debit-none")
    // setupi("upi-none")
}

  }
  // const verifyBtn =()=>{
  //   if(upival.length<20 && upival.length>9){
  //     toast.success("upi verified successfully" ,{position:"top-center"})
  //   }
  //   else{
  //     toast.error("please enter valid upi ,upi id should be in 10 to 20 digit/char", {position:"top-center"})
  //   }
  // }
  return (
    <div className='main-payment-container'>
       <div className="left-payment-container">
          <p className='select-payment'>Select Payment Method</p>
          <p className='pay-in-cash'>PAY IN CASE</p>
          <div className="icon-down">
          <p className='cash-on delivery'>Payment Mode</p>
          <ExpandMoreIcon/>
          </div>
          <div className="main-payment-radio" onChange={paymentMode}>

    
       <div className="payment-radio">
       <p>Pay cash on delivery</p>
         <input type="radio" name='paymentMethod' value="cod"/>
       </div>
       {/* <div className="payment-radio">
       <p>Pay Using Upi</p>
         <input type="radio" name='paymentMethod' value="upi" />
       </div> */}
       {/* <div className={upi}>
          <input type="text" placeholder='enter your Upi Id' onChange={(e)=>setupival(e.target.value)}/>
          <p >{  upival.length>10 && upival.length<20 && <p style={{color:"red"}}>enter valid upi id</p>}</p>
          <button onClick={verifyBtn}>Verify</button>
         </div> */}

       <div className="payment-radio">
       <p>Pay Using Debit Card</p>
         <input type="radio" name='paymentMethod' value="atm"/>
       </div>
       <div className={debit}>
         <input type="number" placeholder='Debit Card Number'onChange={(e)=>setdebitNo(e.target.value)}/>
         <p >{  (debitNo.length!==16)  && <p style={{color:"red"}}>enter valid debit card number</p>}</p>
         <input type="number" placeholder='enter cvv' onChange={(e)=>setcvv(e.target.value)}/>
         <p >{  (cvv.length!==3)  && <p style={{color:"red"}}>enter valid cvv</p>}</p>
         <button onClick={()=>{
           if(debitNo.length===16 && cvv.length===3){
            toast.success("Debit Card Verified Successfully" ,{position:"top-center"})
           }
           else{
            toast.error("please enter valid debit card number should be in 16 digit and cvv should be in 3 digit",{position:"top-center"})
           }
         }
        
        }>Submit</button>
       </div>
       </div>
       
          
       </div>


       <div className="container-right1">
        <p className='container-right-heading'>Price Details</p>
        <div className="total-product-price">
        <p>Total Product Price</p>
        <p>{parseInt((total-(total/100)*10),10)}</p>
        </div>
  
       <div className="order-total">
       <p>Order Total</p>
       <p>{parseInt((total-(total/100)*10),10)}</p>
     
       </div>
       <p className='cart-right-smalltext'>Clicking on Continue will not deduct any money</p>
 
   {(debitNo && cvv) ||cod ?<Link to={'/'}> <button onClick={paymentBtn}
    className='continue-btn'
      >Continue</button></Link>:<button onClick={()=>{
        toast.error("please fill the details" ,{position:"top-center"})
      }}
      className='continue-btn'
        >Continue</button>}
   </div>
</div>

)
}

export default DirectBuyNow;