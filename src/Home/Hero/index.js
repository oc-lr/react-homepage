import React from "react"
import { Container, Tagline, Stack, Wrapper } from "./styled-components"
import { Card } from "./Card"

import { tech } from "data/tech"

export function Hero() {
  return (
    <Wrapper shade>
      <Container>
        <Tagline>OrigoChain secures land titles using blockchain.</Tagline>
        <Stack>{tech.map(item => <Card {...item} />)}</Stack>
      </Container>
    </Wrapper>
  )
}
