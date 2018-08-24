import React from "react"
import { Container, Links, Social, Link, Right } from "./styled-components"
import { Logo } from "Logo"

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
            <Link>Tw</Link>
            <Link>Tg</Link>
            <Link>GH</Link>
            <Link>Re</Link>
          </Social>
        </Right>
      </Container>
    </div>
  )
}
