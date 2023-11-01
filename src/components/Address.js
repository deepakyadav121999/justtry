import React, { useState } from 'react';
import '../styles/Adress.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Address = () => {
  const [popUp, setpopUp] = useState("hide-box");
  const [addaddress, setaddaddress] = useState("inside-box");
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [houseNumber, sethouseNumber] = useState("");
  const [roadName, setroadName] = useState("");
  const [pincode, setpincode] = useState("");
  const [city, setcity] = useState("");
  const [nearbyPlace, setnearbyPlace] = useState("");

  const handleChange1 = (e) => {
    const input = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(input)) {
  if (input.length <= 20) {
    setname(input);
  } else {
    e.preventDefault(); 
    setname(input.substring(0, 20)); 
  }
}
  };

  const handleChange2 = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/[^0-9]/g, '');
    if (sanitizedInput.length <= 10) {
      setcontact(sanitizedInput);
    }
    
  };



  const handleChange3 = (e) => {
    const input = e.target.value;
    if (input.length <= 15) {
      sethouseNumber(input);
    } else {
      e.preventDefault(); 
      sethouseNumber(input.substring(0, 15)); 
    }
  };

  const handleChange4 = (e) => {
    const input = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(input)) {
    if (input.length <= 20) {
      setroadName(input);
    } else {
      e.preventDefault(); 
    setroadName(input.substring(0, 20));
    }
  }
  };

  const handleChange5 = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/[^0-9]/g, '');
    if (sanitizedInput.length <= 6) {
      setpincode(sanitizedInput);
    }
  };

  const handleChange6 = (e) => {
    const input = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(input)) {
    if (input.length <= 20) {
      setcity(input);
    } else {
      e.preventDefault(); 
      setcity(input.substring(0, 20)); 
    }
  }
  };

  const handleChange7 = (e) => {
    const input = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(input)) {
    if (input.length <= 30) {
      setnearbyPlace(input);
    } else {
      e.preventDefault(); 
      setnearbyPlace(input.substring(0, 30)); 
    }
  }
  };

  const addConfirm = () => {
    if (
      name.length > 5 &&
      name.length <= 20 &&
      contact.length === 10 &&
      houseNumber.length > 1 &&
      houseNumber.length <= 15 &&
      roadName.length > 5 &&
      roadName.length <= 20 &&
      pincode.length === 6 &&
      city.length > 5 &&
      city.length <= 20
    ) {
      setpopUp("hidden");
      setaddaddress("hide-box1");
    } else {
      toast.error("Enter all details in the required format", { position: "top-center" });
    }
  };

  const closeBtn = () => {
    setpopUp("hide-box");
    setaddaddress("inside-box");
  };

  return (
    <>
      <div className="address-contaier">
        <div className={popUp}>
          <p className="close-btn" onClick={closeBtn}>
            Edit
          </p>
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
          <Link to={'/payment'}>
            <button className="continue-btn">Deliver to this Address</button>
          </Link>
        </div>

        <div className={addaddress}>
          <p className="add-address">ADD ADDRESS</p>
          <div className="contact">
            <LocalPhoneOutlinedIcon />
            <p>Contact Details</p>
          </div>
          <input type="text" placeholder="Name" onChange={handleChange1}  value={name}/>
          <p>{(name.length > 5) || (name.length < 20) && <p style={{ color: "red" }}>Enter valid name</p>}</p>


          <input type="number" placeholder="Contact Number" onChange={handleChange2} value={contact}/>
          <p>{contact.length > 10 || contact.length < 10 && <p style={{ color: "red" }}>Enter valid mobile number</p>}</p>
          <div className="location">
            <LocationOnOutlinedIcon />
            <p>Address</p>
          </div>
          <input type="text" placeholder="House no./Building Name" onChange={handleChange3} value={houseNumber}/>
          <p>{houseNumber.length > 1 || houseNumber.length < 15 && <p style={{ color: "red" }}>Enter valid house number</p>}</p>
          <input type="text" placeholder="Road Name/Area/Colony" onChange={handleChange4} value={roadName}/>
          <p>{roadName.length > 5 || roadName.length < 20 && <p style={{ color: "red" }}>Enter valid road name</p>}</p>
          <input type="number" placeholder="Pincode" onChange={handleChange5} value={pincode}  />
          <p>{pincode.length > 6 || pincode.length < 6 && <p style={{ color: "red" }}>Enter valid pincode</p>}</p>
          <input type="text" placeholder="City" onChange={handleChange6} value={city}/>
          <p>{city.length > 5 || city.length < 10 && <p style={{ color: "red" }}>Enter valid city name</p>}</p>
          <input type="text" placeholder="Nearby Famous Place/Shop/School, etc. (optional)" onChange={handleChange7} value={nearbyPlace}/>
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
