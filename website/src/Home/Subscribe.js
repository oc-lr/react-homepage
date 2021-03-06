import React from "react"
import styled from "styled-components"
import { lighten } from "polished"

import { blue } from "config"

export function Subscribe() {
  return (
    <Container>
      <EmailField />
      <Button>Subscribe</Button>
    </Container>
  )
}

const EmailField = styled.input.attrs({
  type: "text",
  className: "br2 pa2 mr2",
  placeholder: "me@domain.com",
})`
  color: #396afc;
  font-size: 1rem;
  height: 2.5rem;
  min-width: 12rem;
  box-shadow: inset 0 0 0.24rem rgba(57, 106, 252, 0.8);
`

const Container = styled.div.attrs({
  className: "flex flex-start pa3 tr2 br2 open-sans",
})`
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 30rem) {
    margin-top: 2rem;
  }
`

const Button = styled.div.attrs({
  className: "flex ph3 ca white br2 pointer tr1",
})`
  height: 2.5rem;
  background: ${lighten(0.1, blue)}

  &:hover {
    background: ${blue}
  }
`
