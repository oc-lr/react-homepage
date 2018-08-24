import React from "react"
import styled from "styled-components"
import Particles from "react-particles-js"

import { Logo } from "../Logo"
import { Decentralized } from "../glyphs/Decentralized"
import { Secure } from "../glyphs/Secure"
import { Verifiable } from "../glyphs/Verifiable"

export function Header() {
  return (
    <Back>
      <Particles
        width="70rem"
        height="30rem"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#fff",
                blur: 0,
              },
            },
          },
        }}
        style={{ width: "100%" }}
      />
      <div className="absolute " style={{ width: "50rem", height: "30rem" }}>
        <div className="flex justify-between w-full h2 cv">
          <Logo scale={0.3} />
          <div className="flex open-sans">
            <Link>Apply for Sale</Link>
            <Link>Team</Link>
            <Link>Culture</Link>
            <Link>Careers</Link>
          </div>
        </div>
        <div
          className=" white tc f2 fw2 open-sans"
          style={{ maxWidth: "50rem", paddingTop: "12rem" }}
        >
          OrigoChain decentralizes land title management to ensure ownership
          security
        </div>
      </div>
    </Back>
  )
}

const Link = styled.div.attrs({
  className:
    "text-white ml-4 p-2 rounded select-none cursor-pointer text-sm font-light tr1",
})`
  letter-spacing: 0.06rem;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`

const Back = styled.div.attrs({
  className: "w-100 h5 flex ca",
})`
  height: 40rem;
  background: linear-gradient(to top, #0575e6, #021b79);
  background: linear-gradient(to bottom, #396afc, #2948ff);
`
