import React from 'react'
import { Button1, Button2 } from './Buttons'
import { LowerNavbar, UpperNavbar } from './Navbar';
import { Link } from "react-router-dom";


export default function Domes() {
  return (
    <div className='domes'>
      <UpperNavbar/>
      <div className="con con1">
        <div className="mainHeading-div">
          <div className="mainHeading FontFamily">DOMES</div>
        </div>
        <div className="mainHeading-detail">
          Domes or Sectors are very important for colonizing Mars.<br/>They are the new Martian Cities and States. Create, build and Upgrade Domes/Sectors.
        </div>
      </div>
      <img class="domes-image1 dome-img" src={process.env.PUBLIC_URL + '/Dome Page Pic 1.png'} alt="logo" />
      <div className='con con2'>
        <div className='con2-div1'>
          <img class="domes-image2 dome-img1" src={process.env.PUBLIC_URL + '/Martian Shop Pics 3.png'} alt="logo" />
          <Button2 BtnText1="EXPLORE" BtnText2="DOMES" />
        </div>
        <div className='con2-div2'>
          <div className='div2'>
            <div className='div2-mainHeading'>BUILD DOMES</div>
            <div className='div2-detail'>
              Buy domes and start building your Mars colony. Own and manage domes. Upgrade and develop your sector.
            </div>
          </div>
          <div className='div2-btns'>
            <div className='div2-btn1'>
              <Button1 BtnText = "BUY"/>
            </div>
            <div className='div2-btn2'>
              <Button1 BtnText="LEARN MORE"/>
            </div>
          </div>
        </div>
      </div>
      <img class="domes-image3 dome-img" src={process.env.PUBLIC_URL + '/Dome page pic 2.png'} alt="logo" />
      <div className='con con3'>
        <div className='con3-div'>
          <div className='div'>
            <div className='div-mainHeading'>MANAGE DOMES</div>
            <div className='div-detail'>
              Manage domes and builds your Dome economy. Create new value for your sector. Contribute to the Martian economy.
            </div>
          </div>
          <Button1 BtnText = "RULES & REGULATIONS"/>
        </div>
      </div>
      <img class="domes-image4 dome-img" src={process.env.PUBLIC_URL + '/Dome page pic 3.png'} alt="logo" />
      <div className='gradient'>
        <br/>
        <br/>
      </div><br/><br/><br/><br/>
      <img class="domes-image5 dome-img1" src={process.env.PUBLIC_URL + '/Dome_page_pic_4.png'} alt="logo" />
      <img class="domes-image6 dome-img1" src={process.env.PUBLIC_URL + '/Dome_page_pic_5.png'} alt="logo" />
      <LowerNavbar />
    </div>
  )
}
