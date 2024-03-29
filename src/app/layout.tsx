import type {Metadata} from 'next'
import '@/styles/globals.css'
import {cn} from "@/lib/utils";
import React from "react";
import {Inter as FontSans} from "next/font/google"
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import {ThemeProvider} from "@/components/theme-provider";


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const fontSans: NextFontWithVariable = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
    )}>
    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
    </body>
    </html>
  )
}
