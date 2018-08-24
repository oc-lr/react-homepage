import React from "react"
import { Container, Links, Social, Link, Right } from "./styled-components"

export function Header() {
  return (
    <div className=" w100 bg-black-50 pa2 ph5-ns pt2">
      <Container>
        <div className="white sans-serif mb2 mb0-ns">OrigoChain</div>
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
