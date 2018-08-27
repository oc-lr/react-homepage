import styled from "styled-components"

export const Container = styled.div.attrs({
  className: "bg-black-10 pv3 ph2 pa5-ns ca fv cv",
})``

export const Card = styled.div.attrs({
  className: "bg-white ml4-ns ml0 mv2 br3 soft-shadow1",
})`
  width: 20rem;
  height: 20rem;
`

export const Tagline = styled.div.attrs({
  className: "ml4-ns ml0 f2-ns f3 ph2 tc sans-serif lh-copy mb3 bg-re pv2",
})``

export const Stack = styled.div.attrs({
  className: "",
})`
  display: flex;

  @media (max-width: 30rem) {
    flex-direction: column;
  }
`
