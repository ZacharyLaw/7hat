import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

import React from 'react';
const inter = Inter({ subsets: ["latin"] });

export const metadata={
  "charset": "utf-8",
  "httpEquiv": "X-UA-Compatible",
  "content": "IE=edge",
  "description": "Description",
  "keywords": "Keywords",
  "title": "Zachary Chat",
  "manifest": "manifest.json", // must put repo in front!!!
  "apple-touch-icon": "/public/icon.png",
}
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'light' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}
export default function RootLayout({children}){
  return (<html lang="en">
    <body className={inter.className}>
        {children}
        </body>
        </html>)}