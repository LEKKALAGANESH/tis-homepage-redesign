import "./globals.css";

export const metadata = {
  title: "Tula's International School | The Modern Gurukul",
  description: "A premium homepage redesign for Tula's International School, Dehradun.",
};

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}