import React, { useState, useEffect } from 'react';
import '../styles/Adress.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Address = () => {
  const [popUp, setPopUp] = useState('hide-box');
  const [addAddress, setAddAddress] = useState('inside-box');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [roadName, setRoadName] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [nearbyPlace, setNearbyPlace] = useState('');

  const handleChange1 = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    if (inputValue.length >= 20) {
      setName(inputValue.substring(0, 20));
    }
  };

  const handleChange2 = (e) => {
    const inputValue = e.target.value;
    setContact(inputValue);
    if (inputValue.length >= 10) {
      setContact(inputValue.substring(0, 10));
    }
  };

  const handleChange3 = (e) => {
    const inputValue = e.target.value;
    setHouseNumber(inputValue);
    if (inputValue.length >= 15) {
      setHouseNumber(inputValue.substring(0, 15));
    }
  };

  const handleChange4 = (e) => {
    const inputValue = e.target.value;
    setRoadName(inputValue);
    if (inputValue.length >= 20) {
      setRoadName(inputValue.substring(0, 20));
    }
  };

  const handleChange5 = (e) => {
    const inputValue = e.target.value;
    setPincode(inputValue);
    if (inputValue.length >= 6) {
      setPincode(inputValue.substring(0, 6));
    }
  };

  const handleChange6 = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);
    if (inputValue.length >= 10) {
      setCity(inputValue.substring(0, 10));
    }
  };

  const handleChange7 = (e) => {
    const inputValue = e.target.value;
    setNearbyPlace(inputValue);
    if (inputValue.length >= 50) {
      setNearbyPlace(inputValue.substring(0, 50));
    }
  };

  const validateName = (name) => {
    return /^[A-Za-z\s]+$/.test(name) && name.length >= 5 && name.length <= 20;
  };

  const validateContact = (contact) => {
    return /^\d+$/.test(contact) && contact.length === 10;
  };

  const validatePincode = (pincode) => {
    return /^\d+$/.test(pincode) && pincode.length === 6;
  };

  const [isNameDisabled, setIsNameDisabled] = useState(false);
  const [isContactDisabled, setIsContactDisabled] = useState(false);
  const [isPincodeDisabled, setIsPincodeDisabled] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      if (e.target.id === 'name' && isNameDisabled) {
        setIsNameDisabled(false);
      } else if (e.target.id === 'contact' && isContactDisabled) {
        setIsContactDisabled(false);
      } else if (e.target.id === 'pincode' && isPincodeDisabled) {
        setIsPincodeDisabled(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const addConfirm = () => {
    if (
      validateName(name) &&
      validateContact(contact) &&
      houseNumber.length >= 1 &&
      houseNumber.length <= 20 &&
      roadName.length >= 5 &&
      roadName.length <= 20 &&
      validatePincode(pincode) &&
      city.length >= 5 &&
      city.length <= 20
    ) {
      setPopUp('hidden');
      setAddAddress('hide-box1');
    } else {
      toast.error('Enter all details in the required format', { position: 'top-center' });
    }
  };

  const closeBtn = () => {
    setPopUp('hide-box');
    setAddAddress('inside-box');
  };

  return (
    <>
      <div className="address-container">
      <div className={popUp}>
      <p className='close-btn' onClick={closeBtn}>Edit</p>
      <p>{name}</p>
      <div className="add">
      <p>{houseNumber},</p>
     <p>{roadName}</p>
      </div>
      <div className="add">
      <p>{city}, </p>
     <p>{pincode}</p>
      </div>
     
    
     <p>{nearbyPlace}</p>
     <p>{contact}</p>
     <Link to={'/payment'}><button className='continue-btn'>Deliver to this Address</button></Link>

    </div>

        <div className={addAddress}>
          <p className="add-address">ADD ADDRESS</p>
          <div className="contact">
            <LocalPhoneOutlinedIcon />
            <p>Contact Details</p>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={handleChange1}
            value={name}
            className={validateName(name) ? 'valid' : 'invalid'}
            disabled={isNameDisabled}
          />
          <p className={validateName(name) ? 'valid' : 'invalid'}>
            {validateName(name) ? 'Name is valid' : 'Enter valid name (letters and spaces, 5-20 characters)'}
          </p>
          <input
            type="number"
            id="contact"
            placeholder="Contact Number"
            onChange={handleChange2}
            value={contact}
            className={validateContact(contact) ? 'valid' : 'invalid'}
            disabled={isContactDisabled}
          />
          <p className={validateContact(contact) ? 'valid' : 'invalid'}>
            {validateContact(contact) ? 'Mobile number is valid' : 'Enter valid mobile number (10 digits)'}
          </p>
          <input
            type="number"
            id="pincode"
            placeholder="Pincode"
            onChange={handleChange5}
            value={pincode}
            className={validatePincode(pincode) ? 'valid' : 'invalid'}
            disabled={isPincodeDisabled}
          />
          <p className={validatePincode(pincode) ? 'valid' : 'invalid'}>
            {validatePincode(pincode) ? 'Pincode is valid' : 'Enter valid pincode (6 digits)'}
          </p>
          <input
            type="text"
            placeholder="House no./Building Name"
            onChange={handleChange3}
            value={houseNumber}
          />
          <input
            type="text"
            placeholder="Road Name/Area/Colony"
            onChange={handleChange4}
            value={roadName}
          />
          <input
            type="text"
            placeholder="City"
            onChange={handleChange6}
            value={city}
          />
          <input
            type="text"
            placeholder="Nearby Famous Place/Shop/School, etc. (optional)"
            onChange={handleChange7}
            value={nearbyPlace}
          />
          <button className="continue-btn" onClick={addConfirm}>
            Save Address & Continue
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Address;
