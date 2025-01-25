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
          <Member
            name="Matt Gall"
            description="Best Man"
            imageSrc={`${process.env.PUBLIC_URL}/images/NOR2242-HDR.jpg`}
          />
          <Member
            name="Kyle Neuville"
            description="Brother of the Groom"
            imageSrc={`${process.env.PUBLIC_URL}/images/Kyle.jpeg`}
          />
          <Member
            name="Connor Neuville"
            description="Brother of the Groom"
            imageSrc={`${process.env.PUBLIC_URL}/images/Connor.jpeg`}
          />
          <Member
            name="Ryan Neuville"
            description="Brother of the Groom"
            imageSrc={`${process.env.PUBLIC_URL}/images/Ryan.jpeg`}
          />
          <Member
            name="Joe Craven"
            description="Groomsmen"
            imageSrc={`${process.env.PUBLIC_URL}/images/NOR2242-HDR.jpg`}
          />
          <Member
            name="Greg Farnsworth"
            description="Groomsmen"
            imageSrc={`${process.env.PUBLIC_URL}/images/NOR2242-HDR.jpg`}
          />
          <Member
            name="Bryan Hoyt"
            description="Groomsmen"
            imageSrc={`${process.env.PUBLIC_URL}/images/NOR2242-HDR.jpg`}
          />
        </div>
        <div className="partyW">
          <Member
            name="Alexandra Rares"
            description="Maid of honor"
            imageSrc={`${process.env.PUBLIC_URL}/images/Alexandra.jpeg`}
          />
          <Member
            name="Brittney Hearn"
            description="Sister of the Bride"
            imageSrc={`${process.env.PUBLIC_URL}/images/Britt.jpeg`}
          />
          <Member
            name="Jennifer Dengel"
            description="Sister of the Bride"
            imageSrc={`${process.env.PUBLIC_URL}/images/Jen.jpeg`}
          />
          <Member
            name="Kelly Burke"
            description="Sister of the Bride"
            imageSrc={`${process.env.PUBLIC_URL}/images/Kelly.jpeg`}
          />
          <Member
            name="Dani Gall"
            description="Bridesmaid"
            imageSrc={`${process.env.PUBLIC_URL}/images/Dani.jpeg`}
          />
          <Member
            name="Kayla Gregory"
            description="Bridesmaid"
            imageSrc={`${process.env.PUBLIC_URL}/images/Kayla.jpeg`}
          />
          <Member
            name="Nicole Bernardi"
            description="Bridesmaid"
            imageSrc={`${process.env.PUBLIC_URL}/images/Nicole.jpeg`}
          />
        </div>
      </div>
    </div>
  );
}

export default PartyPage;
