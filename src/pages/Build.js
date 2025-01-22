import React from "react";
import { Button1 } from "./Buttons";
import { LowerNavbar, UpperNavbar } from "./Navbar";

export default function Build() {
  return (
    <div
      className="build"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/MariansBuildPag1.png')`,
      }}
    >
      <UpperNavbar />
      <br />
      <br />
      <br />
      <br />
      <div className="build-mainDiv">
        <div className="page-mainHeading">BUILD ON MARS</div>
        <div className="page-mainHeading-details">
          Create and Upgrade buildings. Build utility buildings and power your
          Land. Develop your land and contribute to the growth of the Sector.
        </div>
      </div>
      <div className="con con1">
        <div className="con1-img">
          <img
            class="build-image1 build-img"
            src={process.env.PUBLIC_URL + "/Marians Build Page 2.png"}
            alt="logo"
          />
        </div>
        <div className="con-detail">
          <div className="con-heading">UTILITY BUILDINGS</div>
          <div className="con-innerdetail">
            Utility Buildings produce Energy.They produce Water, Oxygen,
            Electricity, Food Sources and Fuel.
          </div>
          <div className="con-btn">
            <Button1 BtnText="BUILD" />
          </div>
        </div>
      </div>
      <div className="con con2">
        <div className="con2-img">
          <img
            class="build-image2 build-img"
            src={process.env.PUBLIC_URL + "/Marians Build Page 3.png"}
            alt="logo"
          />
        </div>
        <div className="con-detail">
          <div className="con-heading">RESIDENTIAL BUILDINGS</div>
          <div className="con-innerdetail">
            These are buildings for Living, Education, Word, Recreation,
            marketing and other activities of daily human lives.
          </div>
          <div className="con-btn">
            <Button1 BtnText="BUILD" />
          </div>
        </div>
      </div>
      <div className="con con3">
        <div className="con3-img">
          <img
            class="build-image3 build-img"
            src={process.env.PUBLIC_URL + "/Marians Build Page 4.png"}
            alt="logo"
          />
        </div>
        <div className="con-detail con3-detail">
          <div className="con-heading">SUPPORT BUILDINGS</div>
          <div className="con-innerdetail">
            Buildings that support and sustain life on planet Mars. These
            includes Hospitals, R & D centers, Waste treatment plants and
            Transport.
          </div>
          <div className="con-btn">
            <Button1 BtnText="BUILD" />
          </div>
        </div>
      </div>
      <div className="search-field">
        <label className="search-field1" htmlFor="build-search">
          SEARCH BUILDINGS
        </label>
        <div>
          <input className="build-search" />
        </div>
      </div>
      <LowerNavbar />
    </div>
  );
}
