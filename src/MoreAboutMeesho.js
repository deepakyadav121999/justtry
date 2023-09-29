import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './styles/moreaboutmeesho.css'


const data =[{
    heading: 'Meesho: Affordable Online Shopping at Your Fingertips',
    description: "There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market.  Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet. "
},
{
    heading: 'A Huge Selection of Products Across All Categories',
    description: "We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need."
},
{
    heading: "Womens Ethnic Wear Collection",
    description: "When it comes to women's ethnic wear, we have everything you need to find the perfect outfit for any occasion. Whether you're looking for traditional sarees and blouses, or something more modern like suits or casual Kurtis, we have it all. And with our stunning collection of accessories, footwear, and jewellery sets, it's easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today!"
},
{
heading:'Western Wear for Women',
description:"Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being able to find something you love!"
},
{
    heading: 'Accessories, Jewellery, and Footwear',
    description: "You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, handbags, belts, heels, casual footwear, watches, etc. With so many options, you'll be sure to find the perfect accessories for any outfit!"

},
{
    heading: "Men’s Accessories and Footwear",
    description: "When it comes to fashion, no one knows how to help you gain the upper hand in style better than us. Shop our online collection of accessories for men and pick out something for yourself or for your other half! Our accessories collection includes items like men's wallets, cufflinks, bags for men, and more. So don't waste another minute and get yourself some accessories today! Do not forget to check out our latest footwear for men. We have everything from colorful sneakers to formal footwear to flip-flops for men."
}
]
function MoreAboutMeesho() {
    const[hidd ,Sethidd] =useState('ak')
    
  const babaji =()=>{
        if(hidd ==='baba'){
            Sethidd('ak')
        }
        else{
            Sethidd('baba')
        }
  }

  return (
    <div>
        <p className='morebb' onClick={babaji}>More About Meesho <KeyboardArrowDownIcon/></p>

          <div className={hidd}>
                {data.map((item)=>{
                    return(
                        <div className="invisible-content">
                          <p className="moreabouthead">{item.heading}</p>
                          <p className="moreaboutdec">{item.description}</p>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default MoreAboutMeesho