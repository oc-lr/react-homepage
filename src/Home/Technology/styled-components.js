import styled from "styled-components"
import { callOutHeight } from "config"

export const Wrapper = styled.div.attrs({
  className: "",
})``

export const Container = styled.div.attrs({
  className: "bg-blue min-vh-100",
})``

export const Tagline = styled.div.attrs({
  className: "absolute white sans-serif w-100 f ca tc",
})`
  font-size: 3.4rem;
  font-weight: 200;
  height: ${callOutHeight}rem;

  @media (max-width: 30rem) {
    font-size: 2.2rem;
  }
`
