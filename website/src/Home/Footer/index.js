import React from "react"

import { Logo } from "Logo"
import { Wrapper } from "./styled-components"
import { Container } from "./styled-components"

import { Github } from "glyphs/Github"
import { Twitter } from "glyphs/Twitter"

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <div className="sans-serif white f3 tc lh-copy pb4 mb3">
          Secure land records for better tomorrow.
        </div>
        <div className="f jb sans-serif f6 lh-copy">
          <div className="left:">
            <div className="white flex items-center sans-serif mb2 mb0-ns">
              <Logo scale={0.24} />
              <div className="ml2 f3">OrigoChain</div>
            </div>
            <div className="flex mt2 pt1">
              <div className="f cv pointer">
                <Github color="#fff" scale={0.5} />
              </div>
              <div className="f cv ml2 pointer">
                <Twitter color="#fff" scale={0.53} />
              </div>
            </div>
          </div>
          <div className="fv white">
            <div className="">Contact</div>
            <div className="">Team</div>
            <div className="">Presale</div>
            <div className="">Pilots</div>
            <div className="">Recognition</div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
