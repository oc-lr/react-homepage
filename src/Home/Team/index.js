import React from "react"
import { Card } from "./Card"
import { Wrapper, Container } from "./styled-components"

const team = [
  {
    name: "Nathan Wadhwani",
    image: "/images/nathan_wadhwani.png",
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
    name: "Jikku Jose",
    image: "/images/jikku_jose.png",
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
    name: "Nihil Mohan",
    image: "/images/nikhil_mohan.png",
    designation: "System Architect",
    social: [
      { key: 1, network: "github", link: "https://github.com/nikhil-mohan" },
    ],
  },
  {
    name: "Rakesh BS",
    image: "/images/rakesh_bs.png",
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

export function Team() {
  return (
    <Wrapper>
      <div className="f2 blue sans-serif pb5">Team</div>
      <div className="">
        <Container>{team.map(member => <Card {...member} />)}</Container>
      </div>
    </Wrapper>
  )
}
