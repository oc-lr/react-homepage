import React from "react"
import styled from "styled-components"

import { Logo } from "Logo"
import { Github } from "glyphs/Github"
import { Twitter } from "glyphs/Twitter"
import { Slack } from "glyphs/Slack"

import { Subscribe } from "../Subscribe"

import { Container, Wrapper } from "./styled-components.js"

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Logo color="white" scale={0.3} />
          <Content>
            <div className="flex">
              <TextLinks title="Company" links={companyLinks} />
              <TextLinks title="Terms & Conditions" links={terms} />
            </div>
            <Subscribe />
          </Content>
          <SocialLinks />
        </div>
      </Container>
    </Wrapper>
  )
}

function SocialLinks() {
  return (
    <div className="">
      <a href="https://twitter.com/OrigoChain" className="mr3">
        <Twitter scale={0.6} color="#fff" />
      </a>
      <a href="https://github.com/OrigoChain" className="mr3">
        <Github scale={0.6} color="#fff" />
      </a>
      <a href="https://slack.com/OrigoChain">
        <Slack scale={0.6} color="#fff" />
      </a>
    </div>
  )
}

const Link = ({ label, url }) => (
  <div className="mv1">
    <a className="f6 white-70 fw1 link" href={url}>
      {label}
    </a>
  </div>
)

const companyLinks = [
  { key: 0, label: "About", url: "/about" },
  { key: 1, label: "Blog", url: "/blog" },
  { key: 2, label: "Press", url: "/Press" },
  { key: 3, label: "Contact", url: "/contact" },
]

const terms = [
  { key: 0, label: "Terms of Service", url: "/tos" },
  { key: 1, label: "Privacy Statement", url: "/privacy" },
]

const Content = styled.div.attrs({
  className: "flex white justify-between mv4 cv",
})`
  @media (max-width: 30rem) {
    flex-direction: column;
  }
`

const TextLinks = ({ title, links }) => (
  <div className="mr4 open-sans pr2">
    <div className="ttu mb2 f6 fw3 white-90">{title}</div>
    <div>{links.map(link => <Link {...link} />)}</div>
  </div>
)
