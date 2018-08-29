import styled from "styled-components"
import { transparentize } from "polished"

import { blue } from "config"

export const Wrapper = styled.div.attrs({
  className: "fv ca",
})`
  background: ${p => (p.shade ? transparentize(0.95, blue) : "transparent")};
`

export const Container = styled.div.attrs({
  className: "f f3 black-80 cv flex-wrap jc",
})`
  max-width: 60rem;
  line-height: 0;

  @media (max-width: 30rem) {
    flex-direction: column;
    align-content: between;
    text-align: center;
  }
`
