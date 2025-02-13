import "../css/Home.css";
import React from "react";
import NavigationMenu from "../components/NavigationMenu";
import "../css/Ttd.css";
import MapComponent from "../components/Map";

function TtdPage() {
  return (
    <div className="faqs">
      <NavigationMenu />
      <h1>Click any of the following links for more information</h1>
      <h1>Things to do!</h1>
      <a href="https://www.stlouisaquarium.com/" target="_blank">
        <h2 className="link">St. Louis Aquarium</h2>
      </a>
      <a href="https://www.thestlouiswheel.com/" target="_blank">
        <h2 className="link">
          Union Station Ferris Wheel, Mini Golf, Ropes Course, and more!
        </h2>
      </a>
      <a href="https://www.schlafly.com/brewery-tours" target="_blank">
        <h2 className="link">Schlafly Brewery Tour </h2>
      </a>
      <a href="https://www.budweisertours.com/stltours" target="_blank">
        <h2 className="link">Budweiser Brewery Tour</h2>
      </a>
      <a href="https://www.gatewayarch.com/" target="_blank">
        <h2 className="link">Gateway Arch Tour</h2>
      </a>
      <a href="https://topgolf.com/us/st-louis-midtown/" target="_blank">
        <h2 className="link">TopGolf</h2>
      </a>

      <h1>Places to eat or drink!</h1>
      <a
        href="https://www.stlouisunionstation.com/station-grille"
        target="_blank"
      >
        <h2 className="link">Union Station Hotel Station Grille</h2>
      </a>
      <a href="https://www.trainshed-stl.com/" target="_blank">
        <h2 className="link">Train Shed</h2>
      </a>
      <a href="https://www.sodafountain-stl.com/" target="_blank">
        <h2 className="link">Soda Fountain</h2>
      </a>
      <a href="https://www.stlouisunionstation.com/1894-cafe" target="_blank">
        <h2 className="link">1894 Cafe</h2>
      </a>
      <a href="https://www.stlouisunionstation.com/landrys" target="_blank">
        <h2 className="link">Landry's Seafood House</h2>
      </a>
      <a href="https://maggieobriens.com/downtown/" target="_blank">
        <h2 className="link">Maggie O'Briens Irish Pub</h2>
      </a>
      <a href="https://www.thepitch-stl.com/" target="_blank">
        <h2 className="link">The Pitch</h2>
      </a>
      <a href="https://www.schlafly.com/tap-room" target="_blank">
        <h2 className="link">Schlafly Brewery Tap Room</h2>
      </a>
    </div>
  );
}

export default TtdPage;
