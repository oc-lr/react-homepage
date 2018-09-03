import { urlPrefix } from "config"

const prefix = process.env["NODE_ENV"] === "production" ? urlPrefix : ""

export const advisors = [
  {
    key: 1,
    name: "Nand Gangwani",
    image: `${prefix}/images/nand_gangwani.jpeg`,
    designation: "CFO, Evalueserve",
    social: [
      {
        key: 2,
        network: "linkedin",
        link: "https://www.linkedin.com/in/nand-gangwani-1072bb5",
      },
    ],
  },
  {
    key: 2,
    name: "Betsabe Botatis",
    image: `${prefix}/images/betsabe_botaitis.png`,
    designation: "COO, Aikon",
    social: [
      {
        key: 1,
        network: "linkedin",
        link: "https://www.linkedin.com/in/betsabebotaitis/",
      },
    ],
  },
  {
    key: 3,
    name: "Nikhil Kaushik",
    image: `${prefix}/images/nikhil_kaushik.png`,
    designation: "Co-founder, Graviky Labs",
    social: [
      {
        key: 3,
        network: "linkedin",
        link: "https://in.linkedin.com/in/canikhilkaushik",
      },
    ],
  },
]
