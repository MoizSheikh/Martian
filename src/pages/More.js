import React from 'react';
import { Button1 } from './Buttons';
import { UpperNavbar, LowerNavbar } from './Navbar';

export default function More() {
  return (
    <div className='more build'>
        <UpperNavbar />
        <div className='build-mainDiv more-mainDiv'>
            <div className='page-mainHeading'>
                EXPLORE MORE
            </div>
            <div className='search-field'>
                <label className='search-field1' htmlFor='more-search'>SEARCH</label>
                <div><input className='more-search'/></div>
            </div>
        </div>
        <img class="more-image1 more-img" src={process.env.PUBLIC_URL + '/Martian pic4.png'} alt="logo" />
        <div className='CON con1'>
            <div className='merge'>
                <div className='con-detail'>
                    <div className='con-mainHeading'>SUPPORT</div>
                    <div className='mail-icon'>&#9993;</div>
                </div>
                <div className='con-detail'>
                    <div className='con-mainHeading'>CONTACT US:</div>
                    <Button1 BtnText="GET IN TOUCH"/>
                </div>
            </div>
            <div className='con-detail'>
                <div className='con-mainHeading'>CRYPTO GAMING</div>
                <Button1 BtnText="LEARN MORE"/>
            </div>
            <div className='con-detail'>
                <div className='con-mainHeading'>WHITE PAPER</div>
                <Button1 BtnText="VIEW"/>
            </div>
            <div className='con-detail'>
                <div className='con-mainHeading'>COMMUNITY</div>
                <Button1 BtnText="JOIN"/>
            </div>
            <div className='con-detail'>
                <div className='con-mainHeading'>ADVANCED</div>
                <Button1 BtnText="ENTER"/>
            </div>
            <div className='con-detail'>
                <div className='con-mainHeading'>GALLERY</div>
                <Button1 BtnText="VIEW"/>
            </div>
            <LowerNavbar/>
        </div>
        <img class="more-image2 more-img" src={process.env.PUBLIC_URL + '/Martian pic5.png'} alt="logo" />
        <img class="more-image3 more-img" src={process.env.PUBLIC_URL + '/Martian pic6.png'} alt="logo" />
    </div>
  )
}
