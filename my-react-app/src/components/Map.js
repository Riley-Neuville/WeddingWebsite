import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const mapStyles = {
    height: "80vh",
    width: "100%",
  };

  // Set the center of the map
  const defaultCenter = {
    lat: 38.6275752,
    lng: -90.2090944,
  };

  // Example markers for bars and restaurants
  const locations = [
    { name: "The Gateway Arch", location: { lat: 38.6251, lng: -90.1868 } },
    { name: "The Gateway Arch2", location: { lat: 38.6251, lng: -90.1868 } },
    { name: "The Gateway Arch3", location: { lat: 38.6251, lng: -90.1868 } },
    { name: "The Gateway Arch4", location: { lat: 38.6251, lng: -90.1868 } },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyCoIqpP20UII6ERW6GKCkUK8rhAGVUIi_g">
      <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
        {locations.map((item, index) => (
          <Marker key={index} position={item.location} title={item.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
