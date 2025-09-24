export const IMAGE_BASE = "https://image.tmdb.org/t/p";
export const posterUrl = (path: string | null, size = "w500") =>
  path ? `${IMAGE_BASE}/${size}${path}` : "/placeholder.png";
export const backdropUrl = (path: string | null) =>
  path ? `${IMAGE_BASE}/original${path}` : "/placeholder-backdrop.png";
