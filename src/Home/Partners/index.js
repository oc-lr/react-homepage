import React from "react"
import { Wrapper, Container } from "./sc"

export function Partners() {
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
