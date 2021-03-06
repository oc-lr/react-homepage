import React from "react"
import {
  Container,
  Links,
  Social,
  Right,
  StyledLink,
} from "./styled-components"
import { Logo } from "Logo"
import { Link } from "react-router-dom"
import { Github } from "glyphs/Github"
import { Twitter } from "glyphs/Twitter"

import { links } from "config"

export function Header() {
  return (
    <div className="w100 bg-blue pa3 ph5-ns">
      <Container>
        <Link
          to="/"
          className="no-underline white flex items-center sans-serif mb2 mb0-ns"
        >
          <Logo scale={0.24} />
          <div className="ml2 f3">OrigoChain</div>
        </Link>
        <Right>
          <Links>
            <StyledLink to="/culture">Culture</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
          </Links>
          <Social>
            <a target="_blank" href={links.github} className="f cv ml2 pointer">
              <Github color="#fff" scale={0.5} />
            </a>
            <a href="" target="_blank" className="f cv ml2 pointer">
              <Twitter color="#fff" scale={0.53} />
            </a>
          </Social>
        </Right>
      </Container>
    </div>
  )
}
