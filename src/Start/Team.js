import React from "react"
import styled from "styled-components"

import { Id } from "./components/Id"

const team = [
  {
    key: 0,
    image: "/pics-jj.png",
    name: "Jikku Jose",
    subtitle: "Design, Blockchain",
  },
  {
    key: 3,
    image: "/pics-nw.png",
    name: "Nathan Wadhwani",
    subtitle: "Project Management, Strategy",
  },
  {
    key: 1,
    image: "/pics-rbs.png",
    name: "Rakesh BS",
    subtitle: "Algorithms, Blockchain, Cryptography",
  },
  {
    key: 2,
    image: "/pics-nm.png",
    name: "Nikhil Mohan",
    subtitle: "System Architecture, Distributed Systems",
  },
]

export function Team() {
  return (
    <Back>
      <div className="flex justify-between" style={{ width: "50rem" }}>
        {team.map(member => <Id {...member} />)}
      </div>
    </Back>
  )
}

const Back = styled.div.attrs({
  className: "w-100 h5 flex ca",
})`
  height: 32rem;
  background: rgba(56, 239, 125, 0.03);
`
