import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import React, { createContext, useContext, useEffect, useState } from "react"
import { BalanceProvider } from '@/context/BalanceContext'
import { CCTXsProvider } from '@/context/CCTXsContext'
import { FeesProvider } from '@/context/FeesContext'
import { PricesProvider } from '@/context/PricesContext'
import { StakingProvider } from '@/context/StakingContext'
import { ValidatorsProvider } from '@/context/ValidatorsContext'
// @ts-ignore
import Cookies from "js-cookie"

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { SiteHeader } from "@/components/site-header"
import WagmiRainbowProvider from '@/context/WagmiRainbowContext' 
import { ReactQueryClientProvider } from '@/components/react-query-client-provider'

import { NFTProvider } from "./nft/useNFT"

interface RootLayoutProps {
  children: React.ReactNode
 
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL('https://defione.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
      'es-ES': '/es-ES',
      'fr-FR': '/fr-FR',
      'jp-JP': '/jp-JP',
      'ko-KO': '/ko-KP',
      'zh-ZH': '/zh-ZH',
      'pt-PT': '/pt-PT',
    },
  },
  description: siteConfig.description,
  referrer: 'origin-when-cross-origin',
  keywords: ['Wyoming DAO', 'DAO', 'Quantum One DAO', 'Quantum One', 'DA-FI Token', 'Web 3', 'Robert Mourey Jr', 'Cody Clark', 'Sui', 'SAFE', 'smart accounts', 'DAO airdrop', 'DeFi', 'DEX', 'BitCoin', 'DeFi ONE', 'new opportunity paradigm', 'DAO owned data centers', 'quantum blockchain', 'Ethereum', 'DeFi', 'omni-chain defi','BitCoin smart contracts', 'ERC20', 'governance token', 'DEX governance token', 'open blockchain network', 'digital consumer assets', 'Wyoming DAO', 'Ethereum', 'DeFi Llama', 'swap token and nfts', 'swap on any chain', 'BitCoin DeFi', 'engineering opportunity', 'token lock campaign', 'Zetachain', 'SAFE', 'quantum based blockchain networks', 'decentralized opportunity', 'Da-Fi Token', 'wallet connect', 'github', 'Uniswap v3 smart contracts', 'TVL', 'post quantum cryptography', 'post quantum cryptocurrency', 'decentralized ai', 'blockchain ai', 'ai', 'decentralized compliance protocols'],
  authors: [{ name: 'Quantum One DAO' }],
  creator: 'Quantum One DAO',
  publisher: 'DeFi One', 
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'NextJS',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: "https://defione.io",
    images: [
      {
        url: 'https://defione.io/og-image.jpg', // Must be an absolute URL
        width: 1230,
        height: 640,
      },
      {
        url: 'https://quantumone.b-cdn.net/onyx/opengraph-image.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'blockchain business',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
    twitter: {
         title: siteConfig.name,
         description: siteConfig.description,
         site: '@dfione',
         creator: '@dfione',
         images: [
      {
        url: 'https://defione.io/twitter-image.jpg', // Must be an absolute URL
        width: 1800,
        height: 900,
      },
      {
        url: 'https://quantumone.b-cdn.net/onyx/twitter-image.jpg',
        width: 1800,
        height: 900,
      },
     ],
   },
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) { 

{/*
const { toast } = useToast()

  useEffect(() => {
    if (!Cookies.get("firstTimeVisit")) {
      toast({
        title: "Welcome to DFI1's test Dapp.",
        description: "This test Dapp is under development, please do not use real funds.",
        duration: 60000,
      })
      Cookies.set("firstTimeVisit", "true", { expires: 7 })
    }
  }, [])

*/}

  return (
<ReactQueryClientProvider client={queryClient}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>

<div className="relative flex min-h-screen flex-col">
<SiteHeader/>
   <div className="flex-1">
        <WagmiRainbowProvider>
  <BalanceProvider>
      <FeesProvider>
        <ValidatorsProvider>
          <StakingProvider>
            <PricesProvider>
              <CCTXsProvider>
                <NFTProvider>


              <section className="container px-4 mt-4">
                      {children}
                    </section>
                  </div>
                  <Toaster />
                </NFTProvider>
              </CCTXsProvider>
            </PricesProvider>
          </StakingProvider>
        </ValidatorsProvider>
      </FeesProvider>
    </BalanceProvider>
   </WagmiRainbowProvider/>
</div>
      </body>
    </html>
</ReactQueryClientProvider >
  )
}
