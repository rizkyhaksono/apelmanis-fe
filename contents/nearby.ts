export type NearbyPlace = (typeof nearbyPlaces)[number]

// Single source for the home list and the map. Distances are from the kost; walking time assumes ~80 m per minute.
export const kostPosition: [number, number] = [-7.642208750762692, 111.53828322887422]

export const nearbyPlaces = [
  { name: "Universitas PGRI Madiun (UNIPMA)", category: "campus", coords: [-7.636737702657447, 111.54223680496217], distance: "600 m", minutes: 8, mode: "walk" },
  { name: "SMA Negeri 3 Madiun", category: "school", coords: [-7.6398, 111.544], distance: "500 m", minutes: 7, mode: "walk" },
  { name: "Masjid Al-Ikhlas", category: "worship", coords: [-7.6418, 111.539], distance: "100 m", minutes: 2, mode: "walk" },
  { name: "Warung Makan Bu Sri", category: "food", coords: [-7.6415, 111.5395], distance: "150 m", minutes: 2, mode: "walk" },
  { name: "Indomaret Apel Manis", category: "minimarket", coords: [-7.641, 111.537], distance: "200 m", minutes: 3, mode: "walk" },
  { name: "ATM BRI", category: "atm", coords: [-7.6405, 111.5375], distance: "200 m", minutes: 3, mode: "walk" },
  { name: "Alfamart", category: "minimarket", coords: [-7.6435, 111.54], distance: "250 m", minutes: 4, mode: "walk" },
  { name: "Rumah Makan Padang", category: "food", coords: [-7.64, 111.536], distance: "300 m", minutes: 4, mode: "walk" },
  { name: "Apotek Kimia Farma", category: "pharmacy", coords: [-7.6395, 111.535], distance: "400 m", minutes: 5, mode: "walk" },
] as const satisfies ReadonlyArray<{ name: string; category: string; coords: readonly [number, number]; distance: string; minutes: number; mode: "walk" | "ride" }>

// Places worth a ride out. Coordinates from OpenStreetMap; km is road distance (OSRM), minutes assume ~25 km/h by motorbike.
export const attractions = [
  { name: "Ngrowo Bening Edu Park", category: "park", coords: [-7.637491, 111.529955], km: 1.6, minutes: 4 },
  { name: "Sun City Mall", category: "mall", coords: [-7.622626, 111.53596], km: 2.7, minutes: 7 },
  { name: "Stadion Wilis", category: "sport", coords: [-7.630988, 111.529639], km: 2.9, minutes: 7 },
  { name: "RSUD Dr. Soedono", category: "hospital", coords: [-7.626634, 111.524493], km: 3.9, minutes: 10 },
  { name: "Taman Bantaran Kali", category: "park", coords: [-7.629253, 111.513346], km: 4.3, minutes: 11 },
  { name: "Pahlawan Street Center", category: "landmark", coords: [-7.625693, 111.520688], km: 4.6, minutes: 12 },
  { name: "Alun-alun Madiun", category: "landmark", coords: [-7.629158, 111.516827], km: 4.6, minutes: 12 },
  { name: "Stasiun Madiun", category: "station", coords: [-7.618593, 111.524858], km: 4.7, minutes: 12 },
] as const satisfies ReadonlyArray<{ name: string; category: string; coords: readonly [number, number]; km: number; minutes: number }>
