import React from "react"
import styled from "styled-components"

import { FlowCircle } from "../glyphs/FlowCircle"

export function Process() {
  return (
    <div
      className="pv5 flex justify-between w-100"
      style={{ maxWidth: "50rem" }}
    >
      <Content>
        OrigoChain facillitates authorities to record transaction details on the
        blockchain.
      </Content>
      <FlowCircle scale={0.7} />
    </div>
  )
}

const Content = styled.div.attrs({
  className: "f2 open-sans fw2 cv",
  style: { width: "20rem" },
})``
