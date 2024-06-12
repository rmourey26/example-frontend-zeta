export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "DeFi ONE Test App",
  description: "The chain-agnostic DEX for the post quantum era.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    
    { 
      title: "NFTs",
      href: "/nft",
    },
    { 
      title: "Staking",
      href: "/staking",
    },
    { 
      title: "Pools",
      href: "/pools",
    }, 
    { 
      title: "X-Chain Messaging",
      href: "/messaging",
    },
  ],
  links: {
    twitter: "https://twitter.com/dfione",
    github: "https://github.com/DeFi-1",
    defione: "https://defione.io",
    login: "https://quantumone.io/auth",
    signup: "https://quantumone.io/onboarding",
    signout: "https://quantumone.io/signout",
    linkedinRM: "https://linkedin.com/in/robertmoureyjr",
    linkedinCC: "https://linkedin.com/in/codyclark",
    dafietherscan:"https://etherscan.io/token/0xeaad65885fea47a3b1258935f4ce83aab06fdd3a",
    qonepaper: "https://www.notion.so/Quantum-One-Research-and-Pitch-Paper-9c2497e7f4534ee08eb2f25d131d7ed5",
    discord: "https://discord.com/invite/AJw2bDsCNh",

  },
}
