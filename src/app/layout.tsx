import type { Metadata } from "next";

import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nature",
  description: "Dive into the jungle and explore the wild life",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
