import React,{useState} from 'react';
import {UpperNavbar, LowerNavbar} from './Navbar';
// import HomepageVideo from '../../public/Homepage_video.mp4';
const Homepage = (props) => {
    const Style = {textAlign: "right"};
    return (
        <div className='homepage'>
            <UpperNavbar/>
            <div className="con con1">
                <div className="headingPortion">
                    <div className="mainHeading FontFamily">
                        WELCOME TO MARTIANS
                    </div>
                    <div className="subHeading">
                        Explore, Create and Build Civilization on Virtual Mars
                    </div>
                </div>
                <button className="headingButton FontFamily">
                    <div className='greenbtn'>START</div>
                    <div className='inner-part'>COLONIZING</div>
                </button>
            </div>
            <video class="home-image1" loop muted autoPlay controls = ''>
                <source src="/Homepage_video.mp4" type="video/mp4"/>
            </video>
            <div className='MarsCon'>
                <div className="con con2">
                    <div className="headingPortion">
                        <div className="mainHeading FontFamily">
                            EXPLORE THE PLANET
                        </div>
                        <div className="subHeading">
                            Explore the surface and find habitable zones.
                            <div>Search for resources. Find & use energy</div>
                        </div>
                    </div>
                    <div className='toTheRight'>
                        <button className="headingButtonCon2 greenbtn FontFamily">
                            EXPLORE MARS
                        </button>
                        <div className="headingPortionCon2 headingPortion">
                            <div className="mainHeading FontFamily">
                                CREATE YOUR OWN ECOSYSTEM
                            </div>
                            <div className="subHeading" style={Style}>
                                Build resource buildings, Create your own ecosystems, 
                                <div>Develop colonies on Mars</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img class="home-image2" src={process.env.PUBLIC_URL + '/Martian pic2.png'} alt="logo" />
                <div className="con con3">
                    <div className="flexStraight headingPortionCon3">
                        <button className="headingButton headingButtonCon3 FontFamily">
                            ENTER SHOP
                        </button>
                        <div className="headingPortion headingPortionCon3-1">
                            <div className="mainHeading FontFamily">
                                OWN ASSETS
                            </div>
                            <div className="subHeading">
                                Own digital assets, Buy and sell assets on the shop. Virtually trade properties and assets.
                            </div>
                        </div>
                    </div>
                    <div className="flexStraight">
                        <div className="headingPortion">
                            <div className="mainHeading FontFamily">
                                Token & <div>Trades</div>
                            </div>
                            <div className="subHeading subHeadingCon3">
                                Buy NFT Mars Currency (MVE) with cryptocurrency. Develop NFTs and Assets and Trades.
                            </div>
                        </div>
                        <button className="headingButton headingButtonCon3 FontFamily">
                            START
                        </button>
                    </div>
                </div>
                <img class="home-image3" src={process.env.PUBLIC_URL + '/Martian pic3.png'} alt="logo" />
                <img class="home-image4" src={process.env.PUBLIC_URL + '/mars-planet.png'} alt="logo" />
            </div>
            <div className="con con4">
                <div className="headingPortion headingPortionCon4">
                    <div className="mainHeading mainHeadingCon4 FontFamily">
                        <span>BUILD</span><span> CIVILIZATION</span><span> ON</span><span> MARS</span>
                    </div>
                </div>
                <button className="headingButton headingButtonCon4 FontFamily">
                    LEARN MORE
                </button>
            </div>
            <img class="home-image5" src={process.env.PUBLIC_URL + '/Martian pic4.png'} alt="logo" />
            <div className='MarsCon1'>
                <div className='con5'>
                    <div className='bannerHeading'>
                        ABOUT 
                        <div>MARTIANS</div>
                    </div>
                    <button className="bannerHeadingButton">
                        LEARN MORE
                    </button>
                </div>
                <img class="home-image6 con5-img" src={process.env.PUBLIC_URL + '/Martian_image1.png'} alt="logo" />
                <img class="home-image7 con5-img" src={process.env.PUBLIC_URL + '/Martian_image2.png'} alt="logo" />
                <img class="home-image8 con5-img" src={process.env.PUBLIC_URL + '/Martian_image3.png'} alt="logo" />
                <div className='lower-con'>
                    <div className='con6 event-con'>
                        <img class="home-image9 con-img" src={process.env.PUBLIC_URL + '/Martian pic6.png'} alt="logo" />
                        <div className='ConHeading'>
                            EVENT
                        </div>
                        <button className="ConButton">
                            Join
                        </button>
                    </div>
                    <div className='con7 event-con'>
                        <img class="home-image10 con-img" src={process.env.PUBLIC_URL + '/Martian8.png'} alt="logo" />
                        <div className='ConHeading'>
                            EVENT
                        </div>
                        <button className="ConButton">
                            Join
                        </button>
                    </div>
                    <div className='con8 event-con'>
                        <img class="home-image11 con-img" src={process.env.PUBLIC_URL + '/Martian pic7.png'} alt="logo" />
                        <div className='ConHeading'>
                            EVENT
                        </div>
                        <button className="ConButton">
                            Join
                        </button>
                    </div>
                </div>
            </div>
            <LowerNavbar/>
        </div>
    );
}

export default Homepage;
