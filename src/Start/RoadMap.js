import React from "react"
import styled from "styled-components"

import { SnakeMap } from "../glyphs/SnakeMap"

export function RoadMap() {
  return (
    <div className="ch">
      <SnakeMap scale={1.3} />
    </div>
  )
}

const Content = styled.div.attrs({
  className: "f2 open-sans fw2 cv",
  style: { width: "22rem" },
})``
