"use client"

import "leaflet/dist/leaflet.css"
import { Fragment } from "react"
import L from "leaflet"
import { MapContainer, Marker, Popup, TileLayer, Polyline, Circle } from "react-leaflet"
import { useTranslations } from "next-intl"
import { kostPosition, nearbyPlaces } from "@/contents/nearby"
import { siteConfig } from "@/config/site"

const pin = (className: string, size: number) => L.divIcon({ className, iconSize: [size, size], popupAnchor: [0, -size / 2] })
const placeIcon = pin("map-pin", 14)
const homeIcon = pin("map-pin map-pin--home", 22)

const leaf = "#1f2b22"
const skin = "#a3253a"

export default function MapRadius() {
  const t = useTranslations("home")
  const tCat = useTranslations("categories")

  return (
    <MapContainer center={[-7.64, 111.538]} zoom={15} scrollWheelZoom={false} dragging={!L.Browser.mobile} className="map-muted photo isolate h-[22rem] w-full md:h-[28rem]">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Circle center={kostPosition} radius={500} pathOptions={{ color: skin, fillColor: skin, fillOpacity: 0.06, weight: 1 }} />

      {nearbyPlaces.map((place) => (
        <Fragment key={place.name}>
          <Polyline pathOptions={{ color: leaf, weight: 1, opacity: 0.45, dashArray: "4 6" }} positions={[kostPosition, [...place.coords]]} />
          <Marker position={[...place.coords]} icon={placeIcon}>
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {tCat(place.category)}, {place.distance}
            </Popup>
          </Marker>
        </Fragment>
      ))}

      <Marker position={kostPosition} icon={homeIcon} zIndexOffset={1000}>
        <Popup>
          <strong>Kost Apel Manis</strong>
          <br />
          <a href={siteConfig.contact.mapsUrl} target="_blank" rel="noopener noreferrer">
            {t("open_maps")}
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
