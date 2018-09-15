import styled from "styled-components"
import { transparentize } from "polished"

import { blue } from "config"

export const Wrapper = styled.div.attrs({
  className: "pv5 fv ca",
})`
  background: ${p => (p.shade ? transparentize(0.95, blue) : "transparent")};
`

export const Container = styled.div.attrs({
  className: "jb ph4 pv1 pt3-ns sans-serif f ca",
})`
  width: 80%;
  max-width: 60rem;

  @media (max-width: 30rem) {
    width: 100%;
    flex-direction: column;
  }
`
