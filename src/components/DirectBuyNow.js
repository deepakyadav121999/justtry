import React, { useEffect, useState } from 'react';
import '../styles/PaymentPage.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import PaymentConfirmationModal from './PaymentConfirmationModal';
import { useNavigate } from 'react-router-dom';

 


function DirectBuyNow(){
  const [debit, setDebit] = useState("debit-none");
  const [debitNo, setDebitNo] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cod, setCod] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const[total,settotal] = useState()



 

 


  const handleConfirmCashOnDelivery = () => {
    if (cod) {
    localStorage.setItem("diectbuy",JSON.stringify(0))

  
    }
    setConfirmationModalOpen(false);
    history('/'); // Redirect to the main page
    alert("Order has been successfully placed");
  };

  const paymentMode = (e) => {
    if (e.target.value === "upi") {
      setDebit("debit-none");
      setCod(false);
    } else if (e.target.value === "atm") {
      setDebit("debit-css");
      setCod(false);
    } else if (e.target.value === "cod") {
      setCod(true);
      setDebit("debit-none");
    }
  };

  const isDebitValid = debitNo.length === 16;
  const isCvvValid = cvv.length === 3;
  const isExpiryDateValid = /^\d{2}\/\d{2}$/.test(expiryDate);

  const handleDebitChange = (e) => {
    const input = e.target.value;
    // Allow only numbers (0-9)
    const sanitizedInput = input.replace(/[^0-9]/g, '');
    if (sanitizedInput.length <= 16) {
      setDebitNo(sanitizedInput);
    }
  };

  const handleCvvChange = (e) => {
    const input = e.target.value;
    // Allow only numbers (0-9)
    const sanitizedInput = input.replace(/[^0-9]/g, '');
    if (sanitizedInput.length <= 3) {
      setCvv(sanitizedInput);
    }
  };

  const handleExpiryDateChange = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/[^0-9/]/g, '');
    if (/^\d{0,2}(\/\d{0,2})?$/.test(sanitizedInput)) {
      setExpiryDate(sanitizedInput);
    }
  };

  const history = useNavigate();

  const handleConfirmPayment = () => {
  
    localStorage.setItem("diectbuy",JSON.stringify(0))
 
    setConfirmationModalOpen(false);
    history('/');
    alert("Order has been successfully placed");
  };

  useEffect(()=>{
    const ttl = JSON.parse(localStorage.getItem('directbuy'));
    settotal(ttl)
   

  },[])
  return (
    <div className='main-payment-container'>
      <div className="left-payment-container">
        <p className='select-payment'>Select Payment Method</p>
        <p className='pay-in-cash'>PAY IN CASH</p>
        <div className="icon-down">
          <p className='cash-on delivery'>Payment Mode</p>
          <ExpandMoreIcon />
        </div>
        <div className="main-payment-radio" onChange={paymentMode}>
          <div className="payment-radio">
            <p>Pay cash on delivery</p>
            <input type="radio" name='paymentMethod' value="cod" />
          </div>
          <div className="payment-radio">
            <p>Pay Using Debit Card</p>
            <input type="radio" name='paymentMethod' value="atm" />
          </div>
          <div className={debit}>
            <input
              type="text"
              placeholder='Debit Card Number'
              value={debitNo}
              onChange={handleDebitChange}
              maxLength={16}
            />
            <p>{!isDebitValid && <p style={{ color: "red" }}>Enter a valid debit card number (16 digits)</p>}</p>
            <input
              type="password"
              placeholder='Enter CVV'
              value={cvv}
              onChange={handleCvvChange}
              maxLength={3}
            />
            <p>{!isCvvValid && <p style={{ color: "red" }}>Enter a valid CVV (3 digits)</p>}</p>
            <input
              type="text"
              placeholder='Expiry Date (MM/YY)'
              value={expiryDate}
              onChange={handleExpiryDateChange}
              maxLength={5}
            />
            <p>{!isExpiryDateValid && <p style={{ color: "red" }}>Enter a valid expiry date (MM/YY)</p>}</p>
            <button onClick={() => {
              if (isDebitValid && isCvvValid && isExpiryDateValid) {
                toast.success("Debit Card Verified Successfully", { position: "top-center" });
                setConfirmationModalOpen(true);
              } else {
                toast.error("Please enter a valid debit card number (16 digits), CVV (3 digits), and expiry date (MM/YY)", { position: "top-center" });
              }
            }}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="confirm-order-button">
        {cod && (
         <div className="container-right1">
         <p className='container-right-heading'>Price Details</p>
         <div className="total-product-price">
           <p>Total Product Price</p>
           <p>{parseInt((total - (total / 100) * 10), 10)}</p>
         </div>
         <div className="order-total">
           <p>Order Total</p>
           <p>{parseInt((total - (total / 100) * 10), 10)}</p>
         </div>
         <p className='cart-right-smalltext'>Clicking on Continue will not deduct any money</p>
         
           <Link to={'/'}>
             <button onClick={handleConfirmCashOnDelivery} className='continue-btn'>Confirm Order</button>
           </Link>
          
       </div>
        )}
      </div>
      <PaymentConfirmationModal
        isOpen={isConfirmationModalOpen}
        total={parseInt((total - (total / 100) * 10), 10)}
        onConfirm={handleConfirmPayment}
        onClose={() => setConfirmationModalOpen(false)}
      />
    </div>

)
}

export default DirectBuyNow;