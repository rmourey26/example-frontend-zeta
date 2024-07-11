
"use client"
import "@/styles/globals.css"
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

type Props = {
  children: ReactNode
}


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    sepolia,
    bscTestnet,
    mainnet,
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
      metaMaskWallet({ projectId: "PROJECT_ID", chains }),
      xdefiWallet({ chains }),
      okxWallet({ projectId: "PROJECT_ID", chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})



export default function WagmiRainbowProvider({ children }: Props) {

  return (
     
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider 
        theme={midnightTheme({
        accentColor: '#6b7280',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
      })}
      chains={chains}>
            <ZetaChainProvider>{children}
        
            </ZetaChainProvider>
          </RainbowKitProvider>
        </WagmiConfig>

  )
}