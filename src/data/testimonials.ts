export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  stat: string;
  rotate: number;
  width: "narrow" | "normal" | "wide";
}

export const testimonials: Testimonial[] = [
  {
    id: "trish",
    name: "Trish Bautista",
    city: "Quezon City",
    quote:
      "Nabenta ko yung buong college wardrobe ko in a month. Mas okay pa kesa garage sale.",
    stat: "₱18,400 across 34 items",
    rotate: -2,
    width: "normal",
  },
  {
    id: "marco",
    name: "Marco Villanueva",
    city: "Cebu City",
    quote:
      "Won a Carhartt Detroit jacket for ₱2,400. Same piece goes for ₱8,950 on the resale pages.",
    stat: "Paid ₱2,400 · retail ₱8,950",
    rotate: 1.5,
    width: "wide",
  },
  {
    id: "denise",
    name: "Denise Ramos",
    city: "Davao City",
    quote:
      "The under-two-minute timer is evil. Won three bidding wars on my lunch break alone.",
    stat: "3 wins · 41 bids placed",
    rotate: -1,
    width: "narrow",
  },
  {
    id: "jp",
    name: "JP Santos",
    city: "Makati City",
    quote: "Listed a pair of Sambas before bed, woke up to 22 bids on them.",
    stat: "₱2,750 · 22 bids overnight",
    rotate: 2,
    width: "normal",
  },
  {
    id: "kat",
    name: "Kat Dizon",
    city: "Baguio City",
    quote:
      "Sold my mom's old Levi's for more than I spent on my whole ukay haul that week.",
    stat: "₱3,100 for one pair",
    rotate: -1.5,
    width: "narrow",
  },
];
