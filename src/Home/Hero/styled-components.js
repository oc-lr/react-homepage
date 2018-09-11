import styled from "styled-components"
import { transparentize } from "polished"
import { blue } from "config"

export const Wrapper = styled.div.attrs({
  className: "pv4 mv6 mv0-ns fv ca",
})`
  background: ${p => (p.shade ? transparentize(0.95, blue) : "transparent")};
`

export const Container = styled.div.attrs({
  className: "pv3 ph4 pa5-ns ca fv cv",
})`
  max-width: 60rem;
`

export const Card = styled.div.attrs({
  className: "bg-white ml4-ns ml0 mv2 br3 soft-shadow1",
})`
  width: 20rem;
  height: 20rem;
`

export const Tagline = styled.div.attrs({
  className:
    "fw2 blue ml4-ns ml0 f2-ns f3 ph2 tc sans-serif lh-copy mb3 bg-re pv2",
})``

export const Stack = styled.div.attrs({
  className: "",
})`
  display: flex;

  @media (max-width: 30rem) {
    flex-direction: column;
  }
`
