import React from "react"
import { Wrapper, Container } from "./sc"

import { partners } from "data/partners"

export function Partners({ partners = partners }) {
  return (
    <Wrapper>
      <div
        className="f3 tc fw3 lh-copy tracked black-70 sans-serif pb4 ph4"
        style={{ maxWidth: "60rem" }}
      >
        {title}
      </div>
      <Container>{partners.map(partner => <Partner {...partner} />)}</Container>
    </Wrapper>
  )
}
