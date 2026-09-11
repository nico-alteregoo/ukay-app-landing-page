export type AuctionState = "live" | "ending" | "sold";

export interface Auction {
  id: string;
  title: string;
  brand: string;
  detail: string;
  city: string;
  image: string;
  alt: string;
  startingBid: number;
  currentBid: number;
  bidCount: number;
  watcherCount: number;
  /** Seconds from page load until this auction ends (ignored when state is "sold"). */
  endsInSeconds: number;
  state: AuctionState;
  winnerName?: string;
  winnerCity?: string;
  soldAgo?: string;
  rotate: number;
}

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop&auto=format`;

export const heroAuction: Auction = {
  id: "hero-levis",
  title: "Levi's trucker jacket",
  brand: "Levi's",
  detail: "Women's M · stonewash",
  city: "Baguio City",
  image: img("1546961329-78bef0414d7c"),
  alt: "Woman smiling while wearing a secondhand denim jacket",
  startingBid: 600,
  currentBid: 1250,
  bidCount: 14,
  watcherCount: 32,
  endsInSeconds: 111,
  state: "live",
  rotate: -1.5,
};

export const auctions: Auction[] = [
  {
    id: "windbreaker",
    title: "Colorblock windbreaker",
    brand: "Unbranded 90s",
    detail: "Fits M-L · full zip",
    city: "Cubao, Quezon City",
    image: img("1571867424485-369464ed33cc"),
    alt: "Purple and orange colorblock vintage windbreaker jacket",
    startingBid: 300,
    currentBid: 890,
    bidCount: 9,
    watcherCount: 21,
    endsInSeconds: 96,
    state: "live",
    rotate: 2,
  },
  {
    id: "samba",
    title: "Adidas Samba OG, gum sole",
    brand: "Adidas",
    detail: "US 9 · light creasing",
    city: "Cebu City",
    image: img("1556048219-bb6978360b84"),
    alt: "Pair of worn brown Converse-style high-top sneakers",
    startingBid: 500,
    currentBid: 1450,
    bidCount: 27,
    watcherCount: 61,
    endsInSeconds: 512,
    state: "live",
    rotate: -2,
  },
  {
    id: "coach-sling",
    title: "Coach leather sling bag",
    brand: "Coach",
    detail: "Tan · brass hardware",
    city: "Makati City",
    image: img("1624687943971-e86af76d57de"),
    alt: "Brown leather shopper tote bag with handles on a plain background",
    startingBid: 900,
    currentBid: 1700,
    bidCount: 23,
    watcherCount: 40,
    endsInSeconds: 47,
    state: "ending",
    rotate: 1.5,
  },
  {
    id: "carhartt-detroit",
    title: "Carhartt Detroit jacket",
    brand: "Carhartt",
    detail: "Brown duck canvas · L",
    city: "Cebu City",
    image: img("1572149913824-3e2005fe09fb"),
    alt: "Close-up of a worn brown canvas work jacket in shallow focus",
    startingBid: 800,
    currentBid: 2400,
    bidCount: 31,
    watcherCount: 0,
    endsInSeconds: 0,
    state: "sold",
    winnerName: "Marco",
    winnerCity: "Cebu City",
    soldAgo: "sold 2 hours ago",
    rotate: -1,
  },
];
