import "../css/Home.css";
import React, { useRef } from "react";
import NavigationMenu from "../components/NavigationMenu";
import "../css/Faq.css";

function FaqPage() {
  return (
    <div className="App">
      <NavigationMenu />
      <div className="faqs">
        <h1>Is there a dress code?</h1>
        <p>
          Black tie optional. For women, mid to full length dresses, and for
          men, tuxes or suit and tie.
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
          There will be a shuttle from Union Station to St.Xavier Francis Church
          for anyone to use! <br></br>For those who are driving there will be
          space in the SLU parking garage on Laclede.<br></br> Laclede Parking
          Garage, Laclede Ave, St. Louis, MO 63108
        </p>
      </div>
    </div>
  );
}

export default FaqPage;
