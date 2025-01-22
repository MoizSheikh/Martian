import React from "react";
import { Button1 } from "./Buttons";
import { LowerNavbar, UpperNavbar } from "./Navbar";

export default function AboutUs() {
  return (
    <div className="about shop">
      <UpperNavbar />
      <img
        class="about-image1"
        src={process.env.PUBLIC_URL + "/Martian_About_Page_image_4.png"}
        alt="logo"
      />
      <div className="mainHeading-div">
        <h1 className="page-mainHeading">ABOUT US</h1>
      </div>
      <div className="martian-detail">
        <div>
          Martian is a game where you become the part of the virtual human
          colonization of Mars in the near future with other players. In this
          game an entire martian economy is build through colonies or sectors
          that are created or inhabited. The game is all about exploring Mars
          and creating a new civilization on planet. In this game you an buy,
          ouw and sell virtual assests on Mars with the help of 'blockchain'
          based real ownership.
        </div>
        <Button1 className="detail-btn" BtnText="LEARN MORE" />
      </div>
      <div className="martian-detail-1 div">
        <div className="creators detail1-con div">
          <img
            class="about-image2 about-img"
            src={process.env.PUBLIC_URL + "/Martians About Page image 1.png"}
            alt="logo"
          />
          <Button1 className="creator-btn" BtnText="CREATORS" />
        </div>
        <div className="game detail1-con div">
          <img
            class="about-image3 about-img"
            src={process.env.PUBLIC_URL + "/Martians About Page image 2.png"}
            alt="logo"
          />
          <Button1 className="game-btn" BtnText="THE GAME" />
        </div>
        <div className="credit detail1-con div">
          <img
            class="about-image4 about-img"
            src={process.env.PUBLIC_URL + "/Martians About Page image 3.png"}
            alt="logo"
          />
          <Button1 className="credit-btn" BtnText="CREDITS" />
        </div>
      </div>
      <div className="martian-detail-2">
        <div className="story detail2-con">
          <img
            class="about-image5 about-img1"
            src={process.env.PUBLIC_URL + "/Martians About Page image 5.png"}
            alt="logo"
          />
          <Button1 className="story-btn" BtnText="OUR STORY" />
        </div>
        <div className="white-paper detail2-con">
          <img
            class="about-image6 about-img1"
            src={process.env.PUBLIC_URL + "/Martians About Page image 6.png"}
            alt="logo"
          />
          <Button1 className="story-btn" BtnText="WHITE PAPER" />
        </div>
      </div>
      <LowerNavbar />
    </div>
  );
}
