import { Inter } from "next/font/google";
import "./globals.css";
import { StickyNavbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Points System",
  description: "Created by Yash Kumar Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <StickyNavbar />
        {children}
      </body>
    </html>
  );
}
