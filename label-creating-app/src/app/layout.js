import React from "react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Labels to Print",
  description: "Multiple size and types of labels from one source",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        {/* {children}
         */}

        <header className="w-full p-4 bg-red-600 text-black">
          <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
            <h1 className=""></h1>
            <ul className="flex gap-4">
              <li>
                <a href="/contact" className="hovor:underline">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="w-full mx-auto p-8 bg-blue-1200 flex ">{children}</main>


        <footer className="w-full p-4 bg-pink-500 text-white">
          <div className="max-w-screen-xl mx-auto">
            <p>&copy; 2024 My Website. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
