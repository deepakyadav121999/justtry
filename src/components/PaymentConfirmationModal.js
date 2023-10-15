import React from 'react';
import '../styles/PaymentConfirm.css'

function PaymentConfirmationModal({ isOpen, total, onConfirm, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Are you sure you want to buy the product?</h2>
        <p>Total Price: ${total}</p>
        <button onClick={onConfirm} className='continue-btn'>Confirm Payment</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default PaymentConfirmationModal;
