import React from "react"
import styled from "styled-components"
import { blue } from "config"
import { transparentize } from "polished"

export function Slice({ title, subtitle, noTopBorder }) {
  return (
    <Wrapper>
      <Container noTopBorder={noTopBorder}>
        <Bubble />
        <div className="f3 mb2">{title}</div>
        <div className="f5 lh-copy black-70">{subtitle}</div>
      </Container>
    </Wrapper>
  )
}

const Bubble = ({ radius = 10 }) => (
  <svg
    height="100"
    width="100"
    className="absolute"
    style={{ left: -12, top: -12 }}
  >
    <circle
      cx={radius}
      cy={radius}
      r={radius * 0.6}
      stroke={blue}
      strokeWidth="3"
      fill={blue}
    />
  </svg>
)

const Wrapper = styled.div.attrs({
  className: "f ch",
})``

const Container = styled.div.attrs({
  className: "pb5 pt4 pl4 sans-serif relative tr1",
})`
  width: 15rem;
  border-left: 0.25rem solid ${blue};
  ${p => (p.noTopBorder ? "" : "border-top: 0.25rem solid " + blue)};
  &:hover {
    background: ${transparentize(0.96, blue)};
  }
`
