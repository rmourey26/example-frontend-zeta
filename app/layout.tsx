
import "@/styles/globals.css"
import { Metadata } from 'next'
import { WagmiRainbowProvider } from '@/context/WagmiRainbowContext'
import { PropsWithChildren } from 'react';
import { siteConfig } from '@/config/site'
import { headers } from "next/headers";
import { Inter as FontSans } from "next/font/google"
import {
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  xdefiWallet,
} from "@rainbow-me/rainbowkit/wallets"

import { ZetaChainProvider } from "@/hooks/useZetaChainClient"
import Index from "@/app/index"

import "@rainbow-me/rainbowkit/styles.css"
import {
  RainbowKitProvider,
  connectorsForWallets, midnightTheme,
} from "@rainbow-me/rainbowkit"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { bscTestnet, sepolia, zetachainAthensTestnet, mainnet } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { alchemyProvider } from "wagmi/providers/alchemy"

interface RootLayoutProps {
  children: React.ReactNode
  
}


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

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


export default function RootLayout({ children}: RootLayoutProps) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}
      >
        <WagmiRainbowProvider
      
           
              <Index>{children}</Index>
           
          </WagmiRainbowProvider/>
      </body>
    </html>
  )
}