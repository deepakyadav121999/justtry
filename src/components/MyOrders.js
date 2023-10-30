import React,{useEffect,useState} from 'react'

const MyOrders = () => {
  const [cart, setCart] = useState([]);
 
  const handleCancelOrder = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

  
    localStorage.setItem("cartbuy", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
    
 

  useEffect(() => {
   
    const storedCart = JSON.parse(localStorage.getItem("cartbuy")) || [];
    const mergedCart = storedCart.reduce((acc, curr) => acc.concat(curr), []);
    setCart(mergedCart);
  }, [cart]);
  




 
  return (
    <div className='cartpage-container'>
       <div className="container-left">
   { cart && cart.map((item,index)=>{return(
            <div className="left-container-item" key={index}>
              <div className="left-image-text-adjust">
                   <img src={item.image} alt="" />
              </div>
              <div className="left-image-text-adjust1">
                <div className='name-edit-btn'>
                <p>{item.title}</p>
                </div>
                 
                 <p> ₹{item.price}</p>
                 <p>All issue easy returns allowed</p>
           
                <button onClick={()=>handleCancelOrder(index)}>X Cancel Order</button>
                </div>
                
            </div>
             )})
   
            }
   </div>
    </div>
  
  )
}

export default MyOrders