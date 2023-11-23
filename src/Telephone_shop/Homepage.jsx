import React from 'react'
import Header from './Header'
import Branding from './Branding'
import Title from './Title'
import Product from './Product'
import Footer from './Footer'

function Homepage() {
  return (
    <>
  {/* Header  */}
<Header/>
  {/* End header area */}
  {/* End site branding area */}
<Branding/>
  {/* End mainmenu area */}
<Title/>
  {/* List product */}
  <div className="single-product-area">
    <div className="zigzag-bottom" />
    <div className="container">
    <div className="row">
    <Product/>
    <Product/>
<Product/>  
  <Product/>   
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
 
  </div>

    </div>
  </div>
  {/* Footer area */}
<Footer/>
  {/* Latest jQuery form server */}
  {/* Bootstrap JS form CDN */}
  {/* jQuery sticky menu */}
  {/* jQuery easing */}
  {/* Main Script */}
</>

  )
}

export default Homepage