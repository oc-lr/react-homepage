import styled from "styled-components"

export const Container = styled.div.attrs({
  className: "cv",
})`
  display: flex;
  justify-content: space-between;

  @media (max-width: 30rem) {
    flex-direction: column;
    align-items: center;
  }
`

export const Links = styled.div.attrs({
  className: "flex sans-serif white f6 justify-center",
})``

export const Social = styled.div.attrs({
  className: "flex sans-serif white f6 justify-center",
})`
  @media (max-width: 30rem) {
    margin-top: 0.5rem;
  }
`

export const Link = styled.div.attrs({
  className: "ml2 pointer pa1 white-80 hover-white",
})``

export const Right = styled.div.attrs({
  className: "",
})`
  display: flex;

  @media (max-width: 30rem) {
    flex-direction: column;
  }
`
