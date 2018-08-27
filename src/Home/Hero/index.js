import React from "react"
import { Card, Container, Tagline, Stack } from "./styled-components"

export function Hero() {
  return (
    <Container>
      <Tagline>OrigoChain secures land titles using blockchain</Tagline>
      <Stack>
        <Card />
        <Card />
      </Stack>
    </Container>
  )
}
