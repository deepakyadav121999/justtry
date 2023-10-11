import React, { useEffect, useState } from 'react';
import './wishlist.css';
import { Link } from 'react-router-dom';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { ActionTypes } from '../../redux/constants/action-types';
import { setDiscription } from '../../redux/actions/discriptionAction';
import { useDispatch } from 'react-redux';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Wishlist = () => {
  const dispatch1 = useDispatch(ActionTypes.SET_DISCRIPTION);
  const [productsInWishlist, setProductsInWishlist] = useState([]);
  const emtyStr = () => {
    dispatch1(setDiscription(''));
  };

 




  const getProductDetailsById = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const productData = await response.json();
      return productData;
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  };




  useEffect(() => {
    const fetchWishlistData = async () => {
      const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      const wishlistProducts = [];
  
      for (const productId of storedWishlist) {
        const productData = await getProductDetailsById(productId);
        if (productData) {
          wishlistProducts.push(productData);
        }
      }
  
      setProductsInWishlist(wishlistProducts);
    };
  
    fetchWishlistData();
  }, []);


  return (
    <div className='homepage-container'>
      {productsInWishlist.length > 0 ? (
        productsInWishlist.map((item, index) => {
          return (
            <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }} key={index} onClick={emtyStr}>
              <div className='homepage-list'>
                <img src={item.image} alt="" className='main-img' />
                <p className='item-name'>{item.title}</p>
                <div className="price-container">
                  <p className='item-price'>₹ {parseInt(item.price)}</p>
                  <p className='item-onwords'>onwards</p>
                </div>
                <p className='free-delivery'>Free Delivery</p>
                <div className="item-rating">
                  <div className="rating-icon">
                    <p className='item-rating-rate'>{item.rating && item.rating.rate}</p>
                    <StarOutlinedIcon className='rating-logo' />
                  </div>
                  <p>{item.rating && item.rating.count} pieces left</p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div className='emptybox-container'>
          <p>Please add some products to the wishlist</p>
          <ProductionQuantityLimitsIcon fontSize='large' />
        </div>
      )}
    </div>
  );
};

export default Wishlist;
