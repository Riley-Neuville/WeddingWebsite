import "../Home.css";
import React from "react";
import NavigationMenu from "../components/NavigationMenu.js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HomePage() {
  return (
    <div>
      <div id="topofpage"></div>
      <NavigationMenu />
      <Parallax
        pages={window.innerWidth < 768 ? 6 : 6.5}
        style={{ top: "0", left: "0" }}
      >
        <ParallaxLayer className="gridLayerFirst" offset={0} speed={0.05}>
          <img
            src={`${process.env.PUBLIC_URL}/images/WDBackground.jpg`}
            alt=""
            className="bgImage"
          ></img>
          <img
            src={`${process.env.PUBLIC_URL}/images/WDBackgroundMobile.jpg`}
            alt=""
            className="bgImageMobile"
          ></img>
          <h1 className="datetext">Please Join Us June 14th 2025!</h1>
          <a
            href="https://withjoy.com/alexis-and-riley-jun-25/rsvp"
            target="_blank"
            className="rsvp-button"
          >
            <span className="rsvptext">RSVP Here!</span>
          </a>
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

        <ParallaxLayer
          className="gridLayer"
          offset={window.innerWidth < 768 ? 1 : 1.5}
          speed={0.35}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/46400.jpeg`}
            alt=""
            className="stgimg1"
          ></img>
          <div className="stgtext1">
            <h2>Stockholm, Sweden</h2>
            <p>
              After almost ruining the surprise for multiple days Riley asked
              Alexis to marry him. Despite taking on a british accent and
              insisting she was "gobsmacked" multiple times, she did eventually
              say yes!
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="gridLayer"
          offset={window.innerWidth < 768 ? 1.9999 : 2}
          speed={0.9}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/NOR2242-HDR.jpg`}
            alt=""
            className="stgimg2"
          ></img>
          <div className="stgtext2">
            <h2>Saint Louis, Missouri</h2>
            <p>
              We are beyond excited to celebrate this wedding with everyone at
              Saint Xavier College Church and the Grand Hall at Union Station.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="gridLayerRows"
          offset={window.innerWidth < 768 ? 2.6 : 3}
          speed={0.5}
        >
          <div className="QContainer2">
            <h1>The Ceremony</h1>
            <a
              className="qlink"
              href="https://www.google.com/maps/place/Saint+Francis+Xavier+College+Church,+St.+Louis,+MO+63108/@38.6370557,-90.2360898,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8b4a4aa1ee079:0x7a22a35782f66212!8m2!3d38.6370515!4d-90.2335149!16s%2Fg%2F1ptwbx3_q?entry=ttu"
              target="_blank"
            >
              <h2>Saint Francis Xavier College Church</h2>
            </a>
            <a
              className="qlink"
              href="https://www.google.com/maps/place/Saint+Francis+Xavier+College+Church,+St.+Louis,+MO+63108/@38.6370557,-90.2360898,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8b4a4aa1ee079:0x7a22a35782f66212!8m2!3d38.6370515!4d-90.2335149!16s%2Fg%2F1ptwbx3_q?entry=ttu"
              target="_blank"
            >
              <p>3628 Lindell Blvd, St. Louis, MO 63108</p>
            </a>

            <p>June 14th 3PM CST</p>
          </div>

          <div className="QContainer3">
            <h1>The Reception</h1>
            <a
              className="qlink"
              href="https://www.google.com/maps/place/Grand+Hall+at+Union+Station/@38.6294104,-90.2084402,18.93z/data=!3m1!5s0x87d8b36b9f28aa79:0xd251b0676f2e4833!4m14!1m7!3m6!1s0x87d8b36ba6555555:0x7f664e16ad8e38b6!2sGrand+Hall+at+Union+Station!8m2!3d38.6289913!4d-90.2077475!16s%2Fg%2F11f63xl3rs!3m5!1s0x87d8b36ba6555555:0x7f664e16ad8e38b6!8m2!3d38.6289913!4d-90.2077475!16s%2Fg%2F11f63xl3rs?entry=ttu"
              target="_blank"
            >
              <h2>The Grand Hall at Union Station</h2>
            </a>
            <a
              className="qlink"
              href="https://www.google.com/maps/place/Grand+Hall+at+Union+Station/@38.6294104,-90.2084402,18.93z/data=!3m1!5s0x87d8b36b9f28aa79:0xd251b0676f2e4833!4m14!1m7!3m6!1s0x87d8b36ba6555555:0x7f664e16ad8e38b6!2sGrand+Hall+at+Union+Station!8m2!3d38.6289913!4d-90.2077475!16s%2Fg%2F11f63xl3rs!3m5!1s0x87d8b36ba6555555:0x7f664e16ad8e38b6!8m2!3d38.6289913!4d-90.2077475!16s%2Fg%2F11f63xl3rs?entry=ttu"
              target="_blank"
            >
              <p>1820 Market St, St. Louis, MO 63103</p>
            </a>
            <p>June 14th 5PM CST</p>
          </div>

          <div className="QContainer4">
            <h1>Farewell Brunch</h1>
            <a
              className="qlink"
              href="https://www.google.com/maps/place/29+Washington+Terrace,+St.+Louis,+MO+63112/@38.6524126,-90.2813946,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8b5352c40ae7b:0x9ef069aaf5b24c2d!8m2!3d38.6524084!4d-90.2788197!16s%2Fg%2F11sv047l37?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <h2>Mr. and Mrs.Short's Home</h2>
            </a>
            <a
              className="qlink"
              href="https://www.google.com/maps/place/29+Washington+Terrace,+St.+Louis,+MO+63112/@38.6524126,-90.2813946,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8b5352c40ae7b:0x9ef069aaf5b24c2d!8m2!3d38.6524084!4d-90.2788197!16s%2Fg%2F11sv047l37?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <p>29 Washington Terrace, St. Louis, MO 63103</p>
            </a>
            <p>June 15th 11AM CST</p>
          </div>

          <div className="QContainer5">
            <h1>Lodging</h1>

            <a
              className="qlink"
              href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=STLCUQQ&arrivalDate=2025-06-13&departureDate=2025-06-15&groupCode=SNW25&room1NumAdults=1"
              target="_blank"
            >
              <h2>Union Station Hotel</h2>
            </a>
            <a
              className="qlink"
              href="https://www.google.com/maps/place/St.+Louis+Union+Station+Hotel,+Curio+Collection+by+Hilton/@38.6287235,-90.210163,17z/data=!3m1!5s0x87d8b36b9f28aa79:0x61c45a2316a79ab4!4m9!3m8!1s0x87d8b31de5f5865d:0xa0a4a4e039774dd1!5m2!4m1!1i2!8m2!3d38.6287193!4d-90.2075881!16s%2Fg%2F1tf9nt4r?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <p>1820 Market St, St. Louis, MO 63103</p>
            </a>
            <a
              className="qlink"
              href="https://www.druryhotels.com/locations/st-louis-mo/drury-inn-and-suites-st-louis-union-station?utm_campaign=gmb&utm_medium=organic&utm_source=local2"
              target="_blank"
            >
              <h2>Alternative Option: Drury Inn</h2>
            </a>
            <a
              className="qlink"
              href="https://www.google.com/maps/place/Drury+Inn+St.+Louis+At+Union+Station/@38.6277926,-90.2125594,17z/data=!3m1!4b1!4m9!3m8!1s0x87d8b36960362803:0x8c7be5ef059058d1!5m2!4m1!1i2!8m2!3d38.6277884!4d-90.2099845!16s%2Fg%2F1tcvptjb?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <p>201 S 20th St, St. Louis, MO 63103</p>
            </a>
          </div>

          <div className="QContainer1">
            <h1>Welcome Drinks</h1>
            <h2>TBD</h2>
            <p>June 13th 8:30 CST</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="gridLayerRows"
          offset={window.innerWidth < 768 ? 4.9 : 5.3}
          speed={0.6}
        >
          <h1 className="goodbyetxt">We love you all, and cannot wait!</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/NOR2101-HDR(1).jpg`}
            alt=""
            className="goodbyeimg"
          ></img>
          <img
            src={`${process.env.PUBLIC_URL}/images/NOR2101-HDR(1)mobile.jpg`}
            alt=""
            className="goodbyeimgmobile"
          ></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
