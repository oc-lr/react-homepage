import { urlPrefix } from "config"

const prefix = process.env["NODE_ENV"] === "production" ? urlPrefix : ""

export const team = [
  {
    key: 0,
    name: "Nathan Wadhwani",
    image: `${prefix}/images/nathan_wadhwani.png`,
    designation: "CEO",
    social: [
      {
        key: 2,
        network: "linkedin",
        link: "https://www.linkedin.com/in/nathanwadhwani/",
      },
    ],
  },
  {
    key: 1,
    name: "Jikku Jose",
    image: `${prefix}/images/jikku_jose.png`,
    designation: "CTO",
    social: [
      {
        key: 0,
        network: "twitter",
        link: "https://twitter.com/JikkuJose",
      },
      { key: 1, network: "github", link: "https://github.com/JikkuJose" },
      {
        key: 2,
        network: "linkedin",
        link: "https://linkedin.com/in/JikkuJose",
      },
    ],
  },
  {
    key: 2,
    name: "Nihil Mohan",
    image: `${prefix}/images/nikhil_mohan.png`,
    designation: "System Architect",
    social: [
      { key: 1, network: "github", link: "https://github.com/nikhil-mohan" },
    ],
  },
  {
    key: 3,
    name: "Rakesh BS",
    image: `${prefix}/images/rakesh_bs.png`,
    designation: "Blockchain Expert",
    social: [
      {
        key: 0,
        network: "twitter",
        link: "https://twitter.com/rakesh_bs",
      },
      { key: 1, network: "github", link: "https://github.com/rakeshbs" },
      {
        key: 2,
        network: "linkedin",
        link: "https://www.linkedin.com/in/rakesh-bs-78732817",
      },
    ],
  },
]
