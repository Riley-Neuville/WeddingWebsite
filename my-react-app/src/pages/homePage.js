import "../Home.css";
import React from "react";
import Navbar from "../components/Navbar.js";
import NavigationMenu from "../components/NavigationMenu.js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HomePage() {
  return (
    <div>
      <div id="topofpage"></div>
      <NavigationMenu />
      <Parallax pages={6} style={{ top: "0", left: "0" }}>
        <ParallaxLayer className="gridLayerFirst" offset={0} speed={0.05}>
          <img
            src={`${process.env.PUBLIC_URL}/images/WDBackground.jpg`}
            alt=""
            className="bgImage"
          ></img>
        </ParallaxLayer>

        <ParallaxLayer className="gridLayer" offset={0} speed={0.5}>
          <div className="imgholder1">
            <svg viewBox="0 0 500 500" className="textoverlay">
              <path id="curve" d="M 0 70 Q 130 50 260 73" />
              <text width="500">
                <textPath href="#curve" style={{ letterSpacing: "4px" }}>
                  Riley & Alexis
                </textPath>
              </text>
            </svg>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="gridLayer" offset={1.3} speed={0.4}>
          <h1>June 14th 2025</h1>
          <button
            onclick="location.href='https://withjoy.com/alexis-and-riley-jun-25/rsvp'"
            type="button"
          >
            RSVP Here!
          </button>

          <img
            src={`${process.env.PUBLIC_URL}/images/46400.jpeg`}
            alt=""
            className="stgimg1"
          ></img>
          <div className="stgtext1">
            <h1>March 12th 2024</h1>
            <h2>Stockholm, Sweden</h2>
            <p>
              After almost ruining the surprise for multiple days Riley asked
              Alexis to marry him. Despite taking on a british accent and
              insisting she was "gobsmacked" multiple times, she did eventually
              say yes!
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="gridLayer" offset={2.2} speed={1}>
          <img
            src={`${process.env.PUBLIC_URL}/images/NOR2242-HDR.jpg`}
            alt=""
            className="stgimg2"
          ></img>
          <div className="stgtext2">
            <h1>June 14th 2025</h1>
            <h2>Saint Louis Missouri</h2>
            <p>
              We are beyond excited to celebrate this wedding with everyone at
              Saint Xavier College Church and the Grand Hall at Union Station.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="gridLayerRows" offset={3.2} speed={0.5}>
          <div className="QContainer1">
            <h1>The Date</h1>
            <h2>June 14th 2025</h2>
            <p>3PM CST</p>
          </div>

          <div className="QContainer2">
            <h1>The Ceremony</h1>
            <h2>Saint Francis Xavier College Church</h2>
            <p>3628 Lindell Blvd, St. Louis, MO 63108</p>
            <a
              href="https://www.google.com/maps/place/Saint+Francis+Xavier+College+Church,+St.+Louis,+MO+63108/@38.6370557,-90.2360898,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8b4a4aa1ee079:0x7a22a35782f66212!8m2!3d38.6370515!4d-90.2335149!16s%2Fg%2F1ptwbx3_q?entry=ttu"
              target="_blank"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/mapIcon.png`}
                className="maplink"
              ></img>
            </a>
          </div>

          <div className="QContainer3">
            <h1>The Reception</h1>
            <h2>The Grand Hall at Union Station</h2>
            <p>1820 Market St, St. Louis, MO 63103</p>
            <a
              href="https://www.google.com/maps/place/Grand+Hall+at+Union+Station/@38.6294104,-90.2084402,18.93z/data=!3m1!5s0x87d8b36b9f28aa79:0xd251b0676f2e4833!4m14!1m7!3m6!1s0x87d8b36ba6555555:0x7f664e16ad8e38b6!2sGrand+Hall+at+Union+Station!8m2!3d38.6289913!4d-90.2077475!16s%2Fg%2F11f63xl3rs!3m5!1s0x87d8b36ba6555555:0x7f664e16ad8e38b6!8m2!3d38.6289913!4d-90.2077475!16s%2Fg%2F11f63xl3rs?entry=ttu"
              target="_blank"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/mapIcon.png`}
                className="maplink"
              ></img>
            </a>
          </div>

          <div className="QContainer4">
            <h1>Lodging</h1>

            <a
              href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=STLCUQQ&arrivalDate=2025-06-13&departureDate=2025-06-15&groupCode=SNW25&room1NumAdults=1"
              target="_blank"
            >
              Union Station Hotel
            </a>
            <a>Google Maps link</a>
            <a href="">Drury Inn</a>
            <img
              src={`${process.env.PUBLIC_URL}/images/mapIcon.png`}
              className="maplink"
            ></img>
          </div>

          <div className="QContainer5">
            <h1>Registry</h1>
            <p>
              Your presence is the greatest gift of all, but if you'd like to
              contribute in another way, we'd be grateful for any items off our
              registry!
            </p>
            <a
              href="https://withjoy.com/alexis-and-riley-jun-25/registry"
              target="_blank"
            >
              Click Here
            </a>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
