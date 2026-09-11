export interface Category {
  id: string;
  name: string;
  liveCount: number;
  image: string;
  alt: string;
  span: "wide" | "normal";
  rotate: number;
}

const img = (id: string, w = 700) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop&auto=format`;

export const categories: Category[] = [
  {
    id: "denim",
    name: "Denim",
    liveCount: 142,
    image: img("1713880453396-aa0493e308ec"),
    alt: "Stack of folded blue denim jeans",
    span: "wide",
    rotate: -1.5,
  },
  {
    id: "jackets-coats",
    name: "Jackets & coats",
    liveCount: 88,
    image: img("1551232864-3f0890e580d9"),
    alt: "Five jackets hanging together on a clothing rack",
    span: "normal",
    rotate: 1,
  },
  {
    id: "bags",
    name: "Bags",
    liveCount: 63,
    image: img("1763475945655-49b36200f20a"),
    alt: "Vendors displaying many leather bags at a market stall",
    span: "normal",
    rotate: -2,
  },
  {
    id: "sneakers",
    name: "Sneakers",
    liveCount: 97,
    image: img("1462927114214-6956d2fddd4e"),
    alt: "Assorted colorful sneakers lined up in their boxes",
    span: "normal",
    rotate: 1.5,
  },
  {
    id: "vintage-tees",
    name: "Vintage tees",
    liveCount: 210,
    image: img("1786398018337-cf17a56fad25"),
    alt: "Drawer of neatly rolled graphic t-shirts in various colors",
    span: "normal",
    rotate: -1,
  },
  {
    id: "y2k",
    name: "Y2K pieces",
    liveCount: 54,
    image: img("1632195217465-4f334314762f"),
    alt: "Red, orange, and yellow colorful t-shirts hanging on a rack",
    span: "wide",
    rotate: 2,
  },
];
