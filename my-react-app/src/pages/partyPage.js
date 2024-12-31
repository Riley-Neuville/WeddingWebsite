import "../Home.css";
import React from "react";
import NavigationMenu from "../components/NavigationMenu.js";
import Member from "../components/Member.js";
import "../Member.css";

function PartyPage() {
  return (
    <div>
      <NavigationMenu />
      <div className="partyGrid">
        <div className="partyM">
          <Member name="Matt Gall" description="Best Man" />
          <Member name="Kyle Neuville" description="Brother of the Groom" />
          <Member name="Connor Neuville" description="Brother of the Groom" />
          <Member name="Ryan Neuville" description="Brother of the Groom" />
          <Member name="Joe Craven" description="Groomsmen" />
          <Member name="Greg Farnsworth" description="Groomsmen" />
          <Member name="Bryan Hoyt" description="Groomsmen" />
        </div>
        <div className="partyW">
          <Member name="Alexandra Rares" description="Maid of honor" />
          <Member name="Brittney Hearn" description="Sister of the Bride" />
          <Member name="Jennifer Dengel" description="Sister of the Bride" />
          <Member name="Kelly Burke" description="Sister of the Bride" />
          <Member name="Dani Gall" description="Bridesmaid" />
          <Member name="Kayla Gregory" description="Bridesmaid" />
          <Member name="Nicole Bernardi" description="Bridesmaid" />
        </div>
      </div>
    </div>
  );
}

export default PartyPage;
