import styled from "styled-components"

export const Container = styled.div.attrs({
  className: "bg-green pv3 ph2 pa5-ns ca",
})`
  display: flex;

  @media (max-width: 30rem) {
    flex-direction: column;
  }
`

export const Card = styled.div.attrs({
  className: "bg-yellow ml4-ns ml0 mv2 br3",
})`
  width: 20rem;
  height: 20rem;
`
