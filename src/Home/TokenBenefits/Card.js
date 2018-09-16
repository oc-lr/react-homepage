import React from "react"
import styled from "styled-components"
import { lighten } from "polished"

import { blue } from "config"

const Wrapper = styled.div.attrs({
  className: "",
})`
  flex: 1;
`

export function Card({ title, image, description }) {
  return (
    <Wrapper>
      <Container>
        <img className="br-100 w4" src={image} alt="profile_pic" />
        <div className="pt3 pb1 black-90 f3" style={{ lineHeight: "1.5rem" }}>
          {title}
        </div>
        <div className="pt2 pb3 black-70 fw1 f5 tc">{description}</div>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div.attrs({
  className: "br3 mr4 ph3 mb4 fv ic pv4 sans-serif",
})`
  @media (max-width: 30rem) {
    margin-right: 0rem;
  }
`

const Button = styled.div.attrs({
  className: "flex pv3 ph4 ca white br2 pointer tr1",
})`
  height: 2.5rem;
  background: ${blue}

  &:hover {
    background: ${lighten(0.1, blue)}
  }
`
