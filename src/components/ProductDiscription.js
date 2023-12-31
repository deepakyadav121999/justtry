import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ActionTypes } from '../redux/constants/action-types'
import { useDispatch,useSelector } from 'react-redux'
import {setDiscription} from '../redux/actions/discriptionAction'
import '../styles/ProductDiscription.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import { setLength } from '../redux/actions/LengthAction'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {setQuantity} from '../redux/actions/quantity';
import { setTotal } from '../redux/actions/totalAction'

function ProductDiscription() {
  const[reloading ,setreloading] =useState(false)

  const [btndisabled,setbtndisabled] =useState(false)
    const temp = useParams()
    const discription = useSelector((state)=>state.discription.discription)
     const dispatch = useDispatch(ActionTypes.SET_DISCRIPTION)
  
     let length =JSON.parse(localStorage.getItem('length'))
     const dispatch1 = useDispatch(ActionTypes.SET_LENGTH)
     const [wishlist, setWishlist] = useState([]);
     
     
     const dispatch2 = useDispatch(ActionTypes.SET_TOTAL)
     const ttl = useSelector(state=>state.total.total)
     const fdispatch = useDispatch(ActionTypes.SET_QUANTITY)
     const quan = useSelector((state)=>state.quantity.quantity)  
     const toggleWishlist = () => {
      const oldWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      const productId = discription.id;
    
      if (oldWishlist.includes(productId)) {
       
        const updatedWishlist = oldWishlist.filter((id) => id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist)
        
      } else {
      
        const updatedWishlist = [...oldWishlist, productId];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist)
       
      }
    };



useEffect(()=>{

    const apiCall=async(product)=>{
        let response = await fetch(`https://fakestoreapi.com/products/${product}`)
        let data = await response.json();
        
        data ={...data,quantity:1}

       dispatch(setDiscription(data))
     
     }
    apiCall(temp.id) 
    const oldWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(oldWishlist);

     // eslint-disable-next-line
},[temp.id])
useEffect(()=>{
 
  dispatch1(setLength(length))
  // eslint-disable-next-line
},[reloading])
 


        
  return (
    <>
    {
        discription && <div className='discription-container'>
          <ToastContainer />
             <div className="discription-container-left">
                 <img src={discription.image} alt="" />

                  
                 <div className="discription-btn-11">
                
                  
                     <button className='discription-btn1' onClick={(e)=>{
                      e.preventDefault()
                      let oldproducts = JSON.parse(localStorage.getItem('products')) || [];
                   
                      const isProductInCart = oldproducts.some((product) => product.id === discription.id);

                   
                      if (isProductInCart) {
                        let oldtotal = JSON.parse(localStorage.getItem('total')) || 0;
                        localStorage.setItem('total', JSON.stringify(oldtotal + discription.price));
                        dispatch2(setTotal(ttl+parseInt(discription.price,10)))
                        fdispatch(setQuantity(quan+1))
                        toast.success('Successfully Added to Cart', {
                          toastId: 'success1',
                          position:'top-center',
                          autoClose: 1000,
                          closeOnClick: true,
                      })
                      const updatedProducts = oldproducts.map((product) => {
                        if (product.id === discription.id) {
                         
                          product.quantity += 1;
                        }
                        return product;
                      });
                      localStorage.setItem('products', JSON.stringify(updatedProducts));
                  
                      } else {
                       
                        localStorage.setItem('products', JSON.stringify([...oldproducts, discription]));
                        let oldlength = JSON.parse(localStorage.getItem('length')) || 0;
                        localStorage.setItem('length', JSON.stringify(oldlength + 1));
                        let oldtotal = JSON.parse(localStorage.getItem('total')) || 0;
                        localStorage.setItem('total', JSON.stringify(oldtotal + discription.price));
                        setreloading(!reloading);
                        // console.log("i am comming");
                        toast.success('Successfully Added to Cart', {
                          toastId: 'success1',
                          position:'top-center',
                          autoClose: 1000,
                          closeOnClick: true,
                      })
                       
                        setbtndisabled(true);
                      }
                    }}
                  
                    
                    
                    ><ShoppingCartOutlinedIcon className='dis-btn' disabled={btndisabled}/>Add to Cart</button>
          
                  
          <Link to={'/directaddress'} ><button className='discription-btn2' 
          
          onClick={()=>{
            localStorage.setItem('directbuy',JSON.stringify(discription.price))
        let oldorder = JSON.parse(localStorage.getItem("cartbuy"))||[]
            localStorage.setItem("cartbuy",JSON.stringify([...oldorder,discription]))
          }}
          ><KeyboardDoubleArrowRightIcon className='dis-btn'/>Buy Now</button></Link>
                    </div>
             </div>
             <div className="discription-container-right">
                <div className='right-container-div1'>
                  <div className="title-wishlist">
                  <p className='discription-title'>{discription.title}</p>
                  <div className="wishlist-disciption" onClick={toggleWishlist}>
                         {wishlist.includes(discription.id)? <FavoriteIcon fontSize='large' style={{ color: "red" }} onClick={()=>  toast.error("Removed from wishlist",{
                        position:'top-center'
                       })}/> : <FavoriteBorderIcon fontSize='large'   onClick={()=>  toast.success("Added to wishlist",{
                        position:'top-center'
                       })}/>}
                               <p>Wishlist</p>
                  </div>

                  
                  </div>
                 
                  <p className='discription-price'>₹{discription.price}</p>
                  <div className='right-container-ratingcount'>
                  <div className="dis-rationg-icon">
                  <p>{discription.rating && discription.rating.rate}</p>
                  <StarPurple500SharpIcon/>
                  </div>
                  <div className="count-set">
                  <p>{discription.rating && discription.rating.count} </p>
                  <p>pices left</p>
                  </div>
                  
                  </div>
                  <p className='discription-free-delevery'>Free Delevery</p>
                </div>
                <div className='right-container-div2'>
                  <p className='select-size'>Select Size</p>
                  <p className='div2-free-size'>Free Size</p>
                  <p></p>
                </div>
                <div className='right-container-div3'>
                  <p className='product-details'>Product Details:-</p>
                  <p className='product-dis'>{discription.title}{discription.description}</p>
                </div>
             </div>
        </div>
    }

    </>
  )
}

export default ProductDiscription;