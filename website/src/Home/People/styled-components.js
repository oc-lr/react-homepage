import styled from "styled-components"
import { transparentize } from "polished"
import { blue } from "config"

export const Wrapper = styled.div.attrs({
  className: "pv5 fv ca",
})`
  background: ${p => (p.shade ? transparentize(0.95, blue) : "transparent")};
`

export const Container = styled.div.attrs({
  className: "ph4 flex-wrap jc",
})`
  max-width: 60rem;
  display: flex;

  @media (max-width: 30rem) {
    width: 100%;
    flex-direction: column;
  }
`
