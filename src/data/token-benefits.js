import { urlPrefix } from "config"

const prefix = process.env["NODE_ENV"] === "production" ? urlPrefix : ""

export const tokenBenefits = [
  {
    key: 0,
    title: "Liquidity",
    image: `${prefix}/images/features/liquidity.svg`,
    description:
      "Illiquid assets can be tokenized and securely traded across borders on global exchanges",
  },
  {
    key: 1,
    title: "Fractional Ownership",
    image: `${prefix}/images/features/fractional-ownership.svg`,
    description:
      "Tokensized assets can be fractionally traded democratizing and increasing financial opportunities for investors",
  },
  {
    key: 2,
    title: "Security",
    image: `${prefix}/images/features/security.svg`,
    description: "Assets becomes very secure through ownership traces",
  },
]
