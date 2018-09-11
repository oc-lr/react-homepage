import { urlPrefix } from "config"

const prefix = process.env["NODE_ENV"] === "production" ? urlPrefix : ""

export const tech = [
  {
    key: 0,
    title: "Origo Coin",
    image: `${prefix}/images/tech-oris.svg`,
    description:
      "Supply limited tokens within OrigoChain ecosystem required for asset transactions.",
  },
  {
    key: 1,
    title: "Origo Protocol",
    image: `${prefix}/images/tech-origol.svg`,
    description:
      "Non-fungible asset representation protocol in OrigoChain which facillitates transactions.",
  },
]
