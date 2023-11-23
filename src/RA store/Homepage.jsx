import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Detail from './Detail'
import Product from './Product'
import Find from './Find'
import Client from './Client'
import Sign from './Sign'
import Infor from './Infor'
import Footer from './Footer'

function Homepage() {
  return (
    <>
  <div className="hero_area">
    {/* header section strats */}
<Header/>
    {/* end header section */}
    {/* slider section */}
<Slider/>
    {/* end slider section */}
  </div>
  {/* detail section */}
<Detail/>
  {/* end detail section */}
  {/* products section */}
  <section className="products_section">
    <div className="heading_container">
      <h2>New Products In Store</h2>
      <p>Featured Product Just Arrived</p>
    </div>
    <div className="container layout_padding">
      <div className="product_container">
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
  </section>
  {/* end products section */}
  {/* find section */}
<Find/>
  {/* end find section */}
  {/* client section */}
<Client/>
  {/* end client section */}
  {/* sign section */}
<Sign/>
  {/* end sign section */}
  {/* info section */}
<Infor/>
  {/* end info section */}
  {/* footer section */}
<Footer/>
  {/* footer section */}
</>

  )
}

export default Homepage