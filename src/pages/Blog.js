import React from "react";
import { Button1 } from "./Buttons";
import { UpperNavbar, LowerNavbar } from "./Navbar";

export default function Blog() {
  return (
    <div
      className="blog"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/MartianBlogpagepic1.png')`,
      }}
    >
      <UpperNavbar />
      <br />
      <br />
      <br />
      <br />
      <div className="blog-mainDiv">
        <div className="page-mainHeading">BLOGS</div>
        <div className="page-mainHeading-details">
          Know what's happening around in Mars.Get all the latest news and
          views.
        </div>
      </div>
      <div className="con con1">
        <div className="con1-img">
          <img
            class="blog-image1 blog-img"
            src={process.env.PUBLIC_URL + "/Martian Blog page pic 2.png"}
            alt="logo"
          />
        </div>
        <div className="con-detail">
          <div className="con-heading">How to create life on Mars?!</div>
          <div className="con-innerdetail">
            The red planet is the new destination for human kind. A new chapter
            in human history begins.
          </div>
          <div className="con-btn">
            <Button1 BtnText="READ MORE" />
          </div>
        </div>
      </div>
      <div className="horizontal-flex">
        <div className="con con2">
          <div className="con2-img">
            <img
              class="blog-image2 blog-img"
              src={process.env.PUBLIC_URL + "/Martian Blog page pic 3.png"}
              alt="logo"
            />
          </div>
          <div className="con-detail">
            <div className="con-heading">Living on Mars</div>
            <div className="con-btn">
              <Button1 BtnText="READ MORE" />
            </div>
          </div>
        </div>
        <div className="con con3">
          <div className="con3-img">
            <img
              class="blog-image3 blog-img"
              src={process.env.PUBLIC_URL + "/Martian Blog page pic 4.png"}
              alt="logo"
            />
          </div>
          <div className="con-detail">
            <div className="con-heading">How to Use Mars Rovers!</div>
            <div className="con-btn">
              <Button1 BtnText="READ MORE" />
            </div>
          </div>
        </div>
        <div className="con con4">
          <div className="con4-img">
            <img
              class="blog-image4 blog-img"
              src={process.env.PUBLIC_URL + "/Martian Blog page pic 5.png"}
              alt="logo"
            />
          </div>
          <div className="con-detail">
            <div className="con-heading">
              Mars Crafts: The cradle of New Civilization
            </div>
            <div className="con-btn">
              <Button1 BtnText="READ MORE" />
            </div>
          </div>
        </div>
      </div>
      <div className="con5 con1">
        <div className="con5-img">
          <img
            class="blog-image5 blog-img"
            src={process.env.PUBLIC_URL + "/Martian Blog page pic 6.png"}
            alt="logo"
          />
        </div>
        <div className="con-detail">
          <div className="con-heading con5-heading">EXPLORE MORE BLOGS</div>
          <div className="con-btn">
            <Button1 BtnText="EXPLORE" />
          </div>
        </div>
      </div>
      <div className="search-field">
        <label className="search-field1" htmlFor="blog-search">
          Search Blogs!
        </label>
        <div>
          <input className="blog-search" />
        </div>
      </div>
      <LowerNavbar />
    </div>
  );
}
