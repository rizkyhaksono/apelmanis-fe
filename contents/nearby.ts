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
  { name: "Matahari Department Store", category: "shopping", coords: [-7.628, 111.523], distance: "2 km", minutes: 7, mode: "ride" },
] as const satisfies ReadonlyArray<{ name: string; category: string; coords: readonly [number, number]; distance: string; minutes: number; mode: "walk" | "ride" }>
