import "../css/Home.css";
import React from "react";
import NavigationMenu from "../components/NavigationMenu.js";
import { Parallax, div } from "@react-spring/parallax";

function HomePage() {
  return (
    <div>
      <div id="topofpage"></div>
      <NavigationMenu />
      <div className="gridLayerAll">
        <div className="gridLayerFirst">
          <svg viewBox="0 0 500 500" className="textoverlay">
            <path id="curve" d="M 0 70 Q 130 50 260 73" />
            <text width="500">
              <textPath href="#curve" style={{ letterSpacing: "4px" }}>
                Riley & Alexis
              </textPath>
            </text>
          </svg>
          <svg viewBox="0 0 500 500" className="textoverlaymobile">
            <path id="curve2" d="M 0 70 Q 150 40 300 70" />
            <text width="750">
              <textPath href="#curve2" style={{ letterSpacing: "3px" }}>
                Riley & Alexis
              </textPath>
            </text>
          </svg>
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
        </div>

        <div className="gridLayer3">
          <img
            src={`${process.env.PUBLIC_URL}/images/46400.jpeg`}
            alt=""
            className="stgimg1"
          ></img>
          <div className="stgtext1">
            <h2>Stockholm, Sweden</h2>
            <p>
              Riley spent months planning the perfect proposal. When he heard we
              were going to Sweden for our friends' wedding, he knew it had to
              be on that trip. We both love traveling and it was the perfect
              time to propose as we will share many more adventures together. We
              set off on our Scandinavian adventure, feeling nervous and almost
              ruining the surprise multiple times Riley asked me to marry him on
              March 12, 2024. Despite taking on a british accent and insisting I
              was "gobsmacked" multiple times, I did eventually say yes!
            </p>
          </div>
        </div>

        <div className="gridLayer4">
          <img
            src={`${process.env.PUBLIC_URL}/images/NOR2242-HDR.jpg`}
            alt=""
            className="stgimg2"
          ></img>
          <div className="stgtext2">
            <h2>Saint Louis, Missouri</h2>
            <p>
              Riley and I met briefly in the dorm halls of Saint Louis
              University our freshman year as we were both consoling a sad peer.
              Multiple years later, we reunited at a party our good friend Greg
              was throwing! Riley offered to walk my friends and me back to our
              apartment as a gentleman does. On the way, I pointed out pepper
              plants on campus and stated my curiosity of how they taste. Riley
              immediately went out and grabbed two peppers for us to try. That
              moment really made me intrigued and impressed by how fun and
              fearless he is. We were friends for our whole junior year
              (although they had crushes on each other) until Riley asked me out
              in May 2017. 8 years later and here we are!
            </p>
          </div>
        </div>

        <div className="gridLayer5">
          <img
            src={`${process.env.PUBLIC_URL}/images/NOR2594.jpg`}
            alt=""
            className="stgimg3"
          ></img>
          <div className="stgtext3">
            <h2>Ceremony followed by dinner and dancing!</h2>
            <p>
              The ceremony will take place where we met, Saint Louis University
              in their church Saint Francis Xavier at 3:00 pm on June 14, 2025.
              Please arrive 30 minutes early. You are welcome to valet your car
              for free at Union Station Hotel and ride our shuttle to the
              ceremony starting at 2:00 pm then retrieve your car after the
              reception. Dinner and dancing to follow at Union Station Hotel!
              The cocktail hour starts at 6:00 PM with the reception to start at
              7:00 PM. Bring your dancing shoes as you know we will be dancing
              all night!
            </p>
          </div>
        </div>

        <div className="gridLayerRows">
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
          <div className="QContainer7">
            <img
              src={`${process.env.PUBLIC_URL}/images/martini.png`}
              alt=""
              className="qImg2"
            ></img>
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
          <div className="QContainer6">
            <img
              src={`${process.env.PUBLIC_URL}/images/church.png`}
              alt=""
              className="qImg1"
            ></img>
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
          <div className="QContainer8">
            <img
              src={`${process.env.PUBLIC_URL}/images/SVG_CHANGEABLE_COLOR.svg`}
              alt=""
              className="qImg3"
            ></img>
          </div>
        </div>
        <div className="gridLayerRows2">
          <h1 className="goodbyetxt">We love you all, and cannot wait!</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/NOR2101-HDR(1).jpg`}
            alt=""
            className="goodbyeimg"
          ></img>
          <img
            src={`${process.env.PUBLIC_URL}/images/NOR2101-HDR(1)mobile.JPG`}
            alt=""
            className="goodbyeimgmobile"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
