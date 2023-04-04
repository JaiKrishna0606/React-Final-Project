import React from 'react'
import img1 from "../Images/sp 1 adidas.jpg";
import img2 from "../Images/sp 2 puma.jpg";
import img3 from "../Images/sp 3 bata.jpg"
import img4 from "../Images/sp 4 reebok.jpg";
import img5 from "../Images/sp 5 nike.jpg"
import img6 from "../Images/sp 6 wood.jpg"
import img7 from "../Images/sp 7 liberty shoe.jpg"
import img8  from "../Images/sp 8 metro.jpg"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>Adidas</h2>
        <h2>Price : $75</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>Puma</h2>
        <h2>Price : $80</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>Bata</h2>
        <h2>Price : $85</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>Reebok</h2>
        <h2>Price : $90</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>Nike</h2>
        <h2>Price : $95</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>Woodland</h2>
        <h2>Price : $80</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>Liberty</h2>
        <h2>Price : $90</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>Metro</h2>
        <h2>Price : $100</h2>
        
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
