import React from "react";
import { Button1, Button2 } from "./Buttons";
import { LowerNavbar, UpperNavbar } from "./Navbar";

export default function Event() {
  return (
    <div
      className="event"
      style={{
        background: `url('${process.env.PUBLIC_URL}/MartiansEventPageImage1.png')`,
      }}
    >
      <UpperNavbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="page-maindiv">
        <div className="mainHeading-div">
          <h1 className="Eventpage-mainHeading">MARTIAN EVENTS</h1>
        </div>
        <div className="page-detail">
          Find out more about various events on Martians.
          <div>
            Events provide more opportunities to players to get more from
            game.Get ready for some exciting events throughout the year.
          </div>
        </div>
        <div className="Find event-div">
          <img
            class="event-image1 event-img"
            src={process.env.PUBLIC_URL + "/Martians Event Page image 3.png"}
            alt="logo"
          />
          <div className="Find-div event-innerdiv">
            NEW EVENTS
            <div className="find-detail">
              Fint out about the new events on Martian.
            </div>
            <Button1 BtnText="FIND OUT" />
          </div>
        </div>
        <div className="calender event-div">
          <img
            class="event-image2 event-img"
            src={process.env.PUBLIC_URL + "/Martians Event Page image 2.png"}
            alt="logo"
          />
          <div className="calender-div event-innerdiv">
            EVENT CALENDER
            <div className="calender-detail">
              Know more about past and present events.
            </div>
            <Button1 BtnText="EXPLORE" />
          </div>
        </div>
        <div className="More event-div">
          <img
            class="event-image3 event-img"
            src={process.env.PUBLIC_URL + "/Martians Event Page image 4.png"}
            alt="logo"
          />
          <div className="More-div event-innerdiv">
            MORE EVENTS
            <div className="More-detail">More Events to explore.</div>
            <Button1 BtnText="EXPLORE" />
          </div>
        </div>
      </div>
      <br />
      <div className="btn-div">
        <div className="btn1">
          <Button1 BtnText="OFFERS" />
        </div>
        <div className="btn2">
          <Button1 BtnText="WINNERS" />
        </div>
        <div className="btn3">
          <Button1 BtnText="EVENT PASS" />
        </div>
        <div className="btn4">
          <Button1 BtnText="MORE" />
        </div>
      </div>
      <br />
      <LowerNavbar />
      <br />
    </div>
  );
}
