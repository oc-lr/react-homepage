import React from "react"
import { SizeMe } from "react-sizeme"

import { SnakeMap } from "glyphs/SnakeMap"

import { Wrapper, Container } from "./styled-components"

export function RoadMap() {
  return (
    <Wrapper>
      <Container>
        <div className="ch ph4">
          <SnakeMap className="w-100" />
        </div>
      </Container>
    </Wrapper>
  )
}
