import styled from "styled-components"
import { transparentize } from "polished"

import { blue } from "config"

export const Wrapper = styled.div.attrs({
  className: "ph4 pv5 fv ca ",
})`
  background: ${p => (p.shade ? transparentize(0.95, blue) : "transparent")};
`

export const Container = styled.div.attrs({
  className: "pv1 cv pt3-ns sans-serif f",
})`
  width: 100%;
  max-width: 70rem;

  @media (max-width: 30rem) {
    width: 100%;
    flex-direction: column;
  }
`

export const Text = styled.div.attrs({
  className: "fw1 f5",
})`
  max-width: 35rem;
`
