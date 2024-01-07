import type {Metadata} from 'next'
import '@/styles/globals.css'
import {cn} from "@/lib/utils";
import React from "react";
import {Inter as FontSans} from "next/font/google"
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import {ThemeProvider} from "@/components/theme-provider";
import ContainerCommon from "@/modules/common/presentation/components/container-common";
import {IRootLayoutProps} from "@/modules/common/domain/types/common";


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const fontSans: NextFontWithVariable = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const RootLayout = ({children}: IRootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
    <body suppressHydrationWarning
          className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
    )}>
    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
      <ContainerCommon>
        {children}
      </ContainerCommon>
    </ThemeProvider>
    </body>
    </html>
  )
}
export default RootLayout;