import styled from "styled-components"

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
