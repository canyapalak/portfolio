"use client";

import "./page.module.css";
import "./globals.css";
import Head from "./head";
import Home from "./home.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head />
        <Home />
        {children}
      </body>
    </html>
  );
}
