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

function ProductDiscription() {
  const[reloading ,setreloading] =useState(false)

  const[addtocartbtn,setaddtocartbtn] =useState("Add to Cart")
  const [btndisabled,setbtndisabled] =useState(false)
    const temp = useParams()
    const discription = useSelector((state)=>state.discription.discription)
     const dispatch = useDispatch(ActionTypes.SET_DISCRIPTION)
  
     let length =JSON.parse(localStorage.getItem('length'))
     const dispatch1 = useDispatch(ActionTypes.SET_LENGTH)
     const [wishlist, setWishlist] = useState([]);

   

     const toggleWishlist = () => {
      const oldWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      const productId = discription.id;
    
      if (oldWishlist.includes(productId)) {
        // If the product ID is in the wishlist, remove it
        const updatedWishlist = oldWishlist.filter((id) => id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist)
        
      } else {
        // If the product ID is not in the wishlist, add it
        const updatedWishlist = [...oldWishlist, productId];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist)
       
      }
    };



useEffect(()=>{

    const apiCall=async(product)=>{
        let response = await fetch(`https://fakestoreapi.com/products/${product}`)
        let data = await response.json();
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
             <div className="discription-container-left">
                 <img src={discription.image} alt="" />

                  
                 <div className="discription-btn-11">
                
                  
                     <button className='discription-btn1' onClick={()=>{
                       let oldproducts = JSON.parse(localStorage.getItem('products'))||[]
                       localStorage.setItem('products',JSON.stringify([...oldproducts,discription]))
                       let oldlength = JSON.parse(localStorage.getItem('length'))||0
                       localStorage.setItem('length',JSON.stringify(oldlength+1))
                       let oldtotal = JSON.parse(localStorage.getItem('total'))||0
                       localStorage.setItem('total',JSON.stringify(oldtotal+discription.price))
                       setreloading(!reloading)
                       toast.success("Added to Cart!",{
                        position:'top-center'
                       });
                   if(addtocartbtn==="Add to Cart"){
                    setaddtocartbtn("Added to cart")
                    
                   }
                   setbtndisabled(true)
                    }}
                  
                    
                    
                    ><ShoppingCartOutlinedIcon className='dis-btn' disabled={btndisabled}/>{addtocartbtn}</button>
          
                  
          <Link to={'/directaddress'} ><button className='discription-btn2' ><KeyboardDoubleArrowRightIcon className='dis-btn'/>Buy Now</button></Link>
                    </div>
             </div>
             <div className="discription-container-right">
                <div className='right-container-div1'>
                  <div className="title-wishlist">
                  <p className='discription-title'>{discription.title}</p>
                  <div className="wishlist-disciption" onClick={toggleWishlist}>
                         {wishlist.includes(discription.id)? <FavoriteIcon fontSize='large' style={{ color: "red" }} /> : <FavoriteBorderIcon fontSize='large' />}
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
<ToastContainer />
    </>
  )
}

export default ProductDiscription;