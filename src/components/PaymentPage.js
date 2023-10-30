import React, { useState } from 'react';
import '../styles/PaymentPage.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLength } from '../redux/actions/LengthAction';
import { setTotal } from '../redux/actions/totalAction';
import { ActionTypes } from '../redux/constants/action-types';
import { SetCart } from '../redux/actions/cartAction';
import { toast } from 'react-toastify';
import PaymentConfirmationModal from './PaymentConfirmationModal';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const [debit, setDebit] = useState("debit-none");
  const [debitNo, setDebitNo] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cod, setCod] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const ttl = JSON.parse(localStorage.getItem('total'));

  const crt = JSON.parse(localStorage.getItem('products'));

  const total = useSelector((state) => state.total.total);
  const dispatch1 = useDispatch(ActionTypes.SET_TOTAL);
  const dispatch2 = useDispatch(ActionTypes.SET_LENGTH);
  const dispatch3 = useDispatch(ActionTypes.SET_PRODUCTS);

  // const handleConfirmCashOnDelivery = () => {
  //   if (cod) {
   
  //     localStorage.setItem('length', JSON.stringify(0));
  //     localStorage.setItem('products', JSON.stringify([]));
  //     localStorage.setItem('total', JSON.stringify(0));
  //     dispatch1(setTotal(ttl));
  //     dispatch2(setLength(0));
  //     dispatch3(SetCart(crt));
  //   }
  //   setConfirmationModalOpen(false);
  //   history('/'); 
  //   alert("Order has been successfully placed");
  // };

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
   
    const sanitizedInput = input.replace(/[^0-9]/g, '');
    if (sanitizedInput.length <= 16) {
      setDebitNo(sanitizedInput);
    }
  };

  const handleCvvChange = (e) => {
    const input = e.target.value;

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
    setConfirmationModalOpen(false);
    let oldorder = JSON.parse(  localStorage.getItem("cartbuy"))||[]
               let product = JSON.parse(localStorage.getItem("products"))
                localStorage.setItem("cartbuy",JSON.stringify([...oldorder,product]))
    localStorage.setItem('length', JSON.stringify(0));
    localStorage.setItem('products', JSON.stringify([]));
    localStorage.setItem('total', JSON.stringify(0));
    dispatch1(setTotal(ttl));
    dispatch2(setLength(0));
    dispatch3(SetCart(crt));
    setConfirmationModalOpen(false);
    history('/'); 
    alert("Order has been successfully placed");
  };

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
             <button onClick={()=>{
               if (cod) {
               let oldorder = JSON.parse(  localStorage.getItem("cartbuy"))||[]
               let product = JSON.parse(localStorage.getItem("products"))
                localStorage.setItem("cartbuy",JSON.stringify([...oldorder,product]))
                localStorage.setItem('length', JSON.stringify(0));
                localStorage.setItem('products', JSON.stringify([]));
                localStorage.setItem('total', JSON.stringify(0));
                dispatch1(setTotal(ttl));
                dispatch2(setLength(0));
                dispatch3(SetCart(crt));
              }
              setConfirmationModalOpen(false);
              history('/'); 
              alert("Order has been successfully placed");
             }} className='continue-btn'>Confirm Order</button>
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
  );
}

export default PaymentPage;




















 {/*  */}