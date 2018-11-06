import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs({
  className: "",
})`
  flex: 1;
`

export function Card({ title, image, description }) {
  return (
    <Wrapper>
      <Container>
        <img className="br-100 w4" src={image} alt="profile_pic" />
        <div className="pt4 pb2 black-90 f3" style={{ lineHeight: "1.5rem" }}>
          {title}
        </div>
        <div className="pt2 pb3 black-70 fw1 f5 tc">{description}</div>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div.attrs({
  className: "br3 mr4 ph3 mb4 fv ic pv4 sans-serif",
})`
  @media (max-width: 30rem) {
    margin-right: 0rem;
  }
`
