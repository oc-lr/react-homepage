import React from "react"
import styled from "styled-components"

export function Card({ Icon, title, description }) {
  return (
    <Container>
      <Icon />
      <div
        className="mt-8 mb-2 b open-sans white f4 pa2 br2"
        style={{ background: "rgba(255, 255, 255, 0.2)" }}
      >
        {title}
      </div>
      <div className="f5 open-sans white-80">{description}</div>
    </Container>
  )
}

const Container = styled.div.attrs({
  className: "flex flex-column items-center pa3 pv4 br3 tr1",
})`
  width: 14rem;
  height: 17rem;

  &:hover {
    background: rgba(17, 153, 142, 0.1);
  }
`
