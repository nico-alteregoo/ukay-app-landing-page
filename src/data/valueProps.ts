export interface ValueProp {
  title: string;
  body: string;
}

export const sellerProps: ValueProp[] = [
  {
    title: "No listing fee.",
    body: "Post as many pieces as you want. We take a cut only when something actually sells.",
  },
  {
    title: "Cash from your closet.",
    body: "Payout lands in your GCash or bank account three days after the item ships.",
  },
  {
    title: "The room does the haggling.",
    body: "Buyers bid against each other. You set the floor and watch it climb from there.",
  },
];

export const buyerProps: ValueProp[] = [
  {
    title: "One of one.",
    body: "Every piece is a single unit. Win it and nobody else on earth has the same one.",
  },
  {
    title: "Prices set by the room.",
    body: "No seller markup games. Whatever the last bid was when time ran out is the price.",
  },
  {
    title: "Verified sellers, buyer protection.",
    body: "Sellers pass ID checks before they list. Item not as described? You get your money back.",
  },
];
