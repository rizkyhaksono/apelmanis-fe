"use client"

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility"
import { MapContainer, Marker, Popup, TileLayer, Polyline, Circle } from "react-leaflet"

// Nearby locations data with coordinates
const nearbyLocations = [
  {
    name: "Universitas PGRI Madiun (UNIPMA)",
    coords: [-7.636737702657447, 111.54223680496217] as [number, number],
    distance: "600m",
    duration: "2 menit jalan kaki",
    category: "🎓 Kampus",
  },
  {
    name: "SMA Negeri 3 Madiun",
    coords: [-7.6398, 111.544] as [number, number],
    distance: "500m",
    duration: "2 menit jalan kaki",
    category: "🏫 Sekolah",
  },
  {
    name: "Matahari Department Store",
    coords: [-7.628, 111.523] as [number, number],
    distance: "2km",
    duration: "7 menit berkendara",
    category: "🛒 Pusat Perbelanjaan",
  },
  {
    name: "Indomaret Apel Manis",
    coords: [-7.641, 111.537] as [number, number],
    distance: "200m",
    duration: "1 menit jalan kaki",
    category: "🏪 Minimarket",
  },
  {
    name: "Alfamart",
    coords: [-7.6435, 111.54] as [number, number],
    distance: "250m",
    duration: "1 menit jalan kaki",
    category: "🏪 Minimarket",
  },
  {
    name: "Warung Makan Bu Sri",
    coords: [-7.6415, 111.5395] as [number, number],
    distance: "150m",
    duration: "1 menit jalan kaki",
    category: "🍛 Tempat Makan",
  },
  {
    name: "Rumah Makan Padang",
    coords: [-7.64, 111.536] as [number, number],
    distance: "300m",
    duration: "2 menit jalan kaki",
    category: "🍛 Tempat Makan",
  },
  {
    name: "Masjid Al-Ikhlas",
    coords: [-7.6418, 111.539] as [number, number],
    distance: "100m",
    duration: "1 menit jalan kaki",
    category: "🕌 Tempat Ibadah",
  },
  {
    name: "ATM BRI",
    coords: [-7.6405, 111.5375] as [number, number],
    distance: "200m",
    duration: "1 menit jalan kaki",
    category: "🏧 ATM",
  },
  {
    name: "Apotek Kimia Farma",
    coords: [-7.6395, 111.535] as [number, number],
    distance: "400m",
    duration: "2 menit jalan kaki",
    category: "💊 Apotek",
  },
]

export default function MapRadius() {
  const kostPosition: [number, number] = [-7.642208750762692, 111.53828322887422]
  const defaultCenter: [number, number] = [-7.64, 111.538]

  const lineOptions = { color: "#0072F5", weight: 2, opacity: 0.6, dashArray: "5, 10" }

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-xl">
      <MapContainer center={defaultCenter} zoom={15} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }} className="rounded-xl">
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Radius circle around kost */}
        <Circle
          center={kostPosition}
          radius={500}
          pathOptions={{
            color: "#0072F5",
            fillColor: "#0072F5",
            fillOpacity: 0.1,
            weight: 2,
          }}
        />

        {/* Kost Marker */}
        <Marker position={kostPosition}>
          <Popup>
            <div className="text-center">
              <strong className="text-lg">🏠 Kost Apel Manis</strong>
              <br />
              <span className="text-gray-600">Lokasi Kost Anda</span>
              <br />
              <a href="https://maps.app.goo.gl/MDqghJG1XECP1e2d6" target="_blank" className="text-blue-500 text-sm">
                Buka di Google Maps
              </a>
            </div>
          </Popup>
        </Marker>

        {/* Nearby Location Markers with Lines */}
        {nearbyLocations.map((location) => (
          <div key={location.name}>
            <Polyline pathOptions={lineOptions} positions={[kostPosition, location.coords]} />
            <Marker position={location.coords}>
              <Popup>
                <div>
                  <strong>{location.category}</strong>
                  <br />
                  <span className="font-medium">{location.name}</span>
                  <br />
                  <span className="text-gray-600 text-sm">
                    📍 {location.distance} • ⏱️ {location.duration}
                  </span>
                </div>
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="bg-default-50 dark:bg-default-100/10 p-4 border-t border-default-200 dark:border-default-100/20">
        <p className="text-sm text-default-600 text-center">
          <span className="font-medium">Klik marker</span> untuk melihat informasi lokasi •<span className="text-primary"> Lingkaran biru</span> menunjukkan radius 500m dari kost
        </p>
      </div>
    </div>
  )
}
