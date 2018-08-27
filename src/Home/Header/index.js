import React from "react"
import { Container, Links, Social, Link, Right } from "./styled-components"
import { Logo } from "Logo"
import { Github } from "glyphs/Github"
import { Twitter } from "glyphs/Twitter"

export function Header() {
  return (
    <div className="w100 bg-blue pa3 ph5-ns">
      <Container>
        <div className="white flex items-center sans-serif mb2 mb0-ns">
          <Logo scale={0.24} />
          <div className="ml2 f3">OrigoChain</div>
        </div>
        <Right>
          <Links>
            <Link>Apply</Link>
            <Link>Sale</Link>
            <Link>Careers</Link>
            <Link>Culture</Link>
            <Link>Blog</Link>
          </Links>
          <Social>
            <div className="f cv ml2 pointer">
              <Github color="#fff" scale={0.5} />
            </div>
            <div className="f cv ml2 pointer">
              <Twitter color="#fff" scale={0.53} />
            </div>
          </Social>
        </Right>
      </Container>
    </div>
  )
}
