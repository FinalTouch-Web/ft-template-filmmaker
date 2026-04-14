import { IMG } from "./unsplash";

export type Still = {
  label: string;
  caption: string;
  img: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  director: string;
  format: string;
  year: string;
  runtime: string;
  role: string;
  location: string;
  synopsis: string;
  credits: { role: string; name: string }[];
  stills: Still[];
  cover: string;
  logline: string;
};

export const projects: Project[] = [
  {
    slug: "north-of-the-pass",
    title: "North of the Pass",
    client: "Patagonia",
    director: "Mara Oduya",
    format: "Documentary Short",
    year: "2025",
    runtime: "14:22",
    role: "Dir. / DP",
    location: "Kananaskis, AB",
    cover: IMG.LAND_2,
    logline:
      "A ski patroller's last season on a mountain that's melting out from under her.",
    synopsis:
      "We spent eleven days on a closed section of road with a patroller who's done this route for thirty winters. The film is mostly her hands on old gear and the sound of weather coming in. We didn't script any of it.",
    credits: [
      { role: "DIRECTOR", name: "Mara Oduya" },
      { role: "CINEMATOGRAPHY", name: "Longframe" },
      { role: "SOUND", name: "Jules Pereira" },
      { role: "EDITOR", name: "Cam Trinh" },
      { role: "COLOR", name: "Longframe" },
    ],
    stills: [
      { label: "STILL 01", caption: "Exterior — first light, ridgeline", img: IMG.LAND_1 },
      { label: "STILL 02", caption: "Interior — patrol hut, radio call", img: IMG.LAND_5 },
      { label: "STILL 03", caption: "Exterior — snow cat, blue hour", img: IMG.LAND_11 },
      { label: "STILL 04", caption: "Close — hands on the rope bag", img: IMG.LAND_9 },
    ],
  },
  {
    slug: "a-good-clean-room",
    title: "A Good Clean Room",
    client: "Westcott Hospitality",
    director: "Longframe",
    format: "Brand Commercial",
    year: "2025",
    runtime: "00:60",
    role: "Dir. / DP / Edit",
    location: "Banff, AB",
    cover: IMG.LAND_12,
    logline:
      "Sixty seconds on what it means to turn a room over in the off-season.",
    synopsis:
      "Commercial for a small hotel group that didn't want a commercial. We shot one housekeeper through a full morning shift on Alexa Mini with master primes, no slider, no dolly, just patience.",
    credits: [
      { role: "DIRECTOR", name: "Longframe" },
      { role: "AGENCY", name: "House of Common" },
      { role: "SOUND", name: "Jules Pereira" },
      { role: "EDITOR", name: "Longframe" },
    ],
    stills: [
      { label: "STILL 01", caption: "Interior — window light, sheets", img: IMG.FILM_3 },
      { label: "STILL 02", caption: "Detail — cart wheels on carpet", img: IMG.FILM_2 },
      { label: "STILL 03", caption: "Portrait — housekeeper, static", img: IMG.LAND_7 },
    ],
  },
  {
    slug: "every-other-saturday",
    title: "Every Other Saturday",
    client: "CBC Gem",
    director: "Idris Kahn",
    format: "Short Film",
    year: "2024",
    runtime: "18:40",
    role: "DP",
    location: "Calgary, AB",
    cover: IMG.FILM_3,
    logline:
      "A divorced dad and his kid order the same Thai food for two years without saying why.",
    synopsis:
      "Tight interiors, long lenses, and a lot of silences we refused to fill. Shot over four weekends on practicals only — no film lights on set.",
    credits: [
      { role: "DIRECTOR", name: "Idris Kahn" },
      { role: "CINEMATOGRAPHY", name: "Longframe" },
      { role: "EDITOR", name: "Priya Vance" },
    ],
    stills: [
      { label: "STILL 01", caption: "Interior — dining table, two plates", img: IMG.FILM_5 },
      { label: "STILL 02", caption: "Exterior — apartment hallway", img: IMG.FILM_4 },
      { label: "STILL 03", caption: "Close — takeout bag", img: IMG.FILM_1 },
    ],
  },
  {
    slug: "the-long-haul",
    title: "The Long Haul",
    client: "Alberta Motor Association",
    director: "Longframe",
    format: "Brand Documentary",
    year: "2024",
    runtime: "08:12",
    role: "Dir. / DP",
    location: "Highway 2, AB",
    cover: IMG.LAND_10,
    logline:
      "Three truckers, one week, twelve hundred kilometers. What the road actually sounds like at 3AM.",
    synopsis:
      "Rode jump-seat with three drivers across a week. The brief was 'roadside assistance values' — we came back with a film about loneliness and CB radio chatter. They ran it anyway.",
    credits: [
      { role: "DIRECTOR", name: "Longframe" },
      { role: "SOUND", name: "Jules Pereira" },
      { role: "EDITOR", name: "Cam Trinh" },
    ],
    stills: [
      { label: "STILL 01", caption: "Interior — cab, night, dash glow", img: IMG.LAND_11 },
      { label: "STILL 02", caption: "Exterior — rest stop, 3AM", img: IMG.LAND_10 },
      { label: "STILL 03", caption: "Close — CB mic", img: IMG.FILM_4 },
    ],
  },
  {
    slug: "rope-and-chalk",
    title: "Rope and Chalk",
    client: "Arc'teryx",
    director: "Mara Oduya",
    format: "Brand Spot",
    year: "2024",
    runtime: "02:10",
    role: "DP",
    location: "Bow Valley, AB",
    cover: IMG.LAND_6,
    logline: "A two-minute meditation on trad climbing as a kind of waiting.",
    synopsis:
      "One climber, one wall, one lens. We burned through a day of light waiting for wind to die. It did, for ninety seconds. That's the film.",
    credits: [
      { role: "DIRECTOR", name: "Mara Oduya" },
      { role: "CINEMATOGRAPHY", name: "Longframe" },
      { role: "EDITOR", name: "Priya Vance" },
    ],
    stills: [
      { label: "STILL 01", caption: "Exterior — granite face, wide", img: IMG.LAND_4 },
      { label: "STILL 02", caption: "Close — chalk bag, fingers", img: IMG.LAND_3 },
      { label: "STILL 03", caption: "Portrait — climber, top-out", img: IMG.LAND_6 },
    ],
  },
  {
    slug: "small-weather",
    title: "Small Weather",
    client: "Self-funded",
    director: "Longframe",
    format: "Experimental Short",
    year: "2023",
    runtime: "06:44",
    role: "Dir. / DP / Edit",
    location: "Prairie, AB",
    cover: IMG.LAND_8,
    logline:
      "Six minutes of prairie weather and one voice reading old weather reports from 1932.",
    synopsis:
      "We did this one for ourselves. Shot on expired 16mm and transferred bad on purpose. It got into two festivals we weren't expecting and lost at both. Worth it.",
    credits: [{ role: "EVERYTHING", name: "Longframe" }],
    stills: [
      { label: "STILL 01", caption: "Exterior — grain elevator, dusk", img: IMG.LAND_9 },
      { label: "STILL 02", caption: "Exterior — wheat, low wind", img: IMG.LAND_8 },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
