import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import './styles/Footer.css'

function Footer() {
  return (
<div className="footer-container">
 <div className="foo1 boxifoo1">
 <p className='foo_heading'>Shop Non-Stop on Meesho</p>
 <p className='smallfoo'>Trusted by more than 1 Crore Indians
Cash on Delivery | Free Delivery</p>
<div className="foo1insider">
    <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" />
    <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" />
</div>
 </div>
 

  <div className="foo2 boxifoo">
  <p >Careers</p>
  <p>Become a supplier</p>
  <p>Hall of Frame</p>
  </div>


  <div className="foo3 boxifoo">
  <p>Legal and Policies</p>
  <p>Meesho Tech Blog</p>
  <p>Notices and Returns</p>
  </div>


  <div className="foo4 boxifoo">
   <p className='mfoo-head'>Reach out to us</p>
    <FacebookIcon className='fbicon'/>
    <InstagramIcon className='instaicon'/>
    <YouTubeIcon className='yticon'/>
    <TwitterIcon className='twicon'/>
  </div>
  <div className="foo5 boxifoo">
   <p className='mfoo-head'>Contact Us</p>
    <p className='smallfoo'>Fasnear Technologies Private Limited
06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
E-mail address: query@meesho.com
© 2015-2022 Meesho.com</p>
  </div>

</div>
  )
}

export default Footer