import {React, Suspense} from "react";
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
        className={`${geistSans.variable} ${geistMono.variable} h-lvh w-lvw`}
      >
        {/* {children}
         */}

        <header className="h-[10%] bg-black">
          <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
            <h1 className=""></h1>
            <ul className="flex gap-4">
              <li>
                <a href="/templates" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <Suspense>
          <main className="h-[70vh]">{children}</main>
        </Suspense>

        {/* <footer className="w-full h-[10%] bg-slate-700  text-white">
          <div className="max-w-screen-xl mx-auto">
            <p>&copy; 2024 My Website. All Rights Reserved.</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
