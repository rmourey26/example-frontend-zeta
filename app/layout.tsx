"use client"

import "@/styles/globals.css"
import {
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  xdefiWallet,
  coinbaseWallet,
  walletConnectWallet,

} from "@rainbow-me/rainbowkit/wallets"


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
        accentColor: '#401858',
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
