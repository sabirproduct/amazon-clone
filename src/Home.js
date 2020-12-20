import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
               alt=""></img>


        <div className="home__row">
           <Product id="556454" title="The Lean Startup" price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
           <Product id="556455" title="Kenwood kMix Stand Mixer for baking, Stylish kitchen mixer with k-beater, Dough Hook and Whisk" price={239.99} image="https://images-na.ssl-images-amazon.com/images/I/61lXk66xhaL._SL1200_.jpg" rating={3}/>
        </div>
        <div className="home__row">
        <Product id="556456"title="Bosch 12 Place Settings Dishwasher (SMS66GW01I, White)" price={1239.99} image="https://images-na.ssl-images-amazon.com/images/I/71sDAeFafVL._SL1500_.jpg" rating={4}/>
        <Product id="556457" title="WD My Cloud Home WDBVXC0040HWT-NESN 4TB Network Attached Storage (White))" price={39.99} image="https://images-na.ssl-images-amazon.com/images/I/8150u4zlRrL._SL1500_.jpg" rating={2}/>
        <Product id="556458" title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SL1500_.jpg" rating={4}/>
        </div>
        <div className="home__row">
        <Product id="556459" title="OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)" price={399.99} image="https://images-na.ssl-images-amazon.com/images/I/51s0Mb5li8L._SL1000_.jpg" rating={4}/>
        </div>

         </div>
        </div>
    );
}

export default Home
