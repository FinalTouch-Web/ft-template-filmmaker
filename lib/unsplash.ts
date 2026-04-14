// Curated Unsplash photo IDs used across the template.
// All are real `images.unsplash.com/photo-<id>` slugs — the client can
// swap any of these out with their own assets without touching components.

export const IMG = {
  // hero + general film-world imagery
  HERO_REEL:    "1485846234645-a62644f84728", // film camera on tripod, Jakob Owens
  FILM_1:       "1478720568477-b0829d6ad3e8", // projector
  FILM_2:       "1440404653325-ab127d49abc1", // film reel
  FILM_3:       "1534447677768-be436bb09401", // cinema seats
  FILM_4:       "1517604931442-7e0c8ed2963c", // film strip
  FILM_5:       "1536440136628-849c177e76a1", // clapperboard
  // landscapes / environmental stills
  LAND_1:  "1469474968028-56623f02e42e", // mountain
  LAND_2:  "1506905925346-21bda4d32df4", // mountains
  LAND_3:  "1441974231531-c6227db76b6e", // forest path
  LAND_4:  "1506744038136-46273834b3fb", // waterfall
  LAND_5:  "1470071459604-3b5ec3a7fe05", // mountains + fog
  LAND_6:  "1493246507139-91e8fad9978e", // sunset ridge
  LAND_7:  "1447752875215-b2761acb3c5d", // forest floor
  LAND_8:  "1500534314209-a25ddb2bd429", // beach
  LAND_9:  "1464822759023-fed622ff2c3b", // valley
  LAND_10: "1472214103451-9374bd1c798e", // stars
  LAND_11: "1519681393784-d120267933ba", // aurora
  LAND_12: "1493804714600-6edb1cd93080", // overcast mountains
  // portraits for crew
  PORTRAIT_1: "1500648767791-00dcc994a43e", // studio portrait
  PORTRAIT_2: "1494790108377-be9c29b29330", // studio portrait
  PORTRAIT_3: "1507003211169-0a1dd7228f2d", // studio portrait
};

export const usrc = (id: string, w = 1600, h?: number) => {
  const base = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;
  return h ? `${base}&h=${h}` : base;
};
