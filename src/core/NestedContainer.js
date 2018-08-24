import React from "react"
import styled from "styled-components"

const contentWidth = 86

export function NestedContainer(props) {
  return (
    <Wrapper {...props}>
      <Container
        className={props.innerClassName}
        contentWidth={props.contentWidth || contentWidth}
        innerCss={props.innerCss}
      >
        {props.children}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div.attrs({
  className: "",
})`
  ${p => p.css};
`

const Container = styled.div.attrs({
  className: "w-100",
})`
  //padding-left: 5%;
  //padding-right: 5%;
  max-width: ${p => p.contentWidth}rem;
  ${p => p.innerCss};
`
