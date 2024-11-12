import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  base,
  baseSepolia, 
} from "wagmi/chains";

if (!process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID) {
  throw new Error(
    "You need to provide a NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID in your .env file"
  );
}

export const config = getDefaultConfig({
  appName: "Next.js Web3 Boilerplate",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains: [
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [baseSepolia] : []),
  ],
  ssr: true,
});
