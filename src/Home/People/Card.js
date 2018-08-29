import React from "react"
import styled from "styled-components"
import { Twitter } from "glyphs/Twitter"
import { Github } from "glyphs/Github"
import { LinkedIn } from "glyphs/LinkedIn"

export function Card({ name, image, designation, social }) {
  return (
    <Container>
      <img className="br-100 w4" src={image} alt="profile_pic" />
      <div className="pt3 pb1 black-90 f3" style={{ lineHeight: "1.5rem" }}>
        {name}
      </div>
      <div className="pb3 black-70 f6">{designation}</div>
      <div className="">{social.map(medium => <Icon {...medium} />)}</div>
    </Container>
  )
}

const Container = styled.div.attrs({
  className: "bg-white br3 mr4 mb3 grow soft-shadow1 fv ic pv4 sans-serif",
})`
  min-width: 18rem;

  @media (max-width: 30rem) {
    margin-right: 0rem;
  }
`

function Icon({ network, link }) {
  let Glyph = <div>y</div>

  switch (network) {
    case "twitter":
      Glyph = Twitter
      break
    case "github":
      Glyph = Github
      break
    case "linkedin":
      Glyph = LinkedIn
      break
    default:
      Glyph = Github
  }

  return (
    <a href={link} className="mr2">
      <Glyph size={20} />
    </a>
  )
}
