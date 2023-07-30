import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
  icons: {
    icon: "./icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
