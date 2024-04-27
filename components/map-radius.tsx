"use client"

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility"
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet"

export default function MapRadius() {
  const defaultPosition = {
    lat: -7.642208750762692,
    lng: 111.53828322887422,
  }

  const defaultCenter: [number, number] = [-7.638588524524824, 111.54093325138093]
  const apelmanis: [number, number] = [defaultPosition.lat, defaultPosition.lng]
  const unipma: [number, number] = [-7.636737702657447, 111.54223680496217]

  const limeOptions = { color: "blue" }
  const polyline = [
    [-7.642208750762692, 111.53828322887422],
    [-7.636737702657447, 111.54223680496217],
  ]

  return (
    <MapContainer center={defaultCenter} zoom={16} scrollWheelZoom={false} style={{ height: "80vh", width: "100%" }} className="rounded-lg">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline pathOptions={limeOptions} positions={polyline} />
      <Marker position={apelmanis}>
        <Popup>Kost Putra Madiun.</Popup>
      </Marker>
      <Marker position={unipma}>
        <Popup>Universitas PGRI Madiun.</Popup>
      </Marker>
    </MapContainer>
  )
}
