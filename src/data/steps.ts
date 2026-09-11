export interface Step {
  n: number;
  title: string;
  body: string;
}

export const sellingSteps: Step[] = [
  {
    n: 1,
    title: "Photograph it",
    body: "Four photos in natural light, flaws included. The app crops and lists it for you.",
  },
  {
    n: 2,
    title: "Set your starting bid",
    body: "Pick a floor you'd be happy with. Lower floors pull in more bidders early.",
  },
  {
    n: 3,
    title: "Go live",
    body: "Your auction runs 24 hours. Watchers get pinged when it's about to end.",
  },
  {
    n: 4,
    title: "Get paid",
    body: "Buyer pays through the app, item ships, money lands in your account three days later.",
  },
];

export const buyingSteps: Step[] = [
  {
    n: 1,
    title: "Browse the drop",
    body: "New listings land every day. Follow categories and sellers you already trust.",
  },
  {
    n: 2,
    title: "Place your bid",
    body: "Set a max and let the app bid for you, or go manual in the final minute.",
  },
  {
    n: 3,
    title: "Win it",
    body: "Highest bid when the timer hits zero takes it. You pay right there in the app.",
  },
  {
    n: 4,
    title: "It ships",
    body: "Tracked delivery in 2 to 5 days. Confirm it's as described and the auction closes.",
  },
];
