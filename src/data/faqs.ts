export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "fees",
    question: "What does UKAY charge?",
    answer:
      "Listing is free. When your item sells, we take 8% of the final bid, not a peso before that. Buyers pay the bid plus a small buyer fee, shown before you confirm, never after.",
  },
  {
    id: "bidding",
    question: "How does the bidding actually work?",
    answer:
      "Every listing runs on a timer. Place a bid, or set a max and let the app bid for you up to that ceiling. If a bid lands in the last 30 seconds, the clock adds 30 more seconds, so nobody wins by sniping in the last instant. Highest bid when time runs out takes it.",
  },
  {
    id: "shipping",
    question: "How does shipping work?",
    answer:
      "Sellers ship within 2 days through J&T or Flash Express. Flat rate of ₱120 within Metro Manila, ₱180 provincial, paid by the buyer at checkout. Tracking lives inside the app from pickup to your door.",
  },
  {
    id: "authenticity",
    question: "Are the items actually legit?",
    answer:
      "Every seller passes ID verification before they can list. Branded pieces above ₱3,000 get a photo review before they go live. If an item arrives not as described, buyer protection covers a full refund.",
  },
  {
    id: "launch",
    question: "When does UKAY launch?",
    answer:
      "Metro Manila goes first in November 2026. Cebu and Davao follow in early 2027. Everyone on the waitlist gets the invite before the app is public.",
  },
  {
    id: "one-of-one",
    question: "Is it really one item, one listing?",
    answer:
      "Yes. Secondhand means a single unit exists. Once it sells, that listing closes for good, no restock, no second batch of the same thing.",
  },
];
