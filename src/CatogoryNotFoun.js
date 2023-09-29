import React from 'react'
import './CatogoryNotFound.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function CatogoryNotFoun() {
  return (
    <div className='cat-main-container'>
      <p>Sorry this time we dont have these type of products</p>
    <ShoppingBasketIcon fontSize='large'/>
    </div>
  )
}

export default CatogoryNotFoun