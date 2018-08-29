import { urlPrefix } from "config"

const prefix = process.env["NODE_ENV"] === "production" ? urlPrefix : ""

export const tech = [
  {
    title: "Oris",
    image: `${prefix}/images/tech-oris.svg`,
    description:
      "Supply limited tokens within OrigoChain ecosystem required for asset transactions.",
  },
  {
    title: "Origol",
    image: `${prefix}/images/tech-origol.svg`,
    description:
      "Non-fungible asset representation protocol in OrigoChain which facillitates transactions.",
  },
]
