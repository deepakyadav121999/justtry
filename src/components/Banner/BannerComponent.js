import React from 'react'
import banner1 from './banner1.png'
import './banner12.css'
import { Link } from 'react-router-dom'
import b21 from './b21.gif'

const BannerComponent = () => {
  return (
    <div className='bannercomponent'>
       
 


      <Link to={"https://play.google.com/store/apps/details?id=com.meesho.supply"}><div className="banner1">
      <img src={banner1} alt="" />
      </div>
      </Link>

      <div className="indian-sale">
          <img src={b21} alt="" />
        </div>
        <div className="easy-return">
          <img src="https://images.meesho.com/images/widgets/OY6J5/xwgyl_800.webp" alt="" />
        </div>


      <div className="banner2">
      <Link to={'/womanEthinic'}> <div className="banner2-left">
         <img src="https://images.meesho.com/images/marketing/1692190996099_400.webp" className='banner2-right-img' alt="" />
        </div>  </Link>
        <div className="banner2-right">
        <div className="blank-container"></div>
     <div className="b2-right-main-container">
  
     <Link to={'/men'}><div className="b2-left">
          <img src="https://images.meesho.com/images/marketing/1692191045019_300.webp" className='left-img1' alt="" />
            </div>
        </Link>
          
        <Link to={'/itemunawailable'}><div className="b2-right">
              <img src="https://images.meesho.com/images/marketing/1692191103963_300.webp" alt=""  className='left-img1'/>
            </div>
            </Link>
   
          </div>
          </div>
      </div>








           <div className="banner3">
        
             <Link to={'./men' } style={{textDecoration:'none'}}> <div className="banner3-b1 b3-all">
                <img src="https://images.meesho.com/images/widgets/VPF4I/s0rat_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹300</p>
              </div>
              </Link>
              <Link to={'./electronics' } style={{textDecoration:'none'}}>
              <div className="banner3-b2 b3-all">
                <img src="https://images.meesho.com/images/widgets/H79I0/ftppb_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹999</p>
              </div>
              </Link>
              <Link to={'./itemunawailable' } style={{textDecoration:'none'}}>
              <div className="banner3-b3 b3-all">
                <img src="https://images.meesho.com/images/widgets/W1PDO/lc0zv_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹350</p>
              </div>
              </Link>
              <Link to={'./itemunawailable' } style={{textDecoration:'none'}}>
              <div className="banner3-b4 b3-all">
                <img src="https://images.meesho.com/images/widgets/H3W14/kxwdq_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹350</p>
              </div>
              </Link>
              
              <Link to={'./itemunawailable' } style={{textDecoration:'none'}}>
              <div className="banner3-b5 b3-all">
                <img src="https://images.meesho.com/images/widgets/JUGK4/og714_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹350</p>
              </div>
              </Link>

              <Link to={'./itemunawailable' } style={{textDecoration:'none'}}>
              <div className="banner3-b6 b3-all">
                <img src="https://images.meesho.com/images/widgets/Q123I/ilyqh_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹350</p>
              </div>
              </Link>
              <Link to={'./itemunawailable' } style={{textDecoration:'none'}}>
              <div className="banner3-b7 b3-all">
                <img src="https://images.meesho.com/images/widgets/KQEKU/gblru_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹350</p>
              </div>
              </Link>
              <Link to={'./itemunawailable' } style={{textDecoration:'none'}}>
              <div className="banner3-b9 b3-all">
                <img src="https://images.meesho.com/images/widgets/ES4IR/uxvkp_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹350</p>
              </div>
              </Link>

              <Link to={'./jwellery' } style={{textDecoration:'none'}}>
              <div className="banner3-b10 b3-all">
                <img src="https://images.meesho.com/images/widgets/ST82Q/apj9q_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹699</p>
              </div>
              </Link>

              <Link to={'./itemunawailable' } style={{textDecoration:'none'}}>
              <div className="banner3-b2 b3-all">
                <img src="https://images.meesho.com/images/widgets/6Z78Y/kcg15_150.webp" alt="" className='banner3-img'/>
                <p>Under ₹350</p>
              </div>
              </Link>

           
           </div>




      
    </div>
  )
}

export default BannerComponent