import React from 'react'
import { Button1, Button2 } from './Buttons';
import {UpperNavbar, LowerNavbar} from './Navbar';

export default function Shop() {
  return (
    <div className='shop'>
      <UpperNavbar/>
      <img class="shop-image1" src={process.env.PUBLIC_URL + '/mars-half-pic2.png'} alt="logo" />
      <div className='mainHeading-div'>
        <h1 className='page-mainHeading'>MARTIAN SHOP</h1>
        <div className='detail'>The one-stop mega store for all your martian assets</div>
        <div className='search-field'>
          <label className='search-field' htmlFor='shop-search'>Search The Shop</label>
          <div><input className='shop-search'/></div>
        </div>
      </div>
      <div className='UpperImages'>
        <img class="shop-image13" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Spaceman.png'} alt="logo" />
        <img class="shop-image12" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Planet.png'} alt="logo" />
      </div>
      <div className='options'>
        <div className='option'>
          <img class="shop-image4 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Land.png'} alt="logo" />
          LAND PLOTS
        </div>
        <div className='option'>
          <img class="shop-image5 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Utility.png'} alt="logo" />
          UTILITY
        </div>
        <div className='option'>
          <img class="shop-image6 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_buildings.png'} alt="logo" />
          BUILDINGS
        </div>
        <div className='option'>
          <img class="shop-image7 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Dome.png'} alt="logo" />
          DOMES
        </div>
        <div className='option'>
          <img class="shop-image8 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Coin.png'} alt="logo" />
          MVE COINS
        </div>
        <div className='option'>
          <img class="shop-image9 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Others.png'} alt="logo" />
          OTHERS
        </div>
        <div className='option'>
          <img class="shop-image10 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Updates.png'} alt="logo" />
          NEWLY UPDATED
        </div>
        <div className='option'>
          <img class="shop-image11 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Explore.png'} alt="logo" />
          EXPLORE
        </div>
      </div>
      <div className='products-div'>
        <img class="shop-image2 shop-img-bag" src={process.env.PUBLIC_URL + '/Martian Shop Pics 1.png'} alt="logo" />
        <img class="shop-image3 shop-img-bag" src={process.env.PUBLIC_URL + '/Martian Shop Pics 2.png'} alt="logo" />
      </div>
      <div className='Buy-sale'>
        <img class="shop-image11 shop-img-bag" src={process.env.PUBLIC_URL + '/Martian Shop Pics 3.png'} alt="logo" />
        <div className='assets-con'>
          <div className='assets'>
            <img class="shop-image12 shop-img" src={process.env.PUBLIC_URL + '/Martian_Shop_Page_Assets.png'} alt="logo" />
            <Button1 className='assets-btn' BtnText="ENTER"/>
          </div>
          <div className='assets1'>
            <div className='AssetHeading1'>BUY & SELL ASSETS</div>
            <div className='AssetHeading2'>Buy or Sell Assets With Other Players</div>
            <Button2 className='assets1-btn' BtnText1="LEARN" BtnText2="MORE"/>
          </div>
        </div>
      </div>
      <LowerNavbar/>
    </div>
  )
}
