import React from "react"
import { Card } from "./Card"
import { Wrapper, Container } from "./styled-components"

export function People({ title, members, shade }) {
  return (
    <Wrapper shade={shade}>
      <div className="f2 fw3 blue sans-serif pb5">{title}</div>
      <div className="">
        <Container>{members.map(member => <Card {...member} />)}</Container>
      </div>
    </Wrapper>
  )
}
