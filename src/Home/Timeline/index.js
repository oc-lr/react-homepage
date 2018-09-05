import React from "react"
import { Wrapper, Container } from "./styled-components"
import { Slice } from "./Slice"

import { timeline } from "data/timeline"

export function Timeline() {
  return (
    <Wrapper>
      <Container>
        <Slice title="" subtitle="" noTopBorder />
        {timeline.map(segment => <Slice {...segment} />)}
      </Container>
    </Wrapper>
  )
}
