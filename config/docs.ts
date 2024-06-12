import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
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
  sidebarNav: [
    {
      title: "Tools",
      items: [
        {
          title: "Soon!",
          href: "#",
          items: [],
        },
      ],
    },
  ],
}