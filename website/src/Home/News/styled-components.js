import styled from "styled-components"
import { transparentize } from "polished"

import { blue } from "config"

export const Wrapper = styled.div.attrs({
  className: "pv5 fv ca",
})`
  background: ${p => (p.shade ? transparentize(0.95, blue) : "transparent")};
`

export const Container = styled.div.attrs({
  className: "pv4 f f3 black-80 cv flex-wrap jc",
})`
  max-width: 60rem;

  @media (max-width: 30rem) {
    flex-direction: column;
    align-content: between;
    text-align: center;
    height: 32rem;
  }
`

export const NewsItem = styled.a.attrs({
  className: "mr5 mt3",
  target: "_blank",
  href:
    "https://inc42.com/buzz/keralas-ajna-and-delhis-brun-health-ready-to-fly-to-singularity-university-after-winning-global-impact-challenge-india-2018/",
})`
  @media (max-width: 30rem) {
    margin-right: 0;
  }
`
