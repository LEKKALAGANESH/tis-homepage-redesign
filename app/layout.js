import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const display = Playfair_Display({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-display" });

const title = "Tula's International School | The Modern Gurukul";
const description = "A premium homepage redesign for Tula's International School, Dehradun.";

export const metadata = {
  metadataBase: new URL("https://tis-homepage-redesign.vercel.app"),
  title,
  description,
  openGraph: { title, description, url: "/", siteName: "Tula's International School", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// Runs before first paint: marks JS as available (for reveal animations) and applies the
// saved or system theme, so dark-mode visitors never see a light flash.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');var t;try{t=localStorage.getItem('tis-theme')}catch(e){}if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';d.dataset.theme=t})()`;

export default function RootLayout({ children }) {
  return <html lang="en" className={body.variable + " " + display.variable} suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: bootScript }} /></head>
    <body>{children}</body>
  </html>;
}
