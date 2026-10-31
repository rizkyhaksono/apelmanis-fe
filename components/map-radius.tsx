"use client"

import "leaflet/dist/leaflet.css"
import { Fragment, useEffect, useRef, type RefObject } from "react"
import L from "leaflet"
import { Circle, MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip, ZoomControl, useMap } from "react-leaflet"
import { useFormatter, useTranslations } from "next-intl"
import { attractions, kostPosition, nearbyPlaces } from "@/contents/nearby"
import { siteConfig } from "@/config/site"

export type MapView = "walk" | "explore"

interface MapRadiusProps {
  view: MapView
  selected: number | null
  onSelect: (index: number) => void
}

const pin = (className: string, size: number, html = "") =>
  L.divIcon({ className, html, iconSize: [size, size], popupAnchor: [0, -size / 2], tooltipAnchor: [size / 2 + 6, 0] })
const placeIcon = pin("map-pin", 14)
const homeIcon = pin("map-pin map-pin--home", 22)
const numberIcons = attractions.map((_, i) => [pin("map-num", 28, String(i + 1)), pin("map-num map-num--active", 28, String(i + 1))])

const leaf = "#1f2b22"
const skin = "#a3253a"

const bounds = {
  walk: L.latLngBounds([kostPosition, ...nearbyPlaces.map((p) => [...p.coords] as [number, number])]),
  explore: L.latLngBounds([kostPosition, ...attractions.map((p) => [...p.coords] as [number, number])]),
}

const directionsUrl = ([lat, lng]: readonly [number, number]) =>
  `https://www.google.com/maps/dir/?api=1&origin=${kostPosition.join(",")}&destination=${lat},${lng}`

// Moves the map when the view or the selected place changes.
function Camera({ view, selected, markers }: { view: MapView; selected: number | null; markers: RefObject<(L.Marker | null)[]> }) {
  const map = useMap()
  // The container already opens on the walk bounds, so only fly on real changes.
  const shown = useRef({ view, selected })

  useEffect(() => {
    if (shown.current.view === view && shown.current.selected === selected) return
    shown.current = { view, selected }
    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const marker = view === "explore" && selected !== null ? markers.current[selected] : null

    if (!marker) {
      map.closePopup()
      map.flyToBounds(bounds[view], { padding: [32, 32], animate, duration: 0.8 })
      return
    }

    const open = () => marker.openPopup()
    map.once("moveend", open)
    map.flyToBounds(L.latLngBounds([kostPosition, marker.getLatLng()]), { padding: [64, 64], maxZoom: 16, animate, duration: 0.8 })
    return () => {
      map.off("moveend", open)
    }
  }, [map, view, selected, markers])

  return null
}

export default function MapRadius({ view, selected, onSelect }: MapRadiusProps) {
  const t = useTranslations("home")
  const tCat = useTranslations("categories")
  const format = useFormatter()
  const markers = useRef<(L.Marker | null)[]>([])
  const active = selected === null ? null : attractions[selected]

  return (
    <MapContainer
      bounds={bounds[view]}
      boundsOptions={{ padding: [32, 32] }}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={!L.Browser.mobile}
      className="map-muted photo isolate h-[22rem] w-full md:h-[28rem]"
    >
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Bottom right, so popups opening upward never sit under it. */}
      <ZoomControl position="bottomright" />
      <Camera view={view} selected={selected} markers={markers} />

      {view === "walk" && (
        <>
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
        </>
      )}

      {view === "explore" && (
        <>
          {active && <Polyline pathOptions={{ color: leaf, weight: 1.5, opacity: 0.6, dashArray: "4 6" }} positions={[kostPosition, [...active.coords]]} />}
          {attractions.map((place, i) => (
            <Marker
              key={place.name}
              ref={(marker) => {
                markers.current[i] = marker
              }}
              position={[...place.coords]}
              icon={numberIcons[i][selected === i ? 1 : 0]}
              zIndexOffset={selected === i ? 500 : 0}
              eventHandlers={{ click: () => onSelect(i) }}
            >
              <Popup>
                <strong>{place.name}</strong>
                <br />
                {tCat(place.category)}, {t("from_kost", { distance: format.number(place.km, { style: "unit", unit: "kilometer" }) })}
                <br />
                {t("ride", { minutes: place.minutes })}
                <br />
                <a href={directionsUrl(place.coords)} target="_blank" rel="noopener noreferrer">
                  {t("route")}
                </a>
              </Popup>
            </Marker>
          ))}
        </>
      )}

      <Marker position={kostPosition} icon={homeIcon} zIndexOffset={1000}>
        <Tooltip permanent direction="right" className="map-label">
          Kost Apel Manis
        </Tooltip>
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
