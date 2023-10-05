import React from 'react'
import './wishlist.css'
const Wishlist = () => {
  let b=  JSON.parse(localStorage.getItem('wishlist'))
  console.log(b)
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist