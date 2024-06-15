"use client"

import "@/styles/globals.css"
import { siteConfig } from '@/config/site'
import {
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  xdefiWallet,
  coinbaseWallet,
  walletConnectWallet,

} from "@rainbow-me/rainbowkit/wallets"

import type { Metadata } from 'next'

import Viewport from 'next'

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Index from "@/app/index"

import { ZetaChainProvider } from "./ZetaChainContext"
import "@rainbow-me/rainbowkit/styles.css"
import {
  RainbowKitProvider,
  connectorsForWallets, lightTheme, darkTheme,midnightTheme,
} from "@rainbow-me/rainbowkit"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import {
  bscTestnet,
  bsc,
  polygonMumbai,
  sepolia,
  zetachainAthensTestnet,
  mainnet,
} from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"


interface RootLayoutProps {
  children: React.ReactNode
}

const metadata: Metadata = {
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
        url: 'https://defione.io/opengraph-image.jpg', // Must be an absolute URL
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


const viewport: typeof Viewport =  {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    sepolia,
    polygonMumbai,
    bscTestnet,
    bsc,
    {
      ...zetachainAthensTestnet,
      iconUrl: "https://www.zetachain.com/favicon/favicon.png",
    },
  ],
  [publicProvider()]
)

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ projectId: "2d3e1bb035d05e16f0241415b77e893a", chains }),
      xdefiWallet({ chains }),
      okxWallet({ projectId: "2d3e1bb035d05e16f0241415b77e893a", chains }),
      walletConnectWallet({ projectId: "2d3e1bb035d05e16f0241415b77e893a", chains })
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider
            theme={midnightTheme({
        accentColor: '#030304',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
      })}
            chains={chains}>
              <ZetaChainProvider>
                <Index>{children}</Index>
              </ZetaChainProvider>
            </RainbowKitProvider>
          </WagmiConfig>
        </body>
      </html>
    </>
  )
}
