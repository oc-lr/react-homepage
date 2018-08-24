import styled from "styled-components"

export const Container = styled.div.attrs({
  className: "",
})`
  display: flex;
  justify-content: space-between;

  @media (max-width: 30rem) {
    flex-direction: column;
    align-items: center;
  }
`

export const Links = styled.div.attrs({
  className: "flex sans-serif white f7 justify-center",
})``

export const Social = styled.div.attrs({
  className: "flex sans-serif white f7 justify-center",
})``

export const Link = styled.div.attrs({
  className: "ml2 pointer pa1",
})``

export const Right = styled.div.attrs({
  className: "",
})`
  display: flex;

  @media (max-width: 30rem) {
    flex-direction: column;
  }
`
