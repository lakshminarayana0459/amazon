import React from 'react'
import AmazonBanner from '../src/assets/amazonbanner1.jpg';

import IphoneImgae from '../src/assets/watch.jpg';
import "./Home.css"

import Product from "./Product";

function Home() {
    return (
        <div className="home">
            
        <img src={AmazonBanner} alt={"AmazonBanner"} className="home__bannerimage"/>

<div className="home__row">
<Product id={1234}
           title="The product The product The product The product The product The product The product The product The product The product"
           price={11.36}
           rating={5}
           image={IphoneImgae}/>

           <Product id={12345}
           title="The product The product The product The product The product The product The product The product The product The product"
           price={11.36}
           rating={5}
           image={IphoneImgae}/>
</div>

<div className="home__row">
<Product id={12346}
           title="The product The product The product The product"
           price={11.36}
           rating={5}
           image={IphoneImgae}/>
           
           <Product id={12347}
           title="The product The product The product The product The product The product "
           price={11.36}
           rating={5}
           image={IphoneImgae}/>

<Product id={12348}
           title="The product The product The product The product "
           price={11.36}
           rating={5}
           image={IphoneImgae}/>
</div>

<div className="home__row">
<Product id={12349}
           title="The product The product The product The product The product The product The product The product "
           price={11.36}
           rating={5}
           image={IphoneImgae}/>
</div>
        
        
        </div>
    )
}

export default Home
