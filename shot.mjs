import { chromium } from "playwright";

const outDir = process.argv[2];
const browser = await chromium.launch();

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
desktop.on("console", (msg) => {
  if (msg.type() === "error") console.log("DESKTOP CONSOLE ERROR:", msg.text());
});
await desktop.goto("http://localhost:5173", { waitUntil: "networkidle" });
await desktop.screenshot({ path: outDir + "/desktop-top.png" });
await desktop.screenshot({ path: outDir + "/desktop-full.png", fullPage: true });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
mobile.on("console", (msg) => {
  if (msg.type() === "error") console.log("MOBILE CONSOLE ERROR:", msg.text());
});
await mobile.goto("http://localhost:5173", { waitUntil: "networkidle" });
await mobile.screenshot({ path: outDir + "/mobile-top.png" });
await mobile.screenshot({ path: outDir + "/mobile-full.png", fullPage: true });

await browser.close();
console.log("done");
