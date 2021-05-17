import React from 'react'
import Product from './Product'
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="
                https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
                " alt=""/>
        
                <div className="home__row">
                    <Product 
                    id="12321341"
                    title="The Lean Startup"
                    price={19.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="4583489"
                    title="Shopie Kart Home Decorative Kitchen and Dining Table Wooden Tissue Stand and Paper Napkin Holder "
                    price={30.99}
                    image="https://m.media-amazon.com/images/I/61B8eLP8EvL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="2384902"
                    title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL "
                    price={116.23}
                    image="https://m.media-amazon.com/images/I/71qOOWyfc7L._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="43321341"
                    title="Butterfly Premium Vegetable Chopper 900 Ml, Blue"
                    price={50.00}
                    image="https://m.media-amazon.com/images/I/312YOAG9luL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="57329891"
                    title="eAirtec 61 cms (24 inches) HD Ready LED TV 24DJ (Black) (2020 Model)"
                    price={125.34}
                    image="https://m.media-amazon.com/images/I/71FutyZQeXL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="768032534"
                    title="wipro 9W e27 LED Warm White/Neutral White/White Bulb, (NS9001)"
                    price={108.59}
                    image="https://m.media-amazon.com/images/I/71Y3lsKoFUL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
