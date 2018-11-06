import styled from "styled-components"
import { transparentize } from "polished"

import { blue } from "config"

export const Wrapper = styled.div.attrs({
  className: "pv5 fv ca",
})`
  background: ${p => (p.shade ? transparentize(0.95, blue) : "transparent")};
  ${p =>
    p.backgroundImage
      ? `background: url(/images/backgrounds/${p.backgroundImage})`
      : ""};
  background-size: cover;
`

export const Container = styled.div.attrs({
  className: "f ph4 pv1 pt3-ns pb5-ns sans-serif",
})`
  // width: 80%;
  max-width: 70rem;

  @media (max-width: 30rem) {
    width: 100%;
    flex-direction: column;
  }
`
