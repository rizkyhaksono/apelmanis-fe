// Photo numbers in public/assets, ordered as a walk from the gate to the rooms.
export const galleryPhotos = [10, 1, 6, 4, 15, 3, 18, 2, 14, 9, 7, 12, 11, 13, 16, 5, 17, 8].map((n) => ({ n, src: `/assets/gambar-${n}.jpeg` }))

// The home strip shows the first ten; the facilities page shows all.
export const homeGalleryCount = 10
