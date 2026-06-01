import { MapContainer, TileLayer, Circle } from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function MapComponent() {

  return (

    <MapContainer
      center={[26.9124, 75.7873]}
      zoom={12}
      style={{
        height: "400px",
        width: "100%",
        marginTop: "20px"
      }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Circle
        center={[26.9124, 75.7873]}
        radius={1000}
        pathOptions={{ color: "red" }}
      />

    </MapContainer>

  );
}
