import React from "react"
import { Wrapper, Container } from "./sc"
import { Card } from "./Card"

import { tokenBenefits } from "data/token-benefits"

export function TokenBenefits() {
  return (
    <Wrapper backgroundImage="wave_down.svg">
      <Container>{tokenBenefits.map(item => <Card {...item} />)}</Container>
    </Wrapper>
  )
}
