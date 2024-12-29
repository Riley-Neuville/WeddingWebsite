import "../Home.css";
import React, { useRef } from "react";
import Navbar from "../components/Navbar.js";
import "../Faq.css";

function FaqPage() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid">
        <div className="faqs">
          <h1>Is There A Dress code?</h1>
          <p>
            Black tie optional. For women, floor length gowns, and for men,
            tuxes or suit and tie.
          </p>
          <h1>Are kids invited to the event?</h1>
          <p>While we adore all your children, this is an adults-only event.</p>

          <h1>I have a food allergy, can I make a special request?</h1>
          <p>
            Yes! Please note on your RSVP any allergies we need to be aware of.
          </p>

          <h1>What time should I arrive at the ceremony?</h1>
          <p>
            The ceremony starts at 3:00 pm. Please be there at least 15 minutes
            early to ensure you are on time.
          </p>

          <h1>Will there be transportation to the ceremony?</h1>
          <p>
            There will be a shuttle from Union Station to St.Xavier Francis
            Church for anyone to use! <br></br>For those who are driving there
            will be space in the SLU parking garage on Laclede.<br></br> Laclede
            Parking Garage, Laclede Ave, St. Louis, MO 63108
          </p>
        </div>
        <div className="ttds">
          <h1>Activities in or near the hotel</h1>
          <p>
            Aquarium<br></br>
            Schlafly brewery tour<br></br>
            Arch<br></br>
            Union station ferris wheel<br></br>
            mini golf<br></br> TopGolf
          </p>
          <h1>Restaurants in or near the hotel</h1>
          <p>
            Union station hotel restaurant<br></br>Train Shed<br></br>Soda
            Fountain<br></br>1894 Cafe<br></br>Landry's Seafood<br></br>McGurk's
            Irish Pub<br></br>The Pitch<br></br>Schafly Brewery
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
