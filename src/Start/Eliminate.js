import React from "react"
import styled from "styled-components"

import { ThirdParty } from "../../glyphs/ThirdParty"

export function Eliminate() {
  return (
    <div className="pv5 flex">
      <Content>
        OrigoChain disintermediates trusted third parties in ownership
        management systems
      </Content>
      <ThirdParty scale={0.7} />
    </div>
  )
}

const Content = styled.div.attrs({
  className: "f2 open-sans fw2 cv",
  style: { width: "22rem" },
})``
